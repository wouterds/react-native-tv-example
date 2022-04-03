import axios from 'axios';
import { differenceInMilliseconds, endOfToday, startOfToday } from 'date-fns';
import { XMLParser } from 'fast-xml-parser';
import { uniqBy } from 'lodash';
import Config from 'react-native-config';
import { call, put, takeEvery } from 'redux-saga/effects';
import { setChannels } from 'store/channels/slice';
import { Channel } from 'store/channels/types';
import { setEvents } from 'store/events/slice';
import { Event } from 'store/events/types';

import { bootstrap, bootstrapError, bootstrapSuccess } from './slice';

const CHANNEL_WHITELIST = [
  'Een.be',
  'Canvas.be',
  'VTM.be',
  'VTMKids.be',
  'Play4.be',
  'Play5.be',
  'Play6.be',
  'Play7.be',
  'NPO1.nl',
  'NPO2.nl',
  'LaUne.be',
  'ARTEBelgique.fr',
  'BloombergTVEurope.us',
  'CNBCEurope.us',
  'CNNInternationalEurope.us',
];

const parseChannel = (channel: {
  '@_id': string;
  'display-name': string;
  icon: { '@_src': string };
}): Channel => ({
  id: channel?.['@_id'],
  name: channel?.['display-name'],
  imageUrl: channel?.icon?.['@_src'],
});

const parseEventDate = (date: string) => {
  const year = date.substring(0, 4);
  const month = date.substring(4, 6);
  const day = date.substring(6, 8);
  const hour = date.substring(8, 10);
  const minute = date.substring(10, 12);
  const seconds = date.substring(12, 14);

  return new Date(
    parseInt(year, 10),
    parseInt(month, 10) - 1,
    parseInt(day, 10),
    parseInt(hour, 10) + 2, // no idea why, but the time is off by 2 hours
    parseInt(minute, 10),
    parseInt(seconds, 10),
  );
};

const generateEventId = (channelId: string, index: number) => {
  return `channel:${channelId}.event:${index}`;
};

const parseEvent = (
  data: {
    '@_channel': string;
    '@_start': string;
    '@_stop': string;
    desc: { '#text': string };
    category: Array<{ '#text': string }>;
    title: { '#text': string };
  },
  index: number,
): Event => {
  const categories: string[] = [];

  if (Array.isArray(data?.category)) {
    categories.push(...(data?.category).map(category => category?.['#text']));
  } else if (typeof data?.category === 'object') {
    categories.push(data?.category?.['#text']);
  }

  const channelId = data?.['@_channel'];
  const id = generateEventId(channelId, index);

  return {
    id,
    channelId,
    title: data?.title?.['#text'],
    startTime: parseEventDate(data?.['@_start']),
    endTime: parseEventDate(data?.['@_stop']),
    description: data?.desc?.['#text'] || null,
    categories,
  };
};

function* bootstrapFlow() {
  const start = new Date();

  console.log('[bootstrap] bootstrapping app');

  let data: string;
  try {
    ({ data } = yield call(axios.get, Config.EPG_ENDPOINT));
  } catch (e) {
    console.error('fetching data failed', e);
    yield put(bootstrapError());
    return;
  }

  if (!data) {
    console.error('no data');
    yield put(bootstrapError());
    return;
  }

  let channels: Channel[];
  let events: Event[];
  try {
    const parser = new XMLParser({ ignoreAttributes: false });
    const json = parser.parse(data);

    const parsedChannels = (json.tv.channel || []).map(parseChannel);

    channels = CHANNEL_WHITELIST.map(channelId =>
      parsedChannels.find((channel: Channel) => channel.id === channelId),
    ).filter(Boolean);

    console.log(`[bootstrap] parsed ${channels.length} channels`);

    events = uniqBy(
      (json.tv.programme || [])?.map(parseEvent).filter((event: Event) => {
        if (!CHANNEL_WHITELIST.includes(event.channelId)) {
          return false;
        }

        if (event.endTime > endOfToday()) {
          return false;
        }

        if (event.startTime < startOfToday()) {
          return false;
        }

        return true;
      }),
      (event: Event) =>
        `${event.channelId}-${event.startTime}-${event.endTime}`,
    );
    console.log(`[bootstrap] parsed ${events.length} events`);
  } catch (e) {
    console.error('parsing data failed', e);
    yield put(bootstrapError());
    return;
  }

  if (!channels?.length) {
    console.error('no channels detected');
    yield put(bootstrapError());
    return;
  }

  if (!events?.length) {
    console.error('no events detected');
    yield put(bootstrapError());
    return;
  }

  yield put(setChannels(channels));
  yield put(setEvents(events));
  yield put(bootstrapSuccess());

  console.log(
    '[bootstrap] finished bootstrapping app in',
    differenceInMilliseconds(new Date(), start),
    'ms',
  );
}

export default function* watchApp() {
  yield takeEvery(bootstrap, bootstrapFlow);
}

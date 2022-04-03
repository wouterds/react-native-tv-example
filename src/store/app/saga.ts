import axios from 'axios';
import { differenceInMilliseconds } from 'date-fns';
import { XMLParser } from 'fast-xml-parser';
import Config from 'react-native-config';
import { call, put, takeEvery } from 'redux-saga/effects';
import { setChannels } from 'store/channels/slice';

import { bootstrap, bootstrapError, bootstrapSuccess } from './slice';

const parseChannel = (channel: {
  '@_id': string;
  'display-name': string;
  icon: { '@_src': string };
}) => ({
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
    parseInt(hour, 10),
    parseInt(minute, 10),
    parseInt(seconds, 10),
  );
};

const parseEvent = (event: {
  '@_channel': string;
  '@_start': string;
  '@_stop': string;
  desc: { '#text': string };
  category: Array<{ '#text': string }>;
  title: { '#text': string };
}) => {
  const categories: string[] = [];

  if (Array.isArray(event?.category)) {
    categories.push(...(event?.category).map(category => category?.['#text']));
  } else if (typeof event?.category === 'object') {
    categories.push(event?.category?.['#text']);
  }

  return {
    title: event?.title?.['#text'],
    channelId: event?.['@_channel'],
    startTime: parseEventDate(event?.['@_start']),
    endTime: parseEventDate(event?.['@_stop']),
    description: event?.desc?.['#text'] || null,
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

  let channels;
  let events;
  try {
    const parser = new XMLParser({ ignoreAttributes: false });
    const json = parser.parse(data);

    channels = (json.tv.channel || [])?.map(parseChannel);
    console.log(`[bootstrap] parsed ${channels.length} channels`);

    events = (json.tv.programme || [])?.map(parseEvent);
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

import { AxiosResponse } from 'axios';
import { formatDistanceToNowStrict } from 'date-fns';
import { call, put, takeEvery } from 'redux-saga/effects';
import { Api } from 'services/api';
import { AxiosFactory, Normalizer } from 'store/utils';

import { fetchVideos, fetchVideosError, fetchVideosSuccess } from './slice';
import { FetchVideosAction } from './types';

const TAG = '[store/videos/saga]';

function* fetchVideosFlow({ payload: { id } }: FetchVideosAction) {
  const start = new Date();

  console.log(TAG, `fetching videos for type: ${id.type}, id: ${id.id}...`);

  const response: AxiosResponse = yield call(
    Api.get,
    // could be /tv/1234/videos or /movie/1234/videos
    `/${id.type === 'show' ? 'tv' : id.type}/${id.id}/videos`,
    {
      headers: { ...AxiosFactory.headers },
    },
  );
  if (response.status !== 200) {
    yield put(fetchVideosError({ id }));
    return;
  }

  if (!Array.isArray(response.data?.results)) {
    yield put(fetchVideosError({ id }));
    return;
  }

  const data = response.data.results.map(Normalizer.video);

  yield put(fetchVideosSuccess(data));

  console.log(
    TAG,
    `fetched videos for type: ${id.type}, id: ${
      id.id
    } in ${formatDistanceToNowStrict(start)}`,
  );
}

export default function* watchVideos() {
  yield takeEvery(fetchVideos, fetchVideosFlow);
}

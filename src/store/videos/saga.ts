import { AxiosResponse } from 'axios';
import { formatDistanceToNowStrict } from 'date-fns';
import { call, put, takeEvery } from 'redux-saga/effects';
import { Api } from 'services/api';
import { Video } from 'store/types/video';
import { Normalizer } from 'store/utils';

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
  );
  if (response.status !== 200) {
    yield put(fetchVideosError({ id }));
    return;
  }

  if (!Array.isArray(response.data?.results)) {
    yield put(fetchVideosError({ id }));
    return;
  }

  const data: Video[] = response.data.results
    .map(Normalizer.video)
    .filter((item: Video) => item.site === 'YouTube');

  yield put(fetchVideosSuccess({ id, data }));

  console.log(
    TAG,
    `fetched videos (${data.length}) for type: ${id.type}, id: ${
      id.id
    } in ${formatDistanceToNowStrict(start)}`,
  );
}

export default function* watchVideos() {
  yield takeEvery(fetchVideos, fetchVideosFlow);
}

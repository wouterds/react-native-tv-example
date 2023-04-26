import { Video } from 'store/types/video';

export type VideoId = {
  type: 'show' | 'movie';
  id: number;
};

export type VideosState = {
  data: Array<{
    isLoading: boolean;
    isEmpty: boolean;
    hasError: boolean;
    data: Video[];
    id: VideoId;
  }>;
};

export type FetchVideosAction = { payload: { id: VideoId } };
export type FetchVideosSuccessAction = {
  payload: { id: VideoId; data: Video[] };
};
export type FetchVideosErrorAction = { payload: { id: VideoId } };

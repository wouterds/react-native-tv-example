import Config from 'react-native-config';
import { MediaAsset } from 'store/types/media-asset';
import { Movie } from 'store/types/movie';
import { Show } from 'store/types/show';
import { Video } from 'store/types/video';

export const Normalizer = {
  mediaAsset: (item: any) => {
    let type = item.media_type || 'unknown';
    if (type === 'tv') {
      type = 'show';
    }

    return {
      ...item,
      type,
      poster_url: Config.IMAGE_BASE_URL + item.poster_path,
      backdrop_url: Config.IMAGE_BASE_URL + item.backdrop_path,
    } as MediaAsset;
  },

  movie: (item: any) => {
    if (!item.release_date) {
      return null;
    }

    return {
      ...Normalizer.mediaAsset({ ...item, media_type: 'movie' }),
      release_date: new Date(item.release_date),
    } as Movie;
  },

  show: (item: any) => {
    if (!item.first_air_date) {
      return null;
    }

    return {
      ...Normalizer.mediaAsset({ ...item, media_type: 'show' }),
      first_air_date: new Date(item.first_air_date),
    } as Show;
  },

  video: (item: any) => {
    return {
      ...item,
      published_at: new Date(item.published_at),
    } as Video;
  },
};

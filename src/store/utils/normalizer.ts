import Config from 'react-native-config';

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
    };
  },

  movie: (item: any) => {
    return {
      ...Normalizer.mediaAsset({ ...item, media_type: 'movie' }),
      release_date: new Date(item.release_date),
    };
  },

  show: (item: any) => {
    return {
      ...Normalizer.mediaAsset({ ...item, media_type: 'show' }),
      first_air_date: new Date(item.first_air_date),
    };
  },

  video: (item: any) => {
    return {
      ...item,
      published_at: new Date(item.published_at),
    };
  },
};

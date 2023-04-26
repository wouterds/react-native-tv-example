import Config from 'react-native-config';

export const normalizeResult = (item: any) => {
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
};

export const normalizeMovieResult = () => {
  return (item: any) => normalizeResult({ ...item, media_type: 'movie' });
};

export const normalizeShowResult = () => {
  return (item: any) => normalizeResult({ ...item, media_type: 'show' });
};

export const AxiosFactory = {
  get headers() {
    const headers: Record<string, string> = {};
    if (Config.DISABLE_API_CACHE === 'true') {
      headers['Cache-Control'] = 'no-cache';
    }

    return headers;
  },
};

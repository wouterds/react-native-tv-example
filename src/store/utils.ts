import Config from 'react-native-config';

export const normalizeResult = (item: any) => {
  return {
    ...item,
    poster_url: Config.IMAGE_BASE_URL + item.poster_path,
    backdrop_url: Config.IMAGE_BASE_URL + item.backdrop_path,
  };
};

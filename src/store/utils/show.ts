import Config from 'react-native-config';
import { Show } from 'store/types/show';

export const normalizeResult = (item: any): Show => {
  return {
    ...item,
    poster_url: Config.IMAGE_BASE_URL + item.poster_path,
    backdrop_url: Config.IMAGE_BASE_URL + item.backdrop_path,
  };
};

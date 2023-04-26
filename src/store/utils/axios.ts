import Config from 'react-native-config';

export const AxiosFactory = {
  get headers() {
    const headers: Record<string, string> = {};
    if (Config.DISABLE_API_CACHE === 'true') {
      headers['Cache-Control'] = 'no-cache';
    }

    return headers;
  },
};

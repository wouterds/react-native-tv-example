import { Platform } from 'react-native';

import { size } from './utils';

export * from './utils';

export const PADDING = {
  HORIZONTAL: size(Platform.isTV ? 40 : 24),
};

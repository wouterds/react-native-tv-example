import { VideoId } from './types';

export const findVideoEntry = (
  data: Array<{ id: VideoId }> = [],
  id: VideoId,
) => {
  const index = data.findIndex(entry => {
    return entry.id.id === id.id && entry.id.type === id.type;
  });

  if (index < 0) {
    return data.length;
  }

  return index;
};

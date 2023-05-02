import { MediaAsset } from './media-asset';

export interface Movie extends MediaAsset {
  type: 'movie';
  title: string;
  release_date: Date;
  original_title: string;
}

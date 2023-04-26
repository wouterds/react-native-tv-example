import { MediaAsset } from './media';

export interface Movie extends MediaAsset {
  type: 'movie';
  title: string;
  release_date: string;
  original_title: string;
}

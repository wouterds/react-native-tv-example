import { MediaAsset } from './media-asset';

export interface Show extends MediaAsset {
  type: 'show';
  name: string;
  first_air_date: Date;
  original_name: string;
  origin_country: string[];
}

export type ShowId = Show['id'];

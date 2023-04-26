import { MediaAsset } from './media';

export interface Show extends MediaAsset {
  type: 'show';
  name: string;
  first_air_date: string;
  original_name: string;
  origin_country: string[];
}

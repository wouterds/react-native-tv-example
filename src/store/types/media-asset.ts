export interface MediaAsset {
  id: number;
  backdrop_path: string;
  backdrop_url: string;
  original_language: string;
  overview: string;
  poster_path: string;
  poster_url: string;
  vote_average: number;
  type: 'show' | 'movie';
}

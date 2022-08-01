export type Show = {
  backdrop_path: string;
  first_air_date: string;
  id: number
  name: string;
  origin_country: string[],
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  vote_average: number,
};

export type PopularOnTVState = {
  data: Show[];
};

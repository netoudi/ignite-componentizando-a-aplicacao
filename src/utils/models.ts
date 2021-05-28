export interface Genre {
  id: number;
  title: string;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
}

export interface Rating {
  Source: string;
  Value: string;
}

export interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Runtime: string;
  Ratings: Rating[];
}

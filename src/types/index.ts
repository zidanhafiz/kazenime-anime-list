export interface Animes {
  mal_id: string;
  title: string;
  title_japanese: string;
  images: ImageSrc;
  link: string;
}

export type Mangas = Animes;

export interface ImageSrc {
  webp: {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  };
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface ScoreBoardProps {
  anime?: {
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    favorites: number;
    season: string;
    year: number;
    type: string;
    studios: { name: string; mal_id: number }[];
  };
  manga?: {
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    favorites: number;
    type: string;
    serializations: { name: string; mal_id: number }[];
    authors: { name: string; mal_id: number }[];
  };
}

export interface BreadcumbsProps {
  path: string;
  name: string;
}

export type Info = {
  type: string;
  value: string | string[];
};

export interface Character {
  voice_actors: {
    person: {
      images: {
        jpg: {
          image_url: string;
        };
      };
      name: string;
    };
    language: string;
  }[];
  role: string;
  character: {
    mal_id: number;
    images: {
      webp: {
        image_url: string;
      };
    };
    name: string;
  };
}

export interface Staff {
  person: {
    mal_id: number;
    images: {
      jpg: {
        image_url: string;
      };
    };
    name: string;
  };
  positions: string[];
}

export type RelatedTableProps = {
  relation: string;
  entry: {
    mal_id: number;
    name: string;
    url: string;
  }[];
};

interface Entry {
  title: string;
  images: ImageSrc;
  mal_id: string;
}

export type AnimesRecommend = {
  mal_id: string;
  entry: Entry[];
  content: string;
  date: string;
  user: {
    username: string;
  };
};

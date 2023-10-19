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

export const getAllAniMangas = async (url: string, page: string) => {
  const res = await fetch(`${url}?page=${page}`);
  if (!res.ok) {
    throw new Error('Error get data');
  }
  return await res.json();
};

export const getRecommendAnimes = async (url: string, page: string) => {
  const res = await fetch(`${url}/recommendations/anime?page=${page}`);
  if (!res.ok) {
    throw new Error('Error get data');
  }
  return await res.json();
};

export const getRecommendMangas = async (url: string, page: string) => {
  const res = await fetch(`${url}/recommendations/manga?page=${page}`);
  if (!res.ok) {
    throw new Error('Error get data');
  }
  return await res.json();
};

export const getPopularAnimes = async (url: string, page: string) => {
  const res = await fetch(`${url}/top/anime?page=${page}`);
  if (!res.ok) {
    throw new Error('Error get data');
  }
  return await res.json();
};

export const getPopularMangas = async (url: string, page: string) => {
  const res = await fetch(`${url}/top/manga?page=${page}`);
  if (!res.ok) {
    throw new Error('Error get data');
  }
  return await res.json();
};

export const getAniMangaDetails = async (url: string, id: string) => {
  const res = await fetch(`${url}/${id}/full`);
  if (!res.ok) {
    throw new Error('error get data');
  }
  return await res.json();
};

export const getAniMangaCharacters = async (url: string, id: string) => {
  const res = await fetch(`${url}/${id}/characters`);
  if (!res.ok) {
    throw new Error('error get data');
  }
  return await res.json();
};

export const getAnimeStaff = async (url: string, id: string) => {
  const res = await fetch(`${url}/${id}/staff`);
  if (!res.ok) {
    throw new Error('error get data');
  }
  return await res.json();
};

export const getGenres = async (url: string, endPoint: string) => {
  const res = await fetch(`${url}/genres${endPoint}`);
  if (!res.ok) {
    throw new Error('error get data');
  }
  return await res.json();
};

export const getAniMangasByGenres = async (url: string, id: string, page: string) => {
  const res = await fetch(`${url}?genres=${id}&page=${page}`);
  if (!res.ok) {
    throw new Error('error get data');
  }
  return await res.json();
};

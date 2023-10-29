export const getAllAniMangas = async (url: string | undefined, page: string) => {
  const res = await fetch(`${url}?page=${page}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error('Error get data');
  }
  return await res.json();
};

export const getRecommendAnimes = async (url: string | undefined, page: string) => {
  const res = await fetch(`${url}/recommendations/anime?page=${page}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error('Error get data');
  }
  return await res.json();
};

export const getRecommendMangas = async (url: string | undefined, page: string) => {
  const res = await fetch(`${url}/recommendations/manga?page=${page}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error('Error get data');
  }
  return await res.json();
};

export const getPopularAnimes = async (url: string | undefined, page: string) => {
  const res = await fetch(`${url}/top/anime?page=${page}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error('Error get data');
  }
  return await res.json();
};

export const getPopularMangas = async (url: string | undefined, page: string) => {
  const res = await fetch(`${url}/top/manga?page=${page}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error('Error get data');
  }
  return await res.json();
};

export const getAniMangaDetails = async (url: string | undefined, id: string) => {
  const res = await fetch(`${url}/${id}/full`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error('error get data');
  }
  return await res.json();
};

export const getAniMangaCharacters = async (url: string | undefined, id: string) => {
  const res = await fetch(`${url}/${id}/characters`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error('error get data');
  }
  return await res.json();
};

export const getAnimeStaff = async (url: string | undefined, id: string) => {
  const res = await fetch(`${url}/${id}/staff`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error('error get data');
  }
  return await res.json();
};

export const getGenres = async (url: string | undefined, endPoint: string) => {
  const res = await fetch(`${url}/genres${endPoint}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error('error get data');
  }
  return await res.json();
};

export const getAniMangasByGenres = async (
  url: string | undefined,
  id: string,
  page: string
) => {
  const res = await fetch(`${url}?genres=${id}&page=${page}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error('error get data');
  }
  return await res.json();
};

export const getSeasonNow = async (url: string | undefined, page: string) => {
  const res = await fetch(`${url}/seasons/now?page=${page}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error('error get data');
  }
  return await res.json();
};

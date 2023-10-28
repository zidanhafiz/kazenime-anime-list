import Cardshelf from '@/components/cardshelf';
import HeadTitle from '@/components/head-title';
import {
  getAllAniMangas,
  getPopularAnimes,
  getPopularMangas,
  getSeasonNow,
} from '@/utils/fetch';

const url = `${process.env.ANIME_API_URL}`;
const apiUrl = `${process.env.API_URL}`;

export default async function Home() {
  const [animesData, topAnimesData, topMangasData, seasonNowData] = [
    getAllAniMangas(url, '1'),
    getPopularAnimes(apiUrl, '1'),
    getPopularMangas(apiUrl, '1'),
    getSeasonNow(apiUrl, '1'),
  ];
  const [animesRes, topAnimesRes, topMangasRes, seasonNowRes] = await Promise.all([
    animesData,
    topAnimesData,
    topMangasData,
    seasonNowData,
  ]);
  const [animes, topAnimes, topMangas, seasonNow] = [
    animesRes.data,
    topAnimesRes.data,
    topMangasRes.data,
    seasonNowRes.data,
  ];

  const seasonAndYear = `${
    seasonNow[0].season[0].toUpperCase() + seasonNow[0].season.substr(1)
  } ${seasonNow[0].year}`;

  return (
    <div>
      <HeadTitle>
        Welcome to Kazenime Anime List
        <p className='md:text-base text-xs font-normal mt-3'>
          The website for looking all animes and mangas information in the world.
        </p>
      </HeadTitle>
      <main className='min-h-screen mt-10'>
        <Cardshelf
          data={seasonNow}
          seeMore={`/anime/${seasonAndYear.replaceAll(' ', '_')}`}
          link='/anime/detail'
        >
          {seasonAndYear}
        </Cardshelf>
        <Cardshelf
          data={topAnimes}
          seeMore='/anime/popular'
          link='/anime/detail'
        >
          Top 5 Animes
        </Cardshelf>
        <Cardshelf
          data={topMangas}
          seeMore='/manga/popular'
          link='/manga/detail'
        >
          Top 5 Mangas
        </Cardshelf>
        <Cardshelf
          data={animes}
          seeMore='/anime'
          link='/anime/detail'
        >
          All Animes
        </Cardshelf>
      </main>
    </div>
  );
}

import Cardshelf from '@/components/cardshelf';
import HeadTitle from '@/components/head-title';
import { getAllAniMangas, getPopularAnimes, getPopularMangas } from '@/utils/fetch';

const url = `${process.env.ANIME_API_URL}`;
const apiUrl = `${process.env.API_URL}`;

export default async function Home() {
  const [animesData, topAnimesData, topMangasData] = [
    getAllAniMangas(url, '1'),
    getPopularAnimes(apiUrl, '1'),
    getPopularMangas(apiUrl, '1'),
  ];
  const [animesRes, topAnimesRes, topMangasRes] = await Promise.all([
    animesData,
    topAnimesData,
    topMangasData,
  ]);
  const [animes, topAnimes, topMangas] = [
    animesRes.data,
    topAnimesRes.data,
    topMangasRes.data,
  ];

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
      </main>
    </div>
  );
}

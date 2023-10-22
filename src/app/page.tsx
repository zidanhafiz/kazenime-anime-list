import CardList from '@/components/card-list';
import HeadTitle from '@/components/head-title';
import Pagination from '@/components/pagination';
import { Animes } from '@/types';
import { getAllAniMangas } from '@/utils/fetch';

const url = `${process.env.ANIME_API_URL}`;

export default async function Home() {
  const animes = await getAllAniMangas(url, '1');

  return (
    <div>
      <HeadTitle>Dashboard</HeadTitle>
      <main className='flex min-h-screen items-strecth justify-center lg:justify-between flex-wrap gap-3 md:gap-6 mt-10'>
        {animes.data.map((data: Animes) => (
          <CardList
            key={data.mal_id}
            title={data.title}
            description={data.title_japanese}
            src={data.images.webp.large_image_url}
            link={`/anime/detail/${data.mal_id}`}
          />
        ))}
      </main>
    </div>
  );
}

import CardList from '@/components/card-list';
import HeadTitle from '@/components/head-title';
import Pagination from '@/components/pagination';
import { Animes, SearchParamsProps } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Popular Anime - Kazenime',
  description: 'Popular Anime list',
};

const url = process.env.API_URL;

const getPopularAnimes = async (page: string) => {
  const res = await fetch(`${url}/top/anime?page=${page}`);
  if (!res.ok) {
    throw new Error('Error broh');
  }
  return await res.json();
};

const PopularAnimePage = async ({ searchParams }: SearchParamsProps) => {
  const page = searchParams['page'] ?? 1;
  const animes = await getPopularAnimes(`${page}`);
  const pagination = animes.pagination;

  return (
    <div>
      <HeadTitle>Popular Anime</HeadTitle>
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
      <div className='my-16 flex flex-col items-center'>
        {pagination.current_page === 1 ? (
          <p className='mb-4'>
            showing {pagination.current_page} to {25} of{' '}
            {pagination.items.total} results
          </p>
        ) : (
          <p className='mb-4'>
            showing {pagination.current_page * 25} to{' '}
            {pagination.current_page * 25 + 25} of {pagination.items.total}{' '}
            results
          </p>
        )}
        <Pagination pagination={pagination} link={`/anime/popular?`} />
      </div>
    </div>
  );
};

export default PopularAnimePage;

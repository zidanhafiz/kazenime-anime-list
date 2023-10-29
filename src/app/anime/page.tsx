import CardList from '@/components/card-list';
import HeadTitle from '@/components/head-title';
import Pagination from '@/components/pagination';
import { Animes, BreadcumbsProps, SearchParamsProps } from '@/types';
import { getAllAniMangas } from '@/utils/fetch';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anime List - Kazenime',
  description: 'Anime list',
};

const url = process.env.ANIME_API_URL;

const AnimePage = async ({ searchParams }: SearchParamsProps) => {
  const page = searchParams['page']?.toString() ?? '1';
  const animes = await getAllAniMangas(url, page);
  const pagination = animes.pagination;
  const breadcumbsItems: BreadcumbsProps[] = [
    {
      name: 'Anime',
      path: '/anime',
    },
  ];

  return (
    <div>
      <HeadTitle items={breadcumbsItems}>All Anime</HeadTitle>
      <main className='flex min-h-screen items-strecth justify-center lg:justify-center flex-wrap gap-3 md:gap-6 mt-10'>
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
            showing {pagination.current_page} to {25} of {pagination.items.total} results
          </p>
        ) : (
          <p className='mb-4'>
            showing {pagination.current_page * 25} to {pagination.current_page * 25 + 25}{' '}
            of {pagination.items.total} results
          </p>
        )}
        <Pagination
          pagination={pagination}
          link={`/anime?`}
        />
      </div>
    </div>
  );
};

export default AnimePage;

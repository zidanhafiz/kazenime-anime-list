import CardList from '@/components/card-list';
import HeadTitle from '@/components/head-title';
import Pagination from '@/components/pagination';
import { BreadcumbsProps, Mangas, SearchParamsProps } from '@/types';
import { getAllAniMangas } from '@/utils/fetch';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manga List - Kazenime',
  description: 'Manga list',
};

const url = process.env.MANGA_API_URL;

const MangaPage = async ({ searchParams }: SearchParamsProps) => {
  const page = searchParams['page']?.toString() ?? '1';
  const mangas = await getAllAniMangas(url, page);
  const pagination = mangas.pagination;
  const breadcumbsItems: BreadcumbsProps[] = [
    {
      name: 'Manga',
      path: '/manga',
    },
  ];

  return (
    <div>
      <HeadTitle items={breadcumbsItems}>All Manga</HeadTitle>
      <main className='flex min-h-screen items-strecth justify-center lg:justify-between flex-wrap gap-3 md:gap-6 mt-10'>
        {mangas.data.map((data: Mangas) => (
          <CardList
            key={data.mal_id}
            title={data.title}
            description={data.title_japanese}
            src={data.images.webp.large_image_url}
            link={`/manga/detail/${data.mal_id}`}
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
          link={`/manga?`}
        />
      </div>
    </div>
  );
};

export default MangaPage;

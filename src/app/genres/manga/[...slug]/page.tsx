import CardList from '@/components/card-list';
import HeadTitle from '@/components/head-title';
import Pagination from '@/components/pagination';
import { Animes, BreadcumbsProps, SearchParamsProps } from '@/types';
import { getAniMangasByGenres } from '@/utils/fetch';
import { Metadata, ResolvingMetadata } from 'next';

const url = process.env.MANGA_API_URL;

export async function generateMetadata(
  { params: { slug } }: { params: { slug: string[] } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const title = slug[1].replaceAll('_', ' ');

  return {
    title: title + ' - Kazenime',
  };
}

interface Props extends SearchParamsProps {
  params: { slug: string[] };
}

const MangaGenrePage = async ({ params: { slug }, searchParams }: Props) => {
  const page = searchParams['page']?.toString() ?? '1';
  const genre = slug[1].replaceAll('_', ' ');
  const mangas = await getAniMangasByGenres(url, slug[0], page);
  const pagination = mangas.pagination;
  const breadcumbsItems: BreadcumbsProps[] = [
    {
      name: 'Manga Genres',
      path: '/genres/manga',
    },
    {
      name: genre,
      path: `/genres/manga/${slug[0]}/${slug[1]}`,
    },
  ];
  return (
    <div>
      <HeadTitle items={breadcumbsItems}>{genre}</HeadTitle>
      <main className='flex min-h-screen items-strecth justify-center lg:justify-center flex-wrap gap-3 md:gap-6 mt-10'>
        {mangas.data.map((data: Animes) => (
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
          link={`/genres/manga/${slug[0]}/${slug[1]}?`}
        />
      </div>
    </div>
  );
};

export default MangaGenrePage;

import CardList from '@/components/card-list';
import HeadTitle from '@/components/head-title';
import Pagination from '@/components/pagination';
import { Animes, BreadcumbsProps, SearchParamsProps } from '@/types';
import { getAniMangasByGenres } from '@/utils/fetch';
import { Metadata, ResolvingMetadata } from 'next';

const url = `${process.env.ANIME_API_URL}`;

export async function generateMetadata(
  { params: { slug } }: { params: { slug: string[] } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const title = slug[1].replaceAll('_', ' ');
  // read route params
  // fetch data
  // const product = await fetch(`${url}/${slug[0]}/full`).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: title + ' - Kazenime',
    // openGraph: {
    // 	images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

interface Props extends SearchParamsProps {
  params: { slug: string[] };
}

const AnimeGenrePage = async ({ params: { slug }, searchParams }: Props) => {
  const page = searchParams['page']?.toString() ?? '1';
  const genre = slug[1].replaceAll('_', ' ');
  const animes = await getAniMangasByGenres(url, slug[0], page);
  const pagination = animes.pagination;
  const breadcumbsItems: BreadcumbsProps[] = [
    {
      name: 'Anime Genres',
      path: '/genres/anime',
    },
    {
      name: genre,
      path: `/genres/anime/${slug[0]}/${slug[1]}`,
    },
  ];
  return (
    <div>
      <HeadTitle items={breadcumbsItems}>{genre}</HeadTitle>
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
          link={`/genres/anime/${slug[0]}/${slug[1]}?`}
        />
      </div>
    </div>
  );
};

export default AnimeGenrePage;

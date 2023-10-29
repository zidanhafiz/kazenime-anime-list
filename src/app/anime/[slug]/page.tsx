import NotFound from '@/app/not-found';
import CardList from '@/components/card-list';
import HeadTitle from '@/components/head-title';
import Pagination from '@/components/pagination';
import { Animes, BreadcumbsProps, SearchParamsProps } from '@/types';
import { getSeasonNow } from '@/utils/fetch';
import { Metadata, ResolvingMetadata } from 'next';

const url = `${process.env.API_URL}`;

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug.replaceAll('_', ' ');

  // fetch data
  // const product = await fetch(`${url}/${id}/full`).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: slug + ' - Kazenime',
    // openGraph: {
    // 	images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

interface Props extends SearchParamsProps {
  params: { slug: string };
}

const getSeasonAndYear = async () => {
  const season = await getSeasonNow(url, '1');
  return `${season.data[0].season[0].toUpperCase() + season.data[0].season.substr(1)} ${
    season.data[0].year
  }`;
};

const SeasonNowPage = async ({ params: { slug }, searchParams }: Props) => {
  const urlParams = slug.replaceAll('_', ' ');
  const page = searchParams['page']?.toString() ?? '1';
  const animes = await getSeasonNow(url, page);
  const pagination = animes.pagination;
  const seasonAndYear = await getSeasonAndYear();
  const breadcumbsItems: BreadcumbsProps[] = [
    {
      name: 'Anime',
      path: '/anime',
    },
    {
      name: seasonAndYear,
      path: '/anime/' + seasonAndYear,
    },
  ];

  if (urlParams !== seasonAndYear) return <NotFound />;

  return (
    <div>
      <HeadTitle items={breadcumbsItems}>{seasonAndYear}</HeadTitle>
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
          link={`/anime/${slug}?`}
        />
      </div>
    </div>
  );
};

export default SeasonNowPage;

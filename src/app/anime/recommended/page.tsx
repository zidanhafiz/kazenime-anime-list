import CardList from '@/components/card-list';
import { Metadata } from 'next';
import { BreadcumbsProps, ImageSrc, SearchParamsProps } from '@/types';
import HeadTitle from '@/components/head-title';
import Pagination from '@/components/pagination';

export interface AnimesRecommend {
  mal_id: string;
  entry: Entry[];
}

interface Entry {
  title: string;
  images: ImageSrc;
  mal_id: string;
}

export const metadata: Metadata = {
  title: 'Recommended Anime - Kazenime',
  description: 'Recommended Anime list',
};

const url = process.env.API_URL;

const getRecommendAnimes = async (page: string) => {
  const res = await fetch(`${url}/recommendations/anime?page=${page}`);
  if (!res.ok) {
    throw new Error('Error broh');
  }
  return await res.json();
};

const RecommendAnimePage = async ({ searchParams }: SearchParamsProps) => {
  const page = searchParams['page'] ?? 1;
  const animes = await getRecommendAnimes(`${page}`);
  // const pagination = animes.pagination;
  const breadcumbsItems: BreadcumbsProps[] = [
    {
      name: 'Anime',
      path: '/anime',
    },
    {
      name: 'Recommended Anime',
      path: '/anime/recommended',
    },
  ];

  return (
    <div>
      <HeadTitle items={breadcumbsItems}>Recommended Anime</HeadTitle>
      <main className='flex min-h-screen items-strecth justify-center lg:justify-between flex-wrap gap-3 md:gap-6 mt-10'>
        {animes.data.map((data: AnimesRecommend) => (
          <CardList
            key={data.mal_id}
            title={data.entry[0].title}
            src={data.entry[0].images.webp.large_image_url}
            link={`/anime/detail/${data.entry[0].mal_id}`}
          />
        ))}
      </main>
      {/* <div className='my-16 flex flex-col items-center'>
				{pagination.current_page === 1 ? (
					<p className='mb-4'>
						showing {pagination.current_page} to {25} of {pagination.items.total} results
					</p>
				) : (
					<p className='mb-4'>
						showing {pagination.current_page * 25} to {pagination.current_page * 25 + 25} of {pagination.items.total} results
					</p>
				)}
				<Pagination
					pagination={pagination}
					link={`/anime/recommended`}
				/>
			</div> */}
    </div>
  );
};

export default RecommendAnimePage;

import { Metadata } from 'next';
import { AnimesRecommend, BreadcumbsProps, SearchParamsProps } from '@/types';
import HeadTitle from '@/components/head-title';
import Pagination from '@/components/pagination';
import RecommendList from '@/components/recommend-list';
import { getRecommendAnimes } from '@/utils/fetch';

export const metadata: Metadata = {
  title: 'Recommended Anime - Kazenime',
  description: 'Recommended Anime list',
};

const url = `${process.env.API_URL}`;

const RecommendAnimePage = async ({ searchParams }: SearchParamsProps) => {
  const page = searchParams['page']?.toString() ?? '1';
  const animes = await getRecommendAnimes(url, page);
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
      <main className='flex flex-col min-h-screen items-strecth justify-center lg:justify-between flex-wrap gap-3 md:gap-6 mt-10'>
        {animes.data.map((data: AnimesRecommend) => (
          <RecommendList
            key={data.mal_id}
            data={data}
            link='/anime/detail'
          />
        ))}
      </main>
    </div>
  );
};

export default RecommendAnimePage;

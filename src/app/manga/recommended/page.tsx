import HeadTitle from '@/components/head-title';
import RecommendList from '@/components/recommend-list';
import { AnimesRecommend, BreadcumbsProps, SearchParamsProps } from '@/types';
import { getRecommendMangas } from '@/utils/fetch';
import { Metadata } from 'next';

type MangasRecommend = AnimesRecommend;

export const metadata: Metadata = {
  title: 'Recommend Manga - Kazenime',
  description: 'Recommend Manga list',
};

const url = `${process.env.API_URL}`;

const RecommendMangaPage = async ({ searchParams }: SearchParamsProps) => {
  const page = searchParams['page']?.toString() ?? '1';
  const mangas = await getRecommendMangas(url, page);
  const breadcumbsItems: BreadcumbsProps[] = [
    {
      name: 'Manga',
      path: '/manga',
    },
    {
      name: 'Recommended Manga',
      path: '/manga/recommended',
    },
  ];

  return (
    <div>
      <HeadTitle items={breadcumbsItems}>Recommended Manga</HeadTitle>
      <main className='flex min-h-screen items-strecth justify-center lg:justify-between flex-wrap gap-3 md:gap-6 mt-10'>
        {mangas.data.map((data: MangasRecommend) => (
          <RecommendList
            key={data.mal_id}
            data={data}
            link='/manga/detail'
          />
        ))}
      </main>
    </div>
  );
};

export default RecommendMangaPage;

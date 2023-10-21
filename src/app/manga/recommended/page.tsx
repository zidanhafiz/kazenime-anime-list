import { AnimesRecommend } from '@/app/anime/recommended/page';
import CardList from '@/components/card-list';
import HeadTitle from '@/components/head-title';
import { BreadcumbsProps, SearchParamsProps } from '@/types';
import { Metadata } from 'next';

type MangasRecommend = AnimesRecommend;

export const metadata: Metadata = {
  title: 'Recommend Manga - Kazenime',
  description: 'Recommend Manga list',
};

const url = process.env.API_URL;

const getRecommendMangas = async (page: string) => {
  const res = await fetch(`${url}/recommendations/manga?page=${page}`);
  if (!res.ok) {
    throw new Error('Error broh');
  }
  return await res.json();
};

const RecommendMangaPage = async ({ searchParams }: SearchParamsProps) => {
  const page = searchParams['page'] ?? 1;
  const mangas = await getRecommendMangas(`${page}`);
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
          <CardList
            key={data.mal_id}
            title={data.entry[0].title}
            src={data.entry[0].images.webp.large_image_url}
            link={`/manga/detail/${data.entry[0].mal_id}`}
          />
        ))}
      </main>
    </div>
  );
};

export default RecommendMangaPage;

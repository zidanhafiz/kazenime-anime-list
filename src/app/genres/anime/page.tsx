import HeadTitle from '@/components/head-title';
import { BreadcumbsProps } from '@/types';
import { toUrlString } from '@/utils';
import { getGenres } from '@/utils/fetch';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Anime Genres - Kazenime',
  description: 'Anime Genres list',
};

const url = `${process.env.API_URL}`;

const GenresPage = async () => {
  const breadcumbsItems: BreadcumbsProps[] = [
    {
      name: 'Anime Genres',
      path: '/genres/anime',
    },
  ];

  const genres = await getGenres(url, '/anime');
  return (
    <div className='min-h-screen w-full'>
      <HeadTitle items={breadcumbsItems}>Anime Genres</HeadTitle>
      <div className='mt-6 grid grid-cols-2 md:grid-cols-3 justify-items-center'>
        {genres.data.map((genre: any) => {
          const urlName = toUrlString(genre.name);
          return (
            <Link
              key={genre.mal_id}
              href={`/genres/anime/${genre.mal_id}/${urlName}?page=1`}
              className='my-3 md:text-lg text-base font-semibold hover:underline'
            >
              {genre.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default GenresPage;

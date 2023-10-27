import { Animes, CardshelfProps } from '@/types';
import Link from 'next/link';
import CardList from './card-list';

const Cardshelf = ({ children, data, link, seeMore }: CardshelfProps) => {
  return (
    <div className='w-full mt-6 h-max text-center border pb-4'>
      <div className='bg-slate-100 dark:bg-gray-900 py-4'>
        <h2 className='md:text-2xl font-semibold'>{children}</h2>
      </div>
      <div className='overflow-x-auto px-3'>
        <div className='flex justify-center gap-3 my-6 w-max mx-auto scroll-pl-6 snap-x'>
          {data.map(
            (data: Animes, i: number) =>
              i < 5 && (
                <CardList
                  key={data.mal_id}
                  title={data.title}
                  description={data.title_japanese}
                  src={data.images.webp.large_image_url}
                  link={`${link}/${data.mal_id}`}
                />
              )
          )}
        </div>
      </div>
      <Link
        href={seeMore}
        className='text-primary hover:underline'
      >
        See more
      </Link>
    </div>
  );
};

export default Cardshelf;

'use client';

import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';
import CardList from '@/components/card-list';
import { fetcher } from '@/lib/fetcher';
import Loading from '@/app/loading';
import { Animes } from '@/types';
import HeadTitle from '@/components/head-title';
import Pagination from '@/components/pagination';

const url = process.env.NEXT_PUBLIC_API_URL;

const SearchPage = () => {
  const params = useSearchParams();
  const search = params.get('q');
  const select = params.get('s');
  const page = params.get('page') ?? 1;
  const { data, isLoading, error } = useSWR(
    `${url}/${select}?q=${search}&page=${page}`,
    fetcher
  );
  if (error) {
    return <h1>Sorry! something went wrong!</h1>;
  }

  return (
    <div className='text-center'>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <HeadTitle className='text-lg'>Search Result : {search}</HeadTitle>
          <main className='flex items-strecth justify-center lg:justify-center flex-wrap gap-6 mt-10'>
            {data.data.map((item: Animes) => (
              <CardList
                key={item.mal_id}
                title={item.title}
                description={item.title_japanese}
                src={item.images.webp.large_image_url}
                link={`/${select}/detail/${item.mal_id}`}
              />
            ))}
          </main>
          <div className='my-16 flex flex-col items-center'>
            {data.pagination.current_page === 1 ? (
              <p className='mb-4'>
                showing {data.pagination.current_page} to {25} of{' '}
                {data.pagination.items.total} results
              </p>
            ) : (
              <p className='mb-4'>
                showing {data.pagination.current_page * 25} to{' '}
                {data.pagination.current_page * 25 + 25} of {data.pagination.items.total}{' '}
                results
              </p>
            )}
            <Pagination
              pagination={data.pagination}
              link={`/search?q=${search}&s=${select}&`}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SearchPage;

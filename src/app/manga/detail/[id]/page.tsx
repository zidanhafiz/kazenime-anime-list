import Breadcumbs from '@/components/breadcumbs';
import ScoreBoard from '@/components/score-board';
import { BreadcumbsProps } from '@/types';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Kazenime',
  description: 'Manga Detail',
};

type Info = {
  type: string;
  value: string;
};

const url = process.env.MANGA_API_URL;

const getMangaDetails = async (id: string) => {
  const res = await fetch(`${url}/${id}/full`);
  if (!res.ok) {
    throw new Error('error get data');
  }
  return await res.json();
};

const MangaDetailPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const res = await getMangaDetails(id);
  const manga = await res.data;
  const info: Info[] = [
    {
      type: 'Title',
      value: manga.title,
    },
    {
      type: 'Title Japanese',
      value: manga.title_japanese,
    },
    {
      type: 'Type',
      value: manga.type,
    },
    {
      type: 'Source',
      value: manga.source,
    },
    {
      type: 'Episodes',
      value: manga.episodes,
    },
    {
      type: 'Duration',
      value: manga.duration,
    },
    {
      type: 'Status',
      value: manga.status,
    },
    {
      type: 'Rating',
      value: manga.rating,
    },
  ];

  const breadcumbsItems: BreadcumbsProps[] = [
    {
      path: '/manga',
      name: 'Manga',
    },
    {
      path: '/manga/detail/' + id,
      name: manga.title,
    },
  ];

  return (
    <>
      <header className='mt-12 text-center'>
        <h1 className='text-xl font-bold'>{manga.title}</h1>
        <span className='text-lg font-normal'>{manga.title_japanese}</span>
        <hr className='mt-6' />
      </header>
      <main className='mt-10 grid md:grid-cols-2 lg:grid-cols-4'>
        <div>
          <div className='w-full max-w-[300px]'>
            <Image
              src={manga.images.webp.large_image_url}
              alt={manga.title}
              width={600}
              height={600}
            />
          </div>
        </div>
        <div className='lg:col-span-3'>
          <Breadcumbs items={breadcumbsItems} />
          <div className='mt-6'>
            <ScoreBoard manga={manga} />
          </div>
          <main className='my-6'>
            <section>
              <h6 className='mb-3 font-semibold'>Synopsis</h6>
              <hr />
              <p className='my-3'>{manga.synopsis}</p>
            </section>
            <section className='mt-12'>
              <h6 className='mb-3 font-semibold'>Background</h6>
              <hr />
              <p className='my-3'>{manga.background}</p>
            </section>
          </main>
          {/* <table className='table-auto w-full leading-8'> */}
          {/*   <tbody> */}
          {/*     {info.map((item: Info) => ( */}
          {/*       <tr className='' key={item.type}> */}
          {/*         <td className='w-[150px] align-top'>{item.type}</td> */}
          {/*         <td className='w-5 align-top'>:</td> */}
          {/*         <td className='align-top'> {item.value}</td> */}
          {/*       </tr> */}
          {/*     ))} */}
          {/*     <tr className=''> */}
          {/*       <td className='align-top'>Synopsis</td> */}
          {/*       <td className='align-top'>:</td> */}
          {/*       <td className='align-top'> {manga.synopsis}</td> */}
          {/*     </tr> */}
          {/*   </tbody> */}
          {/* </table> */}
        </div>
      </main>
    </>
  );
};

export default MangaDetailPage;

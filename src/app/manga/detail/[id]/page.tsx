import Breadcumbs from '@/components/breadcumbs';
import CharactersTable from '@/components/characters-table';
import RelatedTable from '@/components/related-table';
import ScoreBoard from '@/components/score-board';
import SidebarDetail from '@/components/sidebar-detail';
import { BreadcumbsProps } from '@/types';
import { getAniMangaCharacters, getAniMangaDetails } from '@/utils/fetch';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const product = await fetch(`${url}/${id}/full`).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.data.title + ' - Kazenime',
    // openGraph: {
    // 	images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

type Info = {
  type: string;
  value: string;
};

const url = `${process.env.MANGA_API_URL}`;

const MangaDetailPage = async ({ params: { id } }: { params: { id: string } }) => {
  const [mangaData, charactersData] = [
    getAniMangaDetails(url, id),
    getAniMangaCharacters(url, id),
  ];
  const [mangaRes, charactersRes] = await Promise.all([mangaData, charactersData]);
  const [manga, characters] = [mangaRes.data, charactersRes.data];

  const info: Info[] = [
    {
      type: 'Type',
      value: manga.type,
    },
    {
      type: 'Volumes',
      value: manga.volumes,
    },
    {
      type: 'Chapters',
      value: manga.chapters,
    },
    {
      type: 'Status',
      value: manga.status,
    },
    {
      type: 'Published',
      value: manga.published.string,
    },
    {
      type: 'Genres',
      value: manga.genres.map((genre: { name: string }, i: number) => {
        return genre.name + (i !== manga.genres.length - 1 && ', ');
      }),
    },
    {
      type: 'Themes',
      value: manga.themes.map((theme: { name: string }, i: number) => {
        return theme.name + (i !== manga.themes.length - 1 && ', ');
      }),
    },
    {
      type: 'Demographics',
      value: manga.demographics.map((demo: { name: string }, i: number) => {
        return demo.name + (i !== manga.demographics.length - 1 && ', ');
      }),
    },
    {
      type: 'Serialization',
      value: manga.serializations.map((seri: { name: string }, i: number) => {
        return seri.name + (i !== manga.serializations.length - 1 && ', ');
      }),
    },
    {
      type: 'Authors',
      value: manga.authors.map((author: { name: string }, i: number) => {
        return author.name + (i !== manga.authors.length - 1 && ', ');
      }),
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
        <SidebarDetail
          data={manga}
          info={info}
        />
        <div className='lg:col-span-3 mx-2 mt-3 md:mt-0'>
          <Breadcumbs items={breadcumbsItems} />
          <div className='mt-6'>
            <ScoreBoard manga={manga} />
          </div>
          <main className='my-6 md:text-start text-center'>
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
            <section className='mt-12'>
              <h6 className='mb-3 font-semibold'>Related Manga</h6>
              <hr />
              <RelatedTable relations={manga.relations} />
            </section>
            <section className='mt-12'>
              <h2 className='mb-3 font-semibold'>Characters</h2>
              <hr />
              {/* Characters Table	 */}
              <CharactersTable
                characters={characters}
                manga
              />
            </section>
          </main>
        </div>
      </main>
    </>
  );
};

export default MangaDetailPage;

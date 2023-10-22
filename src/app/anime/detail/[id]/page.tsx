import type { Metadata, ResolvingMetadata } from 'next';
import Breadcumbs from '@/components/breadcumbs';
import ScoreBoard from '@/components/score-board';
import { BreadcumbsProps, Info } from '@/types';
import SidebarDetail from '@/components/sidebar-detail';
import YouTubePlayer from '@/components/youtube-player';
import CharactersTable from '@/components/characters-table';
import StaffTable from '@/components/staff-table';
import RelatedTable from '@/components/related-table';
import { getAniMangaCharacters, getAniMangaDetails, getAnimeStaff } from '@/utils/fetch';

const url = `${process.env.ANIME_API_URL}`;

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

const AnimeDetailPage = async ({ params: { id } }: { params: { id: string } }) => {
  const [animeData, charactersData, staffData] = [
    getAniMangaDetails(url, id),
    getAniMangaCharacters(url, id),
    getAnimeStaff(url, id),
  ];
  const [animeRes, charactersRes, staffRes] = await Promise.all([
    animeData,
    charactersData,
    staffData,
  ]);
  const [anime, characters, staff] = [animeRes.data, charactersRes.data, staffRes.data];

  const info: Info[] = [
    {
      type: 'Type',
      value: anime.type,
    },
    {
      type: 'Source',
      value: anime.source,
    },
    {
      type: 'Episodes',
      value: anime.episodes,
    },
    {
      type: 'Duration',
      value: anime.duration,
    },
    {
      type: 'Status',
      value: anime.status,
    },
    {
      type: 'Aired',
      value: anime.aired.string,
    },
    {
      type: 'Rating',
      value: anime.rating,
    },
    {
      type: 'Genres',
      value: anime.genres.map((genre: { name: string }, i: number) => {
        return genre.name + (i !== anime.genres.length - 1 && ', ');
      }),
    },
    {
      type: 'Themes',
      value: anime.themes.map((theme: { name: string }, i: number) => {
        return theme.name + (i !== anime.themes.length - 1 && ', ');
      }),
    },
    {
      type: 'Licensors',
      value: anime.licensors.map((licensor: { name: string }, i: number) => {
        return licensor.name + (i !== anime.licensors.length - 1 && ', ');
      }),
    },
    {
      type: 'Studios',
      value: anime.studios.map((studio: { name: string }, i: number) => {
        return studio.name + (i !== anime.studios.length - 1 && ', ');
      }),
    },
    {
      type: 'Producers',
      value: anime.producers.map((producer: { name: string }, i: number) => {
        return producer.name + (i !== anime.producers.length - 1 && ', ');
      }),
    },
  ];

  const breadcumbsItems: BreadcumbsProps[] = [
    {
      path: '/anime',
      name: 'Anime',
    },
    {
      path: '/anime/detail/' + id,
      name: anime.title,
    },
  ];

  return (
    <>
      <header className='mt-12 text-center'>
        <h1 className='text-xl font-bold'>{anime.title}</h1>
        <span className='text-lg font-normal'>{anime.title_japanese}</span>
        <hr className='mt-6' />
      </header>
      <main className='mt-10 grid md:grid-cols-2 lg:grid-cols-4'>
        {/* Sidebar Section */}
        <SidebarDetail
          data={anime}
          info={info}
        />
        <div className='lg:col-span-3 mx-2'>
          {/* Breadcumbs */}
          <Breadcumbs items={breadcumbsItems} />
          {/* Score Board */}
          <div className='mt-6'>
            <ScoreBoard anime={anime} />
          </div>
          <main className='my-6'>
            <section>
              <h2 className='mb-3 font-semibold'>Synopsis</h2>
              <hr />
              <p className='my-3'>{anime.synopsis}</p>
            </section>
            <section className='mt-12'>
              <h2 className='mb-3 font-semibold'>Background</h2>
              <hr />
              <p className='my-3'>{anime.background}</p>
            </section>
            <section className='mt-12'>
              <h2 className='mb-3 font-semibold'>Trailer</h2>
              <hr className='mb-3' />
              <YouTubePlayer videoId={anime?.trailer?.youtube_id} />
            </section>
            <section className='mt-12'>
              <h2 className='mb-3 font-semibold'>Related Anime</h2>
              <hr className='mb-3' />
              <RelatedTable relations={anime.relations} />
            </section>
            <section className='mt-12'>
              <h2 className='mb-3 font-semibold'>Characters</h2>
              <hr />
              {/* Characters Table	 */}
              <CharactersTable
                characters={characters}
                manga={false}
              />
            </section>
            <section className='mt-12'>
              <h2 className='mb-3 font-semibold'>Staff</h2>
              <hr />
              {/* Staf Table */}
              <StaffTable staff={staff} />
            </section>
          </main>
        </div>
      </main>
    </>
  );
};

export default AnimeDetailPage;

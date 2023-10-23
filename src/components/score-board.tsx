import { ScoreBoardProps } from '@/types';
import { Badge } from './ui/badge';

const ScoreBoard = ({ anime, manga }: ScoreBoardProps) => {
  return (
    <div className='flex lg:gap-12 gap-3 md:px-6 lg:py-3 p-2 items-center flex-col lg:flex-row bg-slate-100 dark:bg-gray-900 border rounded-md'>
      <div className='flex flex-col items-center justify-center lg:border-r-2 lg:pr-8'>
        <Badge className='my-1 text-xs'>SCORE</Badge>
        <p className='text-2xl font-semibold'>
          {anime ? anime?.score : manga && manga?.score}
        </p>
        <p className='my-1 text-xs text-center'>
          {anime
            ? anime?.scored_by?.toLocaleString()
            : manga && manga?.scored_by?.toLocaleString()}{' '}
          users
        </p>
      </div>
      <div>
        <div className='flex justify-between gap-4 md:gap-8'>
          <p className='text-base md:text-xl'>
            Ranked #
            <strong>
              {anime
                ? anime?.rank?.toLocaleString()
                : manga && manga?.rank?.toLocaleString()}
            </strong>
          </p>
          <p className='text-base md:text-xl'>
            Popularity #
            <strong>
              {anime
                ? anime?.popularity?.toLocaleString()
                : manga && manga?.popularity?.toLocaleString()}
            </strong>
          </p>
          <p className='text-base md:text-xl'>
            Favorites #
            <strong>
              {anime
                ? anime?.favorites?.toLocaleString()
                : manga && manga?.favorites?.toLocaleString()}
            </strong>
          </p>
        </div>
        <div className='mt-4 flex gap-4 text-xs text-gray-700 dark:text-gray-300'>
          {anime
            ? anime?.season && (
                <>
                  <p>
                    {anime?.season} {anime?.year}
                  </p>
                  <span>|</span>
                </>
              )
            : manga && (
                <>
                  <p>{manga?.type}</p>
                  <span>|</span>
                </>
              )}
          {anime && <p>{anime?.type}</p>}
          {manga &&
            manga?.serializations.map((seri, i) => (
              <span
                key={seri.mal_id}
                className='mr-1'
              >
                {seri.name}
                {i !== manga?.authors.length - 1 && ','}
              </span>
            ))}
          <span>|</span>
          <section>
            {anime
              ? anime?.studios.map((studio, i) => (
                  <span
                    key={studio.mal_id}
                    className='mr-1'
                  >
                    {studio.name}
                    {i !== anime.studios.length - 1 && ','}
                  </span>
                ))
              : manga &&
                manga?.authors.map((author, i) => (
                  <span
                    key={author.mal_id}
                    className='mr-1'
                  >
                    {author.name}
                    {i !== manga.authors.length - 1 && ','}
                  </span>
                ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;

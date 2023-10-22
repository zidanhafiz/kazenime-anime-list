import { AnimesRecommend } from '@/types';
import CardList from './card-list';

const RecommendList = ({ data, link }: { data: AnimesRecommend; link: string }) => {
  const date = new Date(data.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className='flex w-full gap-6 border p-4 rounded-lg bg-slate-100 dark:bg-gray-900 flex-wrap lg:flex-nowrap'>
      <div className='flex gap-3 w-[400px]'>
        <CardList
          title={data.entry[0].title}
          src={data.entry[0].images.webp.large_image_url}
          link={`${link}/${data.entry[0].mal_id}`}
        />
        <CardList
          title={data?.entry[1].title}
          src={data?.entry[1].images.webp.large_image_url}
          link={`${link}/${data?.entry[1].mal_id}`}
        />
      </div>
      <div className='w-full flex flex-col justify-between'>
        <section>
          <h3 className='text-xl py-3 border-b'>
            Recommended by <span className='font-bold'>{data.user.username}</span>
          </h3>
          <p className='mt-3'>{data.content}</p>
        </section>
        <p className='text-end mt-3 text-[14px] border-t py-3'>
          Published on
          <time dateTime={data.date}> {date}</time>
        </p>
      </div>
    </div>
  );
};

export default RecommendList;

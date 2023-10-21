import { Info } from '@/types';
import Image from 'next/image';

const SidebarDetail = ({ data, info }: any) => {
  return (
    <div className='border rounded-md bg-slate-100 dark:bg-gray-900 p-6 flex h-fit flex-col items-stretch max-w-[320px]'>
      <div className='w-full'>
        <Image
          src={data.images.webp.large_image_url}
          alt={data.title}
          width={600}
          height={600}
        />
      </div>
      {/* Informations Section */}
      <div className='leading-7 mt-6'>
        <section>
          <h2 className='mb-2 font-semibold'>Alternative Titles</h2>
          <hr className='mb-2' />
          <p className='font-base'>
            <span className='font-semibold'>Japanese</span>: {data.title_japanese}
          </p>
          <p className='font-base'>
            <span className='font-semibold'>English</span>: {data.title}
          </p>
        </section>
        <section className='mt-8'>
          <h2 className='mb-2 font-semibold'>Information</h2>
          <hr className='mb-2' />
          {info.map((item: Info) => (
            <p
              className='font-base'
              key={item.type}
            >
              <span className='font-semibold'>{item.type}</span>: {item.value}
            </p>
          ))}
        </section>
        <section className='mt-8'>
          <h2 className='mb-2 font-semibold'>Resources</h2>
          <hr className='mb-2' />
          <div className=''>
            {data.external.map(
              (item: { name: string; url: string }, i: number) =>
                i < 3 && (
                  <a
                    className='font-base block leading-7 text-primary hover:underline'
                    key={i}
                    href={item.url}
                    target='_blank'
                  >
                    {item.name}
                  </a>
                )
            )}
          </div>
        </section>
        {data.streaming && (
          <section className='mt-8'>
            <h2 className='mb-2 font-semibold'>Streaming</h2>
            <hr className='mb-2' />
            {data?.streaming?.map((item: { name: string; url: string }) => (
              <a
                className='font-base block leading-7 text-primary hover:underline'
                key={item.name}
                href={item.url}
                target='_blank'
              >
                {item.name}
              </a>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default SidebarDetail;

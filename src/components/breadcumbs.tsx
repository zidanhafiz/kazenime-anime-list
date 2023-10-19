import { BreadcumbsProps } from '@/types';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

type Item = {
  path: string;
  name: string;
};

const Breadcumbs = ({ items }: { items: BreadcumbsProps[] }) => {
  const length = items.length;
  return (
    <div className='flex gap-2 items-center text-base text-primary'>
      <Link
        href='/'
        className='flex gap-2 items-center w-fit max-w-[192px] truncate'
      >
        <Home size={16} />
        <span>Home</span>
      </Link>
      <ChevronRight size={18} />
      {items.map((item: Item, i: number) => (
        <>
          <Link
            key={item.name}
            href={item.path}
            className='w-fit max-w-[192px] truncate'
          >
            <span>{item.name}</span>
          </Link>
          {length && i < length - 1 && (
            <ChevronRight
              size={18}
              key={item.name}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default Breadcumbs;

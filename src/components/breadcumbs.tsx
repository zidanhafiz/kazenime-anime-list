import { BreadcumbsProps } from '@/types';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

const Breadcumbs = ({ items }: { items: BreadcumbsProps[] }) => {
  const length = items.length;
  return (
    <div className='flex gap-2 items-center text-base text-primary'>
      <Link
        href='/'
        className='flex gap-2 items-center w-fit max-w-[192px] truncate hover:underline'
      >
        <Home size={16} />
        <span>Home</span>
      </Link>
      <ChevronRight size={18} />
      {items.map((item: BreadcumbsProps, i: number) => (
        <div
          key={item.name}
          className='flex items-center gap-2'
        >
          <Link
            key={item.name}
            href={item.path}
            className='w-fit max-w-[192px] truncate hover:underline'
          >
            <span>{item.name}</span>
          </Link>
          {length && i < length - 1 && (
            <ChevronRight
              size={18}
              key={item.name}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcumbs;

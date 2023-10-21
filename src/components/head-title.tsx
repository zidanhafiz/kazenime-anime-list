import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Breadcumbs from './breadcumbs';
import { BreadcumbsProps } from '@/types';

const HeadTitle = ({
  items,
  children,
  className,
}: {
  items?: BreadcumbsProps[];
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className='mt-14'>
      <h1 className={cn('text-2xl font-semibold text-center', className)}>{children}</h1>
      {items ? (
        <div className='mt-4'>
          <Breadcumbs items={items} />
          <hr className='mt-4' />
        </div>
      ) : (
        <hr className='mt-10' />
      )}
    </div>
  );
};

export default HeadTitle;

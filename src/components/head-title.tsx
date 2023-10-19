import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const HeadTitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className='mt-14'>
      <h1 className={cn('text-2xl font-semibold text-center', className)}>
        {children}
      </h1>
      <hr className='mt-10' />
    </div>
  );
};

export default HeadTitle;

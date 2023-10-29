import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className='mt-24 w-full min-h-screen'>
      <div className='mx-auto w-full flex flex-col items-center gap-4'>
        <Skeleton className='w-[60%] h-[20px]' />
        <Skeleton className='w-[60%] h-[20px]' />
        <Skeleton className='w-[60%] h-[20px]' />
        <Skeleton className='w-[60%] h-[20px]' />
        <Skeleton className='w-[60%] h-[20px]' />
      </div>
    </div>
  );
}

import HeadTitle from '@/components/head-title';
import { BreadcumbsProps } from '@/types';

const GenresPage = () => {
  const breadcumbsItems: BreadcumbsProps[] = [
    {
      name: 'Genres',
      path: '/genres',
    },
  ];
  return (
    <div className='min-h-screen'>
      <HeadTitle items={breadcumbsItems}>Genres</HeadTitle>
    </div>
  );
};

export default GenresPage;

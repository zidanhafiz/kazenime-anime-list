import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export type CardListProps = {
  title: string;
  description?: string;
  src: string;
  link?: string;
};

const CardList = ({ title, description, src, link }: CardListProps) => {
  return (
    <Card className='w-[150px] md:w-[280px] flex flex-col justify-start shadow-lg'>
      <Link href={`${link}`}>
        <CardHeader className='px-2 md:px-6'>
          <CardTitle className='text-center text-xs md:text-lg'>{title}</CardTitle>
          <CardDescription className='text-center text-[10px] md:text-base'>
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className='mx-auto w-full md:w-[85%] px-2 md:px-6'>
          {src && (
            <Image
              src={src}
              alt={title}
              width={500}
              height={500}
              className='w-full'
            />
          )}
        </CardContent>
      </Link>
    </Card>
  );
};

export default CardList;

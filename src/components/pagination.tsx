'use client';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const toggleGroupItemClasses =
  'hover:bg-primary hover:text-secondary color-primary data-[state=on]:bg-primary data-[state=on]:text-secondary flex h-[38px] max-w-[48px] px-3 items-center justify-center text-xs md:text-base leading-2 first:rounded-l last:rounded-r focus:z-10 transition mx-1';

interface Props {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}

const Pagination = ({ pagination, link }: { pagination: Props; link: string }) => {
  const router = useRouter();
  const currentPage = pagination.current_page;
  const visiblePageNumber = currentPage + 5;
  const lastPage = pagination.last_visible_page;
  const [value, setValue] = useState(pagination.current_page);
  const [disable, setDisable] = useState(false);

  const pageNumber = [''];

  useEffect(() => {
    setDisable(false);
  }, [currentPage]);

  useEffect(() => {
    router.push(`${link}page=${value}`);
  }, [value, link, router]);

  const getPageNumber = () => {
    for (let i = 1; i <= lastPage; i++) {
      pageNumber.push(i.toString());
    }
  };
  getPageNumber();

  return (
    <div className='flex gap-2 items-center'>
      <Button
        variant='outline'
        size='icon'
        className='shadow-lg hover:bg-primary hover:text-secondary'
        disabled={currentPage === 1 || disable ? true : false}
        onClick={() => {
          if (currentPage > 1) {
            setValue(value - 1);
            setDisable(true);
          }
        }}
      >
        <ChevronLeft className='h-4 w-4' />
      </Button>
      <ToggleGroup.Root
        className='inline-flex rounded space-x-px border shadow-lg '
        type='single'
        value={`${value}`}
        onValueChange={(value) => {
          if (value) {
            setValue(Number(value));
            setDisable(true);
          }
        }}
        aria-label='pagination'
      >
        {currentPage >= 2 && (
          <>
            <ToggleGroup.Item
              className={toggleGroupItemClasses}
              value='1'
              aria-label='Right aligned'
              disabled={disable}
            >
              1
            </ToggleGroup.Item>
            {currentPage > 2 && (
              <ToggleGroup.Item
                className='color-primary data-[state=on]:bg-primary data-[state=on]:text-secondary flex h-[38px] max-w-[48px] px-3 items-center justify-center text-base leading-4 first:rounded-l last:rounded-r focus:z-10 transition'
                value='...'
                aria-label='Center aligned'
                disabled={true}
              >
                ...
              </ToggleGroup.Item>
            )}
          </>
        )}
        {pageNumber.map((page: string, i) => {
          if (
            (i >= currentPage && visiblePageNumber > lastPage) ||
            (i <= currentPage && i >= lastPage - 5 && i < lastPage)
          ) {
            return (
              <ToggleGroup.Item
                key={i}
                className={`${toggleGroupItemClasses}`}
                value={page}
                aria-label={
                  i === 1
                    ? 'Left aligned'
                    : i < visiblePageNumber
                    ? 'Center aligned'
                    : 'Center aligned'
                }
                disabled={disable}
              >
                {page}
              </ToggleGroup.Item>
            );
          }
          if (i >= currentPage && i <= visiblePageNumber) {
            return (
              <ToggleGroup.Item
                key={i}
                className={
                  i <= visiblePageNumber - 3
                    ? toggleGroupItemClasses
                    : `hidden md:flex ${toggleGroupItemClasses}`
                }
                value={page}
                aria-label={
                  i === 1
                    ? 'Left aligned'
                    : i < visiblePageNumber
                    ? 'Center aligned'
                    : 'Center aligned'
                }
                disabled={disable}
              >
                {page}
              </ToggleGroup.Item>
            );
          }
        })}
        {currentPage !== lastPage && currentPage <= lastPage - 5 && (
          <>
            <ToggleGroup.Item
              className='color-primary data-[state=on]:bg-primary data-[state=on]:text-secondary flex h-[38px] w-[35px] items-center justify-center text-base leading-4 first:rounded-l last:rounded-r focus:z-10 transition'
              value='...'
              aria-label='Center aligned'
              disabled={true}
            >
              ...
            </ToggleGroup.Item>
            <ToggleGroup.Item
              className={toggleGroupItemClasses}
              value={`${lastPage}`}
              aria-label='Right aligned'
              disabled={disable}
            >
              {lastPage}
            </ToggleGroup.Item>
          </>
        )}
      </ToggleGroup.Root>
      <Button
        variant='outline'
        size='icon'
        className='shadow-lg hover:bg-primary hover:text-secondary'
        disabled={currentPage === lastPage || disable ? true : false}
        onClick={() => {
          if (currentPage <= lastPage) {
            setValue(value + 1);
            setDisable(true);
          }
        }}
      >
        <ChevronRight className='h-4 w-4' />
      </Button>
    </div>
  );
};

export default Pagination;

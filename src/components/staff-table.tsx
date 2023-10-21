import Image from 'next/image';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Staff } from '@/types';

const StaffTable = ({ staff }: { staff: Staff[] }) => {
  const defaultAvatar = '/male-icon.svg';
  return (
    <Table className='flex justify-between overflow-hidden items-stretch gap-8 w-full'>
      <TableBody className='w-full'>
        {staff.map(
          (chara, i: number) =>
            i < 3 && (
              <TableRow
                key={chara.person.mal_id}
                className='even:bg-slate-200 h-[110px] items-center dark:even:bg-gray-900 pointer-events-none flex justify-between'
              >
                <TableCell className='flex items-center gap-3'>
                  <div className='font-medium'>
                    <Image
                      className='max-w-[50px]'
                      src={
                        chara.person.images.jpg.image_url
                          ? chara.person.images.jpg.image_url
                          : defaultAvatar
                      }
                      alt={chara.person.name}
                      width={100}
                      height={150}
                    />
                  </div>
                  <div>
                    <p className='font-semibold'>{chara.person.name}</p>
                    <p>
                      {chara.positions.map((pos, i: number) =>
                        i !== chara.positions.length - 1 ? (
                          <span key={i}>{pos}, </span>
                        ) : (
                          <span key={i}>{pos}</span>
                        )
                      )}
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            )
        )}
      </TableBody>
      <TableBody className='w-full'>
        {staff.map(
          (chara, i: number) =>
            i >= 3 &&
            i < 6 && (
              <TableRow
                key={chara.person.mal_id}
                className='even:bg-slate-200 h-[110px] items-center dark:even:bg-gray-900 pointer-events-none flex justify-between'
              >
                <TableCell className='flex items-center gap-3'>
                  <div className='font-medium'>
                    <Image
                      className='max-w-[50px]'
                      src={
                        chara.person.images.jpg.image_url
                          ? chara.person.images.jpg.image_url
                          : defaultAvatar
                      }
                      alt={chara.person.name}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <p className='font-semibold'>{chara.person.name}</p>
                    <p>
                      {chara.positions.map((pos, i: number) =>
                        i !== chara.positions.length - 1 ? (
                          <span key={i}>{pos}, </span>
                        ) : (
                          <span key={i}>{pos}</span>
                        )
                      )}
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            )
        )}
      </TableBody>
    </Table>
  );
};

export default StaffTable;

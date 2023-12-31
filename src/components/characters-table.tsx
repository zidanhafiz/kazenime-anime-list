import Image from 'next/image';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Character } from '@/types';

const CharactersTable = ({
  characters,
  manga,
}: {
  characters: Character[];
  manga: boolean;
}) => {
  const defaultAvatar = '/male-icon.svg';
  return (
    <Table className='flex justify-between text-start flex-col lg:flex-row overflow-hidden items-stretch gap-8 w-full'>
      <TableBody className='w-full'>
        {characters.map(
          (chara: Character, i: number) =>
            i < 5 && (
              <TableRow
                key={chara.character.mal_id}
                className='even:bg-slate-200 h-[110px] items-center dark:even:bg-gray-900 pointer-events-none flex justify-between'
              >
                <TableCell className='flex items-center gap-3'>
                  <div className='font-medium'>
                    <Image
                      className='max-w-[50px]'
                      src={
                        chara.character.images.webp.image_url
                          ? chara.character.images.webp.image_url
                          : defaultAvatar
                      }
                      alt={chara.character.name}
                      width={100}
                      height={150}
                    />
                  </div>
                  <div>
                    <p className='font-semibold'>{chara.character.name}</p>
                    <p>{chara.role}</p>
                  </div>
                </TableCell>
                {!manga && (
                  <TableCell className='flex items-center gap-3'>
                    <div className='text-right'>
                      <p className='font-semibold'>
                        {chara.voice_actors[0]?.person.name}
                      </p>
                      <p>Japanese</p>
                    </div>
                    <div className='text-right'>
                      <Image
                        className='max-w-[50px]'
                        src={
                          chara.voice_actors[0]
                            ? chara.voice_actors[0].person.images.jpg.image_url
                            : defaultAvatar
                        }
                        alt={chara.voice_actors[0]?.person.name}
                        width={100}
                        height={100}
                      />
                    </div>
                  </TableCell>
                )}
              </TableRow>
            )
        )}
      </TableBody>
      <TableBody className='w-full'>
        {characters.map(
          (chara: any, i: number) =>
            i >= 5 &&
            i < 10 && (
              <TableRow
                key={chara.character.mal_id}
                className='even:bg-slate-200 h-[110px] items-center dark:even:bg-gray-900 pointer-events-none flex justify-between'
              >
                <TableCell className='flex items-center gap-3'>
                  <div className='font-medium'>
                    <Image
                      className='max-w-[50px]'
                      src={
                        chara.character.images.webp.image_url
                          ? chara.character.images.webp.image_url
                          : defaultAvatar
                      }
                      alt={chara.character.name}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <p className='font-semibold'>{chara.character.name}</p>
                    <p>{chara.role}</p>
                  </div>
                </TableCell>
                {!manga && (
                  <TableCell className='flex items-center gap-3'>
                    <div className='text-right'>
                      <p className='font-semibold'>
                        {chara.voice_actors[0]?.person.name}
                      </p>
                      <p>Japanese</p>
                    </div>
                    <div className='text-right'>
                      <Image
                        className='max-w-[50px]'
                        src={
                          chara.voice_actors[0]
                            ? chara.voice_actors[0].person.images.jpg.image_url
                            : defaultAvatar
                        }
                        alt={chara.voice_actors[0]?.person.name}
                        width={100}
                        height={100}
                      />
                    </div>
                  </TableCell>
                )}
              </TableRow>
            )
        )}
      </TableBody>
    </Table>
  );
};

export default CharactersTable;

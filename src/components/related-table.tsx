import { RelatedTableProps } from '@/types';

const RelatedTable = ({ relations }: { relations: RelatedTableProps[] }) => {
  return (
    <table className='w-fit'>
      <tbody>
        {relations.map((rel) => (
          <tr
            className=''
            key={rel.relation}
          >
            <td className='font-semibold text-end'>{rel.relation}: </td>
            <td className=''>
              {rel.entry.map((en, i: number) => (
                <a
                  href={en.url}
                  target='_blank'
                  className='text-primary hover:no-underline underline'
                  key={en.mal_id}
                >
                  {en.name}
                  {i < rel.entry.length - 1 && ','}
                </a>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RelatedTable;

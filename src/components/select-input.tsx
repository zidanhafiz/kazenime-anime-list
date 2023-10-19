import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Dispatch, SetStateAction } from 'react';

interface SelectProps {
  select: string;
  setSelect: Dispatch<SetStateAction<string>>;
}

export function SelectInput({ select, setSelect }: SelectProps) {
  return (
    <Select onValueChange={setSelect} value={select}>
      <SelectTrigger className='w-[100px] h-8'>
        <SelectValue placeholder='Filter' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='anime'>Anime</SelectItem>
          <SelectItem value='manga'>Manga</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

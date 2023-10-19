'use client';

import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { NavMenu } from './nav-menu';
import { Input } from './ui/input';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SelectInput } from './select-input';

const Header = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('anime');
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${search}&s=${select}`);
  };
  return (
    <div className='pt-6 pb-4 grid md:flex md:justify-between md:items-center border-b-2'>
      <Link href={'/'} className='text-3xl font-bold col-start-1'>
        Kazenime
      </Link>
      <div className='flex md:items-center justify-center md:flex-row flex-col-reverse gap-3 row-start-2 col-span-2 mt-5 md:mt-0'>
        <div className='mx-auto'>
          <NavMenu />
        </div>
        <form
          onSubmit={(e) => handleSearch(e)}
          className='flex gap-2 justify-center'
        >
          <SelectInput select={select} setSelect={setSelect} />
          <Input
            type='text'
            className='h-8 md:w-full max-w-[300px]'
            placeholder='Search anime or manga'
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form>
      </div>
      <div className='col-start-2 md:col-start-10 row-start-1 justify-self-end'>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;

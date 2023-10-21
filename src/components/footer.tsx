import Link from 'next/link';
import { monoton } from '@/app/layout';

const Footer = () => {
  return (
    <footer className='bg-white rounded-lg shadow-lg dark:bg-gray-900 m-4 mt-20'>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <a
            href='/'
            className='flex items-center mb-4 sm:mb-0'
          >
            <p className={`${monoton.className} text-2xl`}>Kazenime</p>
          </a>
          <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
            <li key='about'>
              <Link
                href='/about'
                className='mr-4 hover:underline md:mr-6 '
              >
                About
              </Link>
            </li>
            <li key='privacy'>
              <Link
                href='/privacy'
                className='mr-4 hover:underline md:mr-6'
              >
                Privacy Policy
              </Link>
            </li>
            <li key='licensing'>
              <Link
                href='/licensing'
                className='mr-4 hover:underline md:mr-6 '
              >
                Licensing
              </Link>
            </li>
            <li key='contact'>
              <Link
                href='/contact'
                className='hover:underline'
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2023{' '}
          <a
            href='/'
            className='hover:underline'
          >
            Kazenime™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

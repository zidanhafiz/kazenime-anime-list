import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-white rounded-lg shadow-lg dark:bg-gray-900 m-4 mt-20'>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <a
            href='/'
            className='flex items-center mb-4 sm:mb-0'
          >
            <Image
              src='https://flowbite.com/docs/images/logo.svg'
              className='h-8 w-auto mr-3'
              alt='Kazenime Logo'
              width={500}
              height={500}
            />
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              Kazenime
            </span>
          </a>
          <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
            <li>
              <Link
                href='/about'
                className='mr-4 hover:underline md:mr-6 '
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='/privacy'
                className='mr-4 hover:underline md:mr-6'
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href='/licensing'
                className='mr-4 hover:underline md:mr-6 '
              >
                Licensing
              </Link>
            </li>
            <li>
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

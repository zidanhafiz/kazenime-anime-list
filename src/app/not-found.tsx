import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col gap-4'>
      <h2 className='text-2xl font-bold'>Page Not Found!</h2>
      <p>Could not find requested resource</p>
      <Link
        href='/'
        className='bg-primary hover:opacity-90 transition py-2 px-4 text-white rounded font-semibold'
      >
        Return Home
      </Link>
    </div>
  );
}

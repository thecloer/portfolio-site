import Link from 'next/link';
import React from 'react';
import DarkModeToggleButton from './darkModeToggleButton';

const Header = () => {
  return (
    <header className='text-gray-600 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href='/'>
          <a className='flex title-font font-medium items-center text-gray-900 dark:text-slate-200 mb-4 md:mb-0'>
            <span className='ml-3 text-xl'>cloer</span>
          </a>
        </Link>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          <Link href='/about'>
            <a className='mr-5'>About</a>
          </Link>
          <Link href='/educations'>
            <a className='mr-5'>Educations</a>
          </Link>
          <Link href='/projects'>
            <a className='mr-5'>Projects</a>
          </Link>
        </nav>
        <DarkModeToggleButton />
      </div>
    </header>
  );
};

export default Header;

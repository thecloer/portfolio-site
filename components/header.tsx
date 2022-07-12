import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DarkModeToggleButton from './darkModeToggleButton';
import HeaderLink from './headerLink';

const Header = () => {
  const { theme } = useTheme();
  const pageList = ['about', 'education', 'projects'];

  return (
    <header className='text-gray-600 body-font '>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href='/'>
          <a className='flex title-font font-medium items-center text-gray-900 dark:text-slate-200 mb-4 md:mb-0 '>
            <Image src={`/cloer-logo-${theme === 'dark' ? 'orange' : 'indigo'}-512x512.png`} layout='fixed' width='40' height='40' alt='cloer logo' />
            <span className='ml-3 text-xl'>Seokgyu Choi</span>
          </a>
        </Link>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          {pageList.map((page, idx) => (
            <HeaderLink key={idx} text={page} />
          ))}
        </nav>
        <DarkModeToggleButton />
      </div>
    </header>
  );
};

export default Header;

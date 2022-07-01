import React from 'react';

const Footer = () => {
  return (
    <footer className='body-font'>
      <div className='text-gray-600 dark:text-white bg-gray-100 dark:bg-slate-600/20'>
        <div className='container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col'>
          <a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-slate-200'>
            <span className='ml-3 text-xl'>cloer</span>
          </a>
          <p className='text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4'>
            <a className='text-gray-600 ml-1' href='https://www.instagram.com/thecloer/' target='_blank' rel='noopener noreferrer author'>
              @thecloer
            </a>
          </p>
          <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
            <a href='https://github.com/cloer-Choi' target='_blank' rel='noreferrer'>
              <svg fill='currentColor' className='bi bi-github' width='20' height='20' viewBox='0 0 16 16'>
                <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
              </svg>
            </a>
            <a href='https://www.instagram.com/thecloer/' target='_blank' rel='noreferrer' className='ml-3'>
              <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-5 h-5' viewBox='0 0 24 24'>
                <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
              </svg>
            </a>
            <a href='https://www.linkedin.com/in/seokgyu-choi-06189a221/' target='_blank' rel='noreferrer' className='ml-3'>
              <svg fill='currentColor' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='0' className='w-5 h-5' viewBox='0 0 24 24'>
                <path stroke='none' d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'></path>
                <circle cx='4' cy='4' r='2' stroke='none'></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

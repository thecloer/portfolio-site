import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout';

const Education = () => {
  return (
    <Layout>
      <Head>
        <title>Seokgyu Choi</title>
        <meta name='description' content="Seokgyu Choi's portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='mb-20'>
        <a
          className='inline-flex items-baseline mb-2'
          href='https://www.uos.ac.kr/en/academics/colleges/cuscience/geolnformatics/introduction.do?epTicket=LOG'
          target='_blank'
          rel='noopener noreferrer author'
        >
          <h1 className='sm:text-3xl text-2xl font-medium'>University of Seoul</h1>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-2 w-2 sm:h-3 sm:w-3 ml-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
            />
          </svg>
        </a>
        <div className='h-1 w-20 bg-indigo-500 dark:bg-orange-500 rounded'></div>
      </div>

      <section className='flex flex-col w-full'>
        <div className='mb-12'>
          <h2 className='sm:text-2xl text-xl font-normal'>Junior in Geoinfromatics</h2>
        </div>
        <h2 className='sm:text-2xl text-xl font-medium mb-10'>Courses</h2>
        <div>
          <h4></h4>
          <p className='w-2/3 md:w-3/5 leading-relaxed'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&asp;s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&asp;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Education;

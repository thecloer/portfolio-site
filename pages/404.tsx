import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout';

const NotFound = () => {
  return (
    <Layout>
      <Head>
        <title>Not Found</title>
        <meta name='description' content="Seokgyu Choi's portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex flex-wrap items-baseline sm:m-16'>
        <h1 className='text-4xl font-medium border-r pr-2 mr-4'>404</h1>
        <h3 className='text-2xl'>Not Found</h3>
      </div>
    </Layout>
  );
};

export default NotFound;

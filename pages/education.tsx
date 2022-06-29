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
        <h1 className='sm:text-3xl text-2xl font-medium mb-2 text-gray-900'>Education</h1>
        <div className='h-1 w-20 bg-indigo-500 dark:bg-orange-500 rounded'></div>
      </div>
    </Layout>
  );
};

export default Education;

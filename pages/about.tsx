import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout';
import { InferGetStaticPropsType } from 'next';

const About = () => {
  return (
    <Layout>
      <Head>
        <title>Seokgyu Choi</title>
        <meta name='description' content="Seokgyu Choi's portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='flex flex-col w-full items-center'>
        <div className='h-52 w-52 bg-green-500  mb-14'>TODO: IMAGE</div>
        <h1 className='sm:text-3xl text-2xl font-medium mb-10'>Seokgye Choi</h1>
        <p className='w-2/3 md:w-3/5 leading-relaxed'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&asp;s standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry&asp;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </section>
    </Layout>
  );
};

export default About;

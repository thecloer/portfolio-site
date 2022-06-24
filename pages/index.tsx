import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/home/hero';
import Layout from '../components/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Seokgyu Choi</title>
        <meta name='description' content="Seokgyu Choi's portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <Hero />
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'></div>
      </div>
    </Layout>
  );
};

export default Home;

import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';

const About: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Seokgyu Choi</title>
        <meta name='description' content="Seokgyu Choi's portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </Layout>
  );
};

export default About;

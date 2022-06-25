import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout';

const About = () => {
  return (
    <Layout>
      <Head>
        <title>Seokgyu Choi</title>
        <meta name='description' content="Seokgyu Choi's portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      About
    </Layout>
  );
};

export default About;

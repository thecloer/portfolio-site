import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Layout from '../components/layout';
import StackCard from '../components/stackCard';
import Section from '../components/section';
import { ICONS, TIconName } from '../lib/data';
import { TIcon } from '../types/data.type';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import AboutMe from '../components/about/aboutMe';

interface IAboutPageProps {
  myTechStackList: TIcon[];
}

export const getStaticProps: GetStaticProps<IAboutPageProps> = () => {
  const myTechStackNameList: TIconName[] = [
    'Javascript',
    'Typescript',
    'Node JS',
    'Express JS',
    'Nest JS',
    'React JS',
    'Next JS',
    'Tailwind CSS',
    'TypeORM',
    'MySQL',
    'PostgreSQL',
    'Mongoose',
    'Mongo DB',
    'Github',
    'Docker',
    'AWS EC2',
    'Nginx',
  ];
  const myTechStackList = myTechStackNameList.map((myTechStackName) => ICONS.find(({ name: iconName }) => iconName === myTechStackName) as TIcon);

  return {
    props: { myTechStackList },
  };
};

const About: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ myTechStackList }) => {
  return (
    <Layout>
      <Head>
        <title>Seokgyu Choi</title>
        <meta name='description' content="Seokgyu Choi's portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <article className='flex flex-col w-full items-center'>
        <div className='w-52 h-52 md:w-72 md:h-72 relative rounded-md overflow-hidden mb-12'>
          <Image alt='picture of me' src='/me.jpg' layout='fill' />
        </div>
        <h1 className='text-2xl sm:text-3xl font-medium mb-10'>Seokgye Choi</h1>

        <AboutMe />

        <Section title='Skills'>
          <div className='mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
            {myTechStackList.map((stack, i) => (
              <StackCard stack={stack} key={i} />
            ))}
          </div>
        </Section>
        <Section title='Experenced'></Section>
      </article>
    </Layout>
  );
};

export default About;

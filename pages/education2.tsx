import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import CourseCard from '../components/education/courseCard';
import Layout from '../components/layout';
import { courses } from '../lib/data';
import { TCourse } from '../types/data.type';

interface IEducationPageProps {
  courses: TCourse[];
}

export const getStaticProps: GetStaticProps<IEducationPageProps> = () => {
  return {
    props: { courses },
  };
};

const Education: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ courses }) => {
  return (
    <Layout>
      <Head>
        <title>Seokgyu Choi</title>
        <meta name='description' content="Seokgyu Choi's portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='mb-20'>
        <h1 className='sm:text-3xl text-2xl font-medium mb-2'>University of Seoul</h1>
        <div className='h-1 w-20 bg-indigo-500 dark:bg-orange-500 rounded'></div>

        <a
          className='inline-flex items-baseline mt-10 '
          href='https://www.uos.ac.kr/en/academics/colleges/cuscience/geolnformatics/introduction.do?epTicket=LOG'
          target='_blank'
          rel='noopener noreferrer author'
        >
          <h2 className='text-xl font-medium'>Major in Geoinformatics</h2>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-2.5 w-2.5 ml-0.5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
            />
          </svg>
        </a>
      </div>

      <section className='text-gray-600 body-font overflow-hidden'>
        <div className='container px-5 mx-auto'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {courses.map((course, i) => (
              <CourseCard course={course} key={i} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Education;

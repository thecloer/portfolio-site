import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout';
import ProjectCard from '../components/projects/projectCard';
import { getProjects } from '../lib/notion';

const Projects = ({ projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <Head>
        <title>Seokgyu Choi</title>
        <meta name='description' content="Seokgyu Choi's portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='mx-8'>
        <div className='mb-20'>
          <h1 className='sm:text-3xl text-2xl font-medium mb-2 text-gray-900'>Projects: {projects.length}</h1>
          <div className='h-1 w-20 bg-indigo-500 dark:bg-orange-500 rounded'></div>
        </div>
        {/* TODO: tag input */}
        <input className='lg:w-1/2 w-full leading-relaxed text-gray-500' type='text' placeholder='search project by tag' />
        <div className='flex flex-wrap'>
          {projects.map((aProject) => (
            <ProjectCard key={aProject.id} project={aProject} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;

export const getStaticProps = async () => {
  const projects = await getProjects();
  return {
    props: { projects },
  };
};

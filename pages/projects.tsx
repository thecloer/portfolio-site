import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout';
import ProjectCard from '../components/projects/projectCard';
import { getProjects } from '../lib/notion';
import { TProject } from '../types/project.type';

interface IProjectsPageProps {
  projects: TProject[];
}

export const getStaticProps: GetStaticProps<IProjectsPageProps> = async () => {
  const projects = await getProjects();
  return {
    props: { projects },
  };
};

const Projects: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ projects }) => {
  return (
    <Layout>
      <Head>
        <title>Seokgyu Choi</title>
        <meta name='description' content="Seokgyu Choi's portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <article className='w-full h-full'>
        <div className='mb-20'>
          <h1 className='sm:text-3xl text-2xl font-medium mb-2'>Projects: {projects.length}</h1>
          <div className='h-1 w-20 bg-indigo-500 dark:bg-orange-500 rounded'></div>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((aProject) => (
            <ProjectCard key={aProject.id} project={aProject} />
          ))}
        </div>
      </article>
    </Layout>
  );
};

export default Projects;

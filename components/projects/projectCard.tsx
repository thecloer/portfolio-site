import Image from 'next/image';
import React, { FC } from 'react';
import { colorTable, TColors } from '../../lib/colorTable';
import { TProject, linkButtonTypes, TProjectCardLinkButtonSrc } from '../../types/project.type';
import ProjectCardLinkButton from './projectCardLinkButton';

interface IProjectCardProps {
  project: TProject;
}

const ProjectCard: FC<IProjectCardProps> = ({ project }) => {
  const {
    coverUrl,
    properties: { name: title, description, tag: tags, github: githubLink, npm: npmLink, blog: blogLink },
  } = project;

  const links: TProjectCardLinkButtonSrc[] = [];
  githubLink && links.push({ type: linkButtonTypes.github, url: githubLink });
  npmLink && links.push({ type: linkButtonTypes.npm, url: npmLink });
  blogLink && links.push({ type: linkButtonTypes.blog, url: blogLink });

  return (
    <div className='project-card'>
      <div className='project-card__image-container'>
        {coverUrl === null ? (
          <h1 className='font-medium'>No Image</h1>
        ) : (
          <Image src={coverUrl} alt='cover image' layout='fill' objectFit='cover' objectPosition='center' quality={100} />
        )}
      </div>
      <div className='flex flex-col grow p-5'>
        <div className='grow'>
          <h2 className='text-lg text-indigo-500 dark:text-orange-300 font-medium mb-3'>{title}</h2>
          <p className='leading-relaxed text-base break-words'>{description}</p>
        </div>
        <div className='flex items-start flex-wrap mt-4'>
          {links.map((linkSrc, i) => (
            <ProjectCardLinkButton key={i} src={linkSrc} />
          ))}
        </div>
        <div className='flex items-start flex-wrap mt-2'>
          {tags.map((aTag) => (
            <span className={'px-2 py-1 mb-2 mr-2 text-black text-xs rounded-md'} style={{ backgroundColor: colorTable[aTag.color as TColors] }} key={aTag.id}>
              {aTag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

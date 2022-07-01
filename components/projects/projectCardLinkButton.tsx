import React, { FC } from 'react';
import { IProjectCardLinkButton, linkButtonTypes } from '../../types/project.type';

const ProjectCardLinkButton: FC<IProjectCardLinkButton> = ({ src: { url, type } }) => {
  return (
    <a className='project-card__link-button' href={url}>
      {type === linkButtonTypes.github ? (
        <svg className='mr-1 bi bi-github' width='16' height='16' fill='black' viewBox='0 0 16 16'>
          <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
        </svg>
      ) : type === linkButtonTypes.npm ? (
        <svg className='mr-1 rounded' width='16' height='16' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <g fill='none' fillRule='evenodd'>
            <rect width='24' height='24' fill='#D40001' />
            <path
              fill='#FFF'
              d='M16.7179487,7.92840493 L12.2051282,7.92840493 L12.2051282,20.2494172 L4,20.2494172 L4,3 L12.2051282,3 L20,3 L20,7.92840493 L20,20.2494172 L16.7179487,20.2494172 L16.7179487,7.92840493 Z'
            />
          </g>
        </svg>
      ) : (
        <svg className='mr-1' width='16' height='16' viewBox='0 0 24 24' fill='black' xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M15.1369 3.46967C14.9963 3.32902 14.8055 3.25 14.6066 3.25C14.4077 3.25 14.2169 3.32902 14.0763 3.46967L4.88388 12.6621C4.78965 12.7563 4.72223 12.8739 4.68856 13.0028L3.68856 16.8313C3.62127 17.0889 3.69561 17.3629 3.88388 17.5511C4.07215 17.7394 4.34614 17.8138 4.60375 17.7465L8.43218 16.7465C8.56111 16.7128 8.67874 16.6454 8.77297 16.5511L17.9654 7.35876C18.2582 7.06586 18.2582 6.59099 17.9654 6.2981L15.1369 3.46967ZM6.08843 13.5788L14.6066 5.06066L16.3744 6.82843L7.8562 15.3466L5.46344 15.9716L6.08843 13.5788Z'
            fill='black'
          />
          <path
            d='M4 19.25C3.58579 19.25 3.25 19.5858 3.25 20C3.25 20.4142 3.58579 20.75 4 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20C19.75 19.5858 19.4142 19.25 19 19.25H4Z'
            fill='black'
          />
        </svg>
      )}
      {type}
      <svg xmlns='http://www.w3.org/2000/svg' className='ml-1 mb-0.5 self-end' width='8' height='8' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
        />
      </svg>
    </a>
  );
};

export default ProjectCardLinkButton;

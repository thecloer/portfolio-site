import React, { FC } from 'react';
import { TCourse } from '../../types/data.type';

interface ICourseBlock {
  course: TCourse;
}

const CourseBlock: FC<ICourseBlock> = ({ course }) => {
  return (
    <div className='py-8 flex flex-wrap md:flex-nowrap'>
      <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
        <span className='font-semibold text-indigo-500 dark:text-orange-400'>COURSE</span>
        <span className='mt-1 text-gray-500 text-sm'>12 Jun 2019</span>
      </div>
      <div className='md:flex-grow'>
        <h2 className='text-2xl font-medium text-gray-900  mb-2'>{course.title}</h2>
        <p className='leading-relaxed'>{course.description}</p>
        <a className='text-indigo-500 inline-flex items-center mt-4'>
          Learn More
          <svg className='w-4 h-4 ml-2' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' fill='none' strokeLinecap='round' strokeLinejoin='round'>
            <path d='M5 12h14'></path>
            <path d='M12 5l7 7-7 7'></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CourseBlock;

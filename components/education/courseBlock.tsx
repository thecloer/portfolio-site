import React, { FC } from 'react';
import { TCourse } from '../../types/data.type';

interface ICourseBlockProps {
  course: TCourse;
}

const CourseBlock: FC<ICourseBlockProps> = ({ course }) => {
  return (
    <div className='py-8 flex flex-wrap md:flex-nowrap'>
      <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
        <span className='font-semibold text-indigo-500 dark:text-orange-400'>COURSE</span>
        <span className='mt-1 text-gray-500 text-sm'>12 Jun 2019</span>
      </div>
      <div className='md:flex-grow'>
        <h2 className='text-2xl font-medium mb-6'>{course.title}</h2>
        <p className='leading-relaxed'>{course.description}</p>
        <h3 className='mt-2'>{course.grade}</h3>
      </div>
    </div>
  );
};

export default CourseBlock;

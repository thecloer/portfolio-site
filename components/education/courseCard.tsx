import React, { FC } from 'react';
import { TCourse } from '../../types/data.type';

interface ICourseCardProps {
  course: TCourse;
}

const CourseCard: FC<ICourseCardProps> = ({ course }) => {
  return (
    <div className='text-sm p-6 bg-slate-200 dark:bg-slate-700 rounded-md flex flex-col'>
      <h1 className='mb-5'>{course.title}</h1>
      <p className='grow'>{course.description}</p>

      <div className='flex flex-wrap mt-2'>
        {course.tags.map((tag, k) => (
          <div className='btn-bg px-2 py-1 mb-2 mr-2 text-xs font-medium rounded-md' key={k}>
            {tag}
          </div>
        ))}
      </div>

      <div className='flex justify-between'>
        <span className='text-indigo-500 dark:text-orange-400'>credits: {course.credits}</span>
        <span className='text-indigo-500 dark:text-orange-400'>{course.grade}</span>
      </div>
    </div>
  );
};

export default CourseCard;

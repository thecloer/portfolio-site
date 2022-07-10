import Image from 'next/image';
import React, { FC } from 'react';
import { ICONS } from '../../lib/data';
import { TCourse, TIcon } from '../../types/data.type';

interface ICourseCardProps {
  course: TCourse;
}

const CourseCard: FC<ICourseCardProps> = ({ course }) => {
  const courseTagIcons = course.tags.map((tagName) => ICONS.find(({ name: iconName }) => iconName === tagName) as TIcon);

  return (
    <div className='text-sm px-6 py-7 bg-slate-200 dark:bg-slate-700 rounded-md flex flex-col'>
      <h1 className='text-indigo-500 dark:text-orange-400 font-semibold text-base mb-4'>{course.title}</h1>

      <p className='grow mb-5'>{course.description}</p>

      <div className='flex justify-between mb-3 text-slate-500 dark:text-slate-400'>
        <span>credits: {course.credits}</span>
        <span>{course.semester}</span>
      </div>

      <div className='flex justify-between'>
        <div className='flex'>
          {courseTagIcons.map((tag, k) => (
            <div className='bg-white dark:bg-slate-200 text-slate-600 px-2 py-1 mr-2 text-xs font-medium rounded-md flex items-center' key={k}>
              <Image src={tag.link} alt={`${tag.name} logo`} width='16' height='16' />
              <span className='ml-1'>{tag.name}</span>
            </div>
          ))}
        </div>
        <span className='text-indigo-500 dark:text-orange-400 font-semibold self-end'>{course.grade}</span>
      </div>
    </div>
  );
};

export default CourseCard;

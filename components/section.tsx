import React, { FC, ReactNode } from 'react';

interface ISectionProps {
  title: string;
  children?: ReactNode;
}

const Section: FC<ISectionProps> = ({ title, children }) => {
  return (
    <section className='flex flex-col items-center w-2/3 md:w-4/5 mt-20'>
      <div className='flex w-full items-center justify-around'>
        <div className='section-line'></div>
        <h2 className='text-xl sm:text-2xl '>{title}</h2>
        <div className='section-line'></div>
      </div>
      {children}
    </section>
  );
};

export default Section;

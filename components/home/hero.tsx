import React from 'react';
import HeroButton from './heroButton';

const Hero = () => {
  return (
    <section className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
      <h1 className='sm:text-4xl text-3xl mb-14 font-medium text-gray-900'>Hi, I&apos;m Seokgyu Choi</h1>
      <p className='leading-relaxed text-xl'>
        I&apos;m a junior full-stack web developer who loves Javascript ecosystem.
        <br />
      </p>
      <div className='mt-8 flex flex-col sm:flex-row'>
        <HeroButton text='About' />
        <HeroButton text='Education' />
        <HeroButton text='Projects' />
      </div>
    </section>
  );
};

export default Hero;

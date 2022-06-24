import React from 'react';

const Hero = () => {
  return (
    <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
      <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>Seokgyu Choi</h1>
      <p className='mb-8 leading-relaxed'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&asp;s standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  );
};

export default Hero;

import React from 'react';
import Lottie from 'react-lottie-player';

import lottieComputer from '../../public/lottie-animation-computer.json';

const Animation = () => {
  return (
    <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
      <Lottie loop animationData={lottieComputer} play className='w-full h-full' />
    </div>
  );
};

export default Animation;

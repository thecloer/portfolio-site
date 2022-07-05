import Image from 'next/image';
import React, { FC } from 'react';
import { TIcon } from '../types/data.type';

const StackCard: FC<{ stack: TIcon }> = ({ stack }) => {
  return (
    <div className='stack-card'>
      <Image alt={`${stack.name} logo`} src={stack.link} width='24' height='24' />

      <span className='text-md grow flex justify-center text-black'>{stack.name}</span>
    </div>
  );
};

export default StackCard;

import Link from 'next/link';
import React, { FC } from 'react';

interface IHeroButtonProps {
  text: string;
}

const HeroButton: FC<IHeroButtonProps> = ({ text }) => {
  return (
    <Link href={`/${text.toLowerCase()}`}>
      <button className='home-button'>{text}</button>
    </Link>
  );
};

export default HeroButton;

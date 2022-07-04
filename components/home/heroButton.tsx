import Link from 'next/link';
import React, { FC } from 'react';

interface HeroButton {
  text: string;
}

const HeroButton: FC<HeroButton> = ({ text }) => {
  return (
    <Link href={`/${text.toLowerCase()}`}>
      <button className='home-button'>{text}</button>
    </Link>
  );
};

export default HeroButton;

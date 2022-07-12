import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

interface IHeaderLinkProps {
  text: string;
}

const HeaderLink: FC<IHeaderLinkProps> = ({ text }) => {
  const router = useRouter();
  const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
  const pathedText = '/'.concat(text);

  return (
    <>
      {router.pathname === pathedText ? (
        <a className='mr-5 cursor-pointer'>{capitalizedText}</a>
      ) : (
        <Link href={pathedText}>
          <a className='mr-5'>{capitalizedText}</a>
        </Link>
      )}
    </>
  );
};

export default HeaderLink;

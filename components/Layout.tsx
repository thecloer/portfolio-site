import React, { ReactNode } from 'react';
import Footer from './footer';
import Header from './header';

interface LayoutPorps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutPorps) => {
  return (
    <div className='bg-primary'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

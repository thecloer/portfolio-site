import React, { ReactNode } from 'react';
import Header from './header';

interface LayoutPorps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutPorps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;

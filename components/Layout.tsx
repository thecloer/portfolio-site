import React, { ReactNode } from 'react';

interface LayoutPorps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutPorps) => {
  return <div>{children}</div>;
};

export default Layout;

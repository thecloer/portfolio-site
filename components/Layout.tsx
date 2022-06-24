import { ReactNode } from 'react';
import Footer from './footer';
import Header from './header';

interface LayoutPorps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutPorps) => {
  return (
    <div className='bg-white dark:bg-slate-800 flex flex-col h-full'>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

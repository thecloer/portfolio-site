import { FunctionComponent, ReactNode } from 'react';
import Footer from './footer';
import Header from './header';

interface ILayoutPorps {
  children: ReactNode;
}

const Layout: FunctionComponent<ILayoutPorps> = ({ children }) => {
  return (
    <div className='bg-white dark:bg-slate-800 flex flex-col min-h-full'>
      <Header />
      <main className='grow container mx-auto px-5 py-20'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

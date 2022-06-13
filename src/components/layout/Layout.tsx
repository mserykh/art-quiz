import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

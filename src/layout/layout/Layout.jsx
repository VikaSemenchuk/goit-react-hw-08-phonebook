import { Suspense } from 'react';
import Loader from 'components/loader/Loader';
import { Outlet } from 'react-router-dom';

import { ToastContainerEl } from 'components/toast/ToastContainer';
import { Header } from 'layout/header/Header';
import { Footer } from 'layout/footer/Footer';

import { Container } from 'styles/Container';

const Layout = () => {
  return (
    <>
      <ToastContainerEl />
      <Header />
      <Suspense fallback={<Loader />}>
        <main>
          <Container>
            <Outlet />
          </Container>
        </main>
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, MainContainer } from './SharedLayout.styled';
import HeaderBar from 'components/HeaderBar/HeaderBar';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <HeaderBar />
      <MainContainer>
        <Container>
          <Suspense fallback={<Loader />}>
            <div>
              <Outlet />
            </div>
          </Suspense>
        </Container>
      </MainContainer>
    </>
  );
};

export default SharedLayout;

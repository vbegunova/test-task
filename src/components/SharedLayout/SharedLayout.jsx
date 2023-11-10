import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Navigation, StyledLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/catalog">Catalog</StyledLink>
            <StyledLink to="/favorites">Favorites</StyledLink>
          </Navigation>
        </Container>
      </Header>
      <main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <div>
              <Outlet />
            </div>
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default SharedLayout;

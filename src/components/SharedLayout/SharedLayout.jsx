import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <>
      <header>
        <div>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/catalog">Catalog</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
          </nav>
        </div>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <div>
            <Outlet />
          </div>
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;

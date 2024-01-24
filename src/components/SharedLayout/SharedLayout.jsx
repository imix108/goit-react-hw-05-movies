import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Links } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'left',
          gap: 30,
          fontWeight: 700,
          padding: 5,
          borderBottom: '1px solid',
        }}
      >
        <Links to="/">Home</Links>
        <Links to="/movies">Movies</Links>
      </nav>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import { PageNotFound} from '../pages/PageNotFound/PageNotFound'
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const MoviesDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails')
);

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Container>
  );
};
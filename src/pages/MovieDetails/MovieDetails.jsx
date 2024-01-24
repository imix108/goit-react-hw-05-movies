import { fetchDetailsMovie } from 'service/serviceAPI';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { GoBack } from 'components/GoBack/GoBack';
import { Container, DefaultContainer, Links } from './MovieDetails.styled';

const MoviesDetails = () => {
  const [moviesDetails, setMoviesDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const turningBack = location.state?.from ?? `/movies`;

  useEffect(() => {
    fetchDetailsMovie(movieId).then(respMovieId => {
      setMoviesDetails(respMovieId);
    });
  }, [movieId]);
  const { poster_path, title, genres, overview, vote_average, release_date } =
    moviesDetails;
  

  return (
    <>
      <div>
        <GoBack to={turningBack} />
        <DefaultContainer>
          {poster_path ? (
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt={title}
                width={300}
                
              />
            </div>
          ) : (
            <div>Loading...</div>
          )}
          <div>
            <div>
              {title && (
                <h2>
                  {title} {release_date.substr(0, 4)}
                </h2>
              )}
              
              <p>
                User Score: {vote_average && Math.floor(vote_average * 10)}%
              </p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h4>Genres</h4>
              {genres && <p>{genres.map(genre => genre.name).join(', ')}</p>}
            </div>
          </div>
        </DefaultContainer>
        <h5>Additional information</h5>
        <Container>
          <li>
            <Links to="cast">Cast</Links>
          </li>
          <li>
            <Links to="reviews">Reviews</Links>
          </li>
        </Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
export default MoviesDetails;
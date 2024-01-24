import PropTypes from 'prop-types';
import { AiOutlineFileImage } from 'react-icons/ai';
import { Outlet, useLocation } from 'react-router-dom';
import { Card, Li, Links, List } from './MoviesList.styled';
export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <List>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <Li key={id}>
              <Links to={`/movies/${id}`} state={{ from: location }}>
                <Card>
                  {poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                      alt={title}
                    />
                  ) : (
                    <AiOutlineFileImage size={200} />
                  )}
                  {title}
                </Card>
              </Links>
            </Li>
          );
        })}
      </List>
      <Outlet />
    </>
  );
};
export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

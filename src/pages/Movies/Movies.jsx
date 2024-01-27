import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import SearchInput from 'components/SearchInput/SearchInput';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'service/serviceAPI';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieName) {
      return;
    }

    setLoading(true);
    fetchSearchMovies(movieName)
      .then(respMovies => {
        setMovies(respMovies.results);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [movieName]);
  const handleOnSubmit = query => {
    const changeParams = query !== '' ? { query } : {};
    setSearchParams(changeParams);
  };
  return (
    <div>
      {error && <h2>{error.message}</h2>}
      <SearchInput value={movieName} onSearch={handleOnSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
      {loading && <Loader />}
    </div>
  );
};
export default Movies;
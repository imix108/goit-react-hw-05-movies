import ListMovies from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { fetchTrending } from 'service/serviceAPI';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchTrending()
      .then(respMovies => {
        setMovies(respMovies.results);
      })
      .catch(error => error.message)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div>
        <h2
          style={{
            textAlign: 'left',
            paddingTop: 20,
            paddingBottom: 20,
          }}
        >
          Trending today
        </h2>
        <ListMovies movies={movies} />
        {loading && <Loader />}
      </div>
    </>
  );
};
export default Home;
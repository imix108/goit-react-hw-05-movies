import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'service/serviceAPI';
import { AiOutlineFileImage } from 'react-icons/ai';
import { CastCard, CastContainer, P } from './Cast.styled';

const Cast = () => {
  const [moviesCast, setMoviesCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCast(movieId).then(respMovieCast => {
      setMoviesCast(respMovieCast.cast);
    });
  }, [movieId]);

  return (
    <CastContainer>
      {moviesCast.length > 0 ? (
        moviesCast.map(({ id, profile_path, character, name }) => (
          <CastCard key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
              />
            ) : (
              <AiOutlineFileImage size={200} />
            )}
            <P>
              <b>{name}</b>
            </P>
            <P>
              Character
              <br /> {character.substr(0, 9)}
            </P>
          </CastCard>
        ))
      ) : (
        <P> Sorry, no information</P>
      )}
    </CastContainer>
  );
};
export default Cast;
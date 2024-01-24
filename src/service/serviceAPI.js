import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '06d7b2a77c3489d1e99f70e4696501be';

export const fetchSearchMovies = async query => {
  try {
    const resp = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=1&language=en-US&include_adult=false`
    );
    return resp.data;
  } catch (error) {
    throw new Error(error.statusText);
  }
};

export const fetchTrending = async () => {
  try {
    const resp = await axios.get(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=1`
    );
    return resp.data;
  } catch (error) {
    throw new Error(error.statusText);
  }
};

export const fetchDetailsMovie = async id => {
  try {
    const resp = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&page=1&language=en-US`
    );
    return resp.data;
  } catch (error) {
    throw new Error(error.statusText);
  }
};

export const fetchCast = async id => {
  try {
    const resp = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return resp.data;
  } catch (error) {
    throw new Error(error.statusText);
  }
};

export const fetchReviews = async id => {
  try {
    const resp = await axios.get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
    );
    return resp.data;
  } catch (error) {
    throw new Error(error.statusText);
  }
};
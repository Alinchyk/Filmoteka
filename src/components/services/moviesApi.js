import axios from 'axios';
const API_KEY = '79f7e9d5eb5b406ae3795a32db0606aa';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async pageNumber => {
  try {
    const response = await axios.get(
      `/trending/movie/day?api_key=${API_KEY}&page=${pageNumber}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Oops... seems like an error occurred.');
  }
};

export const getMovieById = async movieId => {
  try {
    const data = await axios
      .get(`/movie/${movieId}?api_key=${API_KEY}`)
      .then(res => ({
        title: res.data.title,
        poster_path: res.data.poster_path,
        vote_average: res.data.vote_average,
        overview: res.data.overview,
        genres: res.data.genres,
      }));
    return data;
  } catch (error) {
    throw new Error('Error while fetching movie details');
  }
};

export const getCastInfo = async movieId => {
  try {
    const { data } = await axios.get(
      `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return data.cast;
  } catch (error) {
    throw new Error('Failed to fetch movie cast');
  }
};

export const getReviewsInfo = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/reviews?api_key=${API_KEY}&page=1`
    );
    return response.data.results;
  } catch (error) {
    throw new Error('Failed to fetch movie reviews');
  }
};

export const getMoviesByName = async (query, pageNumber) => {
  try {
    const { data } = await axios.get(
      `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${
        pageNumber ? pageNumber : 1
      }`
    );
    return data;
  } catch (error) {
    console.error('Error while searching movies:', error);
    throw error;
  }
};

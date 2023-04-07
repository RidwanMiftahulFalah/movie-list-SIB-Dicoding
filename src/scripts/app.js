import '../styles/app.css';
import './components/content-card.js';

const baseURL = 'https://api.themoviedb.org/3';
const token = 'api_key=fa0e3abf788c3e22db2c06dfea234a19';
const language = '&language=en';

const searchForm = document.querySelector('.search-form');
const contentContainer = document.querySelector('.content-container');

const topRatedResult = `${baseURL}/movie/top_rated?${token}${language}`;

const fetchGenres = async () => {
  try {
    const response = await fetch(`${baseURL}/genre/movie/list?${token}`);
    const json = await response.json();
    const genres = json.genres;

    return genres;
  } catch (error) {
    alert(error);
  }
};

const getMovieGenre = (movie, genres) => {
  let genreList = [];

  movie['genre_ids'].forEach((genreID) => {
    const genre = genres.find((genre) => genre.id === genreID);
    genreList.push(genre.name);
  });

  return genreList;
};

const fetchMovies = async (url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    const movieList = json.results;
    const availableGenres = await fetchGenres().then((data) => {
      return data;
    });

    contentContainer.innerHTML = '';

    if (movieList.length === 0) {
      contentContainer.innerHTML = '<h1 style="margin-inline: auto">Data not found!</h1>';      
    } else {
      movieList.forEach((movie) => {
        renderMovies(movie, getMovieGenre(movie, availableGenres));
      });     
    }
  } catch (error) {
    alert(error);
  }
};

const renderMovies = (movie, genreList) => {
  const contentCard = document.createElement('content-card');
  contentCard.movie = movie;
  contentCard.genreList = genreList;
  contentContainer.appendChild(contentCard);
};

fetchMovies(topRatedResult);

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchQuery = document.getElementById('search-input').value.trim();
  const searchResult = `${baseURL}/search/movie?${token}${language}&query=${searchQuery}`;

  fetchMovies(searchQuery ? searchResult : topRatedResult);
});

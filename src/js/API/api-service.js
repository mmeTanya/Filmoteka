import ACCESS from './api-authorization';
import apiAuthorization from './api-authorization';

const axios = require('axios').default;

axios.defaults.baseURL = ACCESS.BASE_URL;
axios.defaults.headers.common.Authorization = ACCESS.API_KEY;

export default class API {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
    this.movieId = '';
    this.totalResults = 0;
  }

  // Информация о трендовых фильмах

  async fetchMovieTrending() {
    try {
      const response = await axios.get(`/trending/movie/week?page=${this.page}`);
      const data = await response.data;
      this.totalResults = data.total_results;
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async fetchMoviePopular() {
    try {
      const response = await axios.get(`/movie/popular`);
      const data = await response.data;
      this.totalResults = data.total_results;
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  // Информация о жанрах
  async fetchMovieGenre() {
    try {
      const response = await axios.get('/genre/movie/list?');
      const data = await response.data;
      const result = await data.genres;
      return result;
      // console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  // Поисковый запрос
  async fetchMovieSearchQuery() {
    try {
      const response = await axios.get(
        `/search/movie?&query=${this.searchQuery}&page=${this.page}`,
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async fetchMovieFilterGenre(genreId, numberPage) {
    try {
      const response = await axios.get(
        `discover/movie?&page=${numberPage}&with_genres=${genreId}&sort_by=popularity.desc&include_adult=false`,
      );
      const data = await response.data;
      this.totalResults = data.total_results;
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  // Описание фильма по его id
  async fetchMovieDescription() {
    try {
      const response = await axios.get(`/movie/${this.movieId}?`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  //получаем трейлеры
  async fetchMovieTrailer() {
    try {
      const response = await axios.get(`/movie/${this.movieId}/videos?`);
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  }

  setQuery(newQuery) {
    this.searchQuery = newQuery;
  }

  setId(newId) {
    this.movieId = newId;
  }

  setPage(newPage) {
    this.page = newPage;
  }

  resetPage() {
    this.page = 1;
  }
}

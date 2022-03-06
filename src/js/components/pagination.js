import Pagination from 'tui-pagination';
import card from '../../templates/cardMovie';
import createCardData from '../data/create-card-data';
import getRefs from '../refs';
import { clearGallery } from '../components/get-popular';
import { searchBy } from '../components/search';
import {
  filteredBy,
  movieGenreId,
  saveArrMoviesToLocalStorage,
  getArrMoviesFromLocalStorage,
} from '../components/filter-genre';
import { changeStorage, currentStorage } from '../components/library';
import { startSpinner, stopSpinner } from './preloader';
import API from '../API/api-service';
const api = new API();
const axios = require('axios').default;

const { paginationBox, searchInput, galleryList } = getRefs();
let currentPage = 1;
let value = '';

let options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,

  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination(paginationBox, options);

function paginationSetTotalItems(number) {
  pagination.reset(number);
  pagination._paginate(1);
}

pagination.on('afterMove', event => {
  currentPage = event.page;
  console.log(currentPage);
  clearGallery();
  window.scroll(0, 0);
  paginationBox.classList.add('visually-hidden');
  if (currentStorage === 'Queue') {
    changeStorage('Watched', currentPage);
  } else if (currentStorage === 'Watched') {
    changeStorage('Watched', currentPage);
  } else if (searchBy === 'query') {
    value = searchInput.value;
    paginateForSearch(`/search/movie?&query=${value}&page=${currentPage}`);
  } else if (filteredBy === 'genre') {
    genreFilter();
  } else {
    console.log(searchBy);
    paginateForSearch(`/trending/movie/week?page=${currentPage}`);
  }
  return currentPage;
});

async function paginateForSearch(url) {
  startSpinner();
  try {
    const data = await axios.get(url);
    const result = await data.data;
    const results = await result.results;
    const markup = await createCardData(results);
    galleryList.insertAdjacentHTML('beforeend', card(markup));
    paginationBox.classList.remove('visually-hidden');
    stopSpinner();
  } catch (error) {
    console.error(error);
  }
}

async function genreFilter() {
  paginationBox.classList.add('visually-hidden');
  clearGallery();
  startSpinner();
  try {
    const result = await api.fetchMovieFilterGenre(movieGenreId, currentPage);
    const results = await result.results;
    const array = results.filter(({ genre_ids }) => genre_ids.includes(Number(movieGenreId)));
    saveArrMoviesToLocalStorage(array);
    const data = getArrMoviesFromLocalStorage();
    const markup = await createCardData(data);
    galleryList.insertAdjacentHTML('beforeend', card(markup));
    stopSpinner();
    paginationBox.classList.remove('visually-hidden');
  } catch (error) {
    console.error(error);
  }
}

export { pagination, paginationSetTotalItems };

import card from '../../templates/cardMovie';
import getRefs from '../refs';
import API from '../API/api-service';
import searchErr from './search-error';
import { startSpinner, stopSpinner } from './preloader';
import { paginationSetTotalItems } from '../components/pagination';
import createCardData from '../data/create-card-data';

const { searchForm, preloader, galleryList, paginationBox } = getRefs();
export let searchBy = '';
const api = new API();

searchForm.addEventListener('submit', onSearchInput);

export async function onSearchInput(e) {
  e.preventDefault();
  paginationBox.classList.add('visually-hidden');
  const value = e.currentTarget.elements.query.value;
  if (!value.trim()) return;
  initialReset();
  api.setQuery(value);
  startSpinner();

  try {
    const data = await api.fetchMovieSearchQuery();
    console.log(data);
    const result = await data.results;
    const markup = await createCardData(result);
    if (!result.length) {
      searchErr(true);
      stopSpinner();
      return;
    }
    if (data.total_results > 20) {
      paginationSetTotalItems(data.total_results);
      paginationBox.classList.remove('visually-hidden');
    }
    galleryList.insertAdjacentHTML('beforeend', card(markup));
    searchBy = 'query';
    stopSpinner();
  } catch (error) {
    console.error(error);
  }
}

function initialReset() {
  galleryList.innerHTML = '';
  searchErr(false);
  api.setPage(1);
}

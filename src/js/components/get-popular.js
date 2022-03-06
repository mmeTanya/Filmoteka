import API from '../API/api-service';
import getRefs from '../refs';
import card from '../../templates/cardMovie';
import createCardData from '../data/create-card-data';
import { startSpinner, stopSpinner } from './preloader';
import { paginationSetTotalItems } from '../components/pagination';

const { galleryList, paginationBox } = getRefs();

const api = new API();
let searchBy = '';

export async function createMarkup() {
  startSpinner();

  try {
    const result = await api.fetchMovieTrending();
    console.log(result);
    const results = await result.results;
    const markup = await createCardData(results);
    paginationSetTotalItems(result.total_results);
    paginationBox.classList.remove('visually-hidden');
    galleryList.insertAdjacentHTML('beforeend', card(markup));
    searchBy = 'popular';

    stopSpinner();
  } catch (error) {
    console.error(error);
  }
}

createMarkup();

export function clearGallery() {
  galleryList.innerHTML = '';
}

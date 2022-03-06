import getRefs from '../refs';
import card from '../../templates/cardMovie.hbs';
import { paginationSetTotalItems } from '../components/pagination';

export let currentStorage;
const {
  libraryLink,
  homeLink,
  btnWatched,
  btnQueue,
  header,
  headerForm,
  headerButton,
  galleryList,
  paginationBox,
  sliderContainer,
  sortWraper,
  mainContainer,
  filterGenre,
} = getRefs();

btnWatched.addEventListener('click', watchedStorage);
btnQueue.addEventListener('click', queuedStorage);
libraryLink.addEventListener('click', openLibrary);

function openLibrary() {
  filterGenre.classList.add('visually-hidden');
  galleryList.innerHTML = '';
  header.classList.replace('header__background-home', 'header__background-library');
  homeLink.classList.remove('active', 'header__home--current');
  libraryLink.classList.add('active', 'header__library--current');
  headerForm.classList.add('disabled');
  headerButton.classList.remove('disabled');
  sliderContainer.classList.add('disabled');
  sortWraper.classList.add('disabled');
  mainContainer.classList.add('enabled');
  btnQueue.classList.add('in-active');
  queuedStorage();
}
function watchedStorage() {
  paginationBox.classList.add('visually-hidden');
  changeStorage('Watched', 1);
  currentStorage = 'Watched';
  btnQueue.classList.remove('in-active');
  btnWatched.classList.add('in-active');
}

function queuedStorage() {
  paginationBox.classList.add('visually-hidden');
  changeStorage('Queue', 1);
  currentStorage = 'Queue';
  btnWatched.classList.remove('in-active');
  btnQueue.classList.add('in-active');
}

export function changeStorage(value, number) {
  galleryList.innerHTML = '';
  let items = JSON.parse(localStorage.getItem(value));
  if (!items) return;
  console.log(items.length);
  if (items.length > 20) {
    paginationSetTotalItems(items.length);
    paginationBox.classList.remove('visually-hidden');
  }

  let pageItems = items.slice(number * 20 - 20, number * 20);
  console.log(pageItems);
  pageItems.map(pageItem => {
    if (pageItem.genres_type.length > 2) {
      return pageItem.genres_type.splice(2, pageItem.genres_type.length - 2, ' Other');
    }
  });
  if (items.length) {
    mainContainer.classList.remove('enabled');
    galleryList.insertAdjacentHTML('beforeend', card(pageItems));
  }
}

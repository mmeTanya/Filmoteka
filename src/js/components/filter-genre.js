import API from '../API/api-service';
import getRefs from '../refs';
import card from '../../templates/cardMovie';
import createCardData from '../data/create-card-data';
import { startSpinner, stopSpinner } from './preloader';
import { paginationSetTotalItems } from '../components/pagination';

const { galleryList, paginationBox, filterGenre } = getRefs();

const api = new API();

const genres = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
];

const buttonsCreated = onCreateButtons(genres);
let genreBtn = document.querySelector('.genreBtn');

/* const genresArray = JSON.parse(genres);
console.log(genresArray); */

function onCreateButtons(genres) {
  return genres
    .map(genre => {
      return `
      
      <button type='button' data-name='${genre.id}' class="genreBtn">${genre.name}</button>
      `;
    })
    .join('');
}

filterGenre.insertAdjacentHTML('beforeend', buttonsCreated);

filterGenre.addEventListener('click', genreFilter);

export let filteredBy = '';
export let movieGenreId = '';

async function genreFilter(event) {
  paginationBox.classList.add('visually-hidden');
  clearGallery();
  startSpinner();
  try {
    movieGenreId = event.target.dataset.name;
    console.log(movieGenreId);
    const result = await api.fetchMovieFilterGenre(movieGenreId, 1);
    console.log(result);
    const results = await result.results;
    console.log(results);
    const array = results.filter(({ genre_ids }) => genre_ids.includes(Number(movieGenreId)));
    console.log(array);
    saveArrMoviesToLocalStorage(array);
    const data = getArrMoviesFromLocalStorage();
    console.log(data);
    const markup = await createCardData(data);

    galleryList.insertAdjacentHTML('beforeend', card(markup));
    if (result.total_results > 20) {
      if (result.total_results > 9980) {
        // на сайте написано, что макс количество страниц  меньше 500
        paginationSetTotalItems(9980);
      } else {
        paginationSetTotalItems(result.total_results);
      }
      paginationBox.classList.remove('visually-hidden');
    }
    stopSpinner();
    filteredBy = 'genre';
  } catch (error) {
    console.error(error);
  }
}

function clearGallery() {
  galleryList.innerHTML = '';
}

export function saveArrMoviesToLocalStorage(arrMovies) {
  localStorage.setItem('arr-current-movies', JSON.stringify(arrMovies));
}
export function getArrMoviesFromLocalStorage() {
  const savedArrMovies = localStorage.getItem('arr-current-movies');
  return JSON.parse(savedArrMovies);
}

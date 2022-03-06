import Glide from '@glidejs/glide';
import API from '../API/api-service';
import card from '../../templates/card-films-slider';
import createCardData from '../data/create-card-data';
import onClickOnCard from './modal';
import getRefs from '../refs';

const glide = new Glide('.glide', {
  type: 'slider',
  startAt: 3,
  perView: 8,
  autoplay: 2000,
  hoverpause: true,
  bound: true,
});

glide.mount();

const { sliderWraper } = getRefs();

const api = new API();

async function createMarkup() {
  try {
    const result = await api.fetchMoviePopular();
    console.log(result);
    const results = await result.results;
    const markup = await createCardData(results);
    sliderWraper.insertAdjacentHTML('beforeend', card(markup));
    console.log(markup);
  } catch (error) {
    console.error(error);
  }
}

createMarkup();

sliderWraper.addEventListener('click', onClickOnCard);

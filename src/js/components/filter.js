import API from '../API/api-service';
import getRefs from '../refs';
// import card from '../../templates/cardMovie';
// import { fetchMovieGenre } from '../API/api-service';

const api = new API();

const {
  decrBtn,
  incrBtn,
  releaseDecrBtn,
  releaseIncrBtn,
  nav,
  menuWrapper,
  menuBar,
  ratingItem,
  releaseItem,
} = getRefs();

decrBtn.addEventListener('click', sortDecrement);
incrBtn.addEventListener('click', sortIncrement);
releaseDecrBtn.addEventListener('click', sortReleaseDecrement);
releaseIncrBtn.addEventListener('click', sortReleaseIncrement);

const values = nav.children;

function sortDecrement() {
  for (let i = 0; i < values.length; i++) {
    for (let j = i; j < values.length; j++) {
      if (+values[i].getAttribute('data-rate') > +values[j].getAttribute('data-rate')) {
        let replacedNode = nav.replaceChild(values[j], values[i]);
        insertAfter(replacedNode, values[i]);
      }
    }
  }
  setTimeout(() => {
    menuWrapper.classList.remove('show');
    menuBar.style.marginLeft = '0px';
    releaseItem.style.display = 'none';
    ratingItem.style.display = 'none';
  }, 300);
}

function sortIncrement() {
  for (let i = 0; i < values.length; i++) {
    for (let j = i; j < values.length; j++) {
      if (+values[i].getAttribute('data-rate') < +values[j].getAttribute('data-rate')) {
        let replacedNode = nav.replaceChild(values[j], values[i]);
        insertAfter(replacedNode, values[i]);
      }
    }
  }
  setTimeout(() => {
    menuWrapper.classList.remove('show');
    menuBar.style.marginLeft = '0px';
    releaseItem.style.display = 'none';
    ratingItem.style.display = 'none';
  }, 300);
}
function sortReleaseDecrement() {
  for (let i = 0; i < values.length; i++) {
    for (let j = i; j < values.length; j++) {
      if (+values[i].getAttribute('data-release') > +values[j].getAttribute('data-release')) {
        let replacedNode = nav.replaceChild(values[j], values[i]);
        insertAfter(replacedNode, values[i]);
      }
    }
  }
  setTimeout(() => {
    menuWrapper.classList.remove('show');
    menuBar.style.marginLeft = '0px';
    releaseItem.style.display = 'none';
    ratingItem.style.display = 'none';
  }, 300);
}

function sortReleaseIncrement() {
  for (let i = 0; i < values.length; i++) {
    for (let j = i; j < values.length; j++) {
      if (+values[i].getAttribute('data-release') < +values[j].getAttribute('data-release')) {
        let replacedNode = nav.replaceChild(values[j], values[i]);
        insertAfter(replacedNode, values[i]);
      }
    }
  }
  setTimeout(() => {
    menuWrapper.classList.remove('show');
    menuBar.style.marginLeft = '0px';
    releaseItem.style.display = 'none';
    ratingItem.style.display = 'none';
  }, 300);
}

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

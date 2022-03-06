
import getRefs from '../refs';

const { nightModeBtn, lightIcon, darkIcon } = getRefs();

nightModeBtn.addEventListener('click', changeTheMode);

const elem = document.documentElement;

checkLocalStorage();
changeTheIcon();

function changeTheIcon() {
  if (elem.hasAttribute('data-theme')) {
    darkIcon.classList.add('is-hidden');
    lightIcon.classList.remove('is-hidden');
    nightModeBtn.classList.add('night-shadow');
  } else {
    darkIcon.classList.remove('is-hidden');
    lightIcon.classList.add('is-hidden');
    nightModeBtn.classList.remove('night-shadow');
  }
}

function changeTheMode() {
  if (elem.hasAttribute('data-theme')) {
    elem.removeAttribute('data-theme');
    localStorage.removeItem('theme');
    changeTheIcon();
  } else {
    elem.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    changeTheIcon();
  }
}

function checkLocalStorage() {
  if (localStorage.getItem('theme') !== null) {
    elem.setAttribute('data-theme', 'dark');
  }
}

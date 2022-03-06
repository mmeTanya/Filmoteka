const dropBtnSort = document.querySelector('.header__drop-btn');
const menuWrapperSort = document.querySelector('.header__wrapper');
const menuBar = document.querySelector('.header__menu-bar');

const ratingSort = document.querySelector('.header__rating-sort');
const releaseSort = document.querySelector('.header__release-sort');
const ratingItem = document.querySelector('.header__rating-item');
const releaseItem = document.querySelector('.header__release-item');
const ratingBackBtn = document.querySelector('.header__back-rating-btn');
const releaseBackBtn = document.querySelector('.header__back-release-btn');

dropBtnSort.addEventListener('click', showWrapperSort);
ratingSort.addEventListener('click', showRatingSort);
releaseSort.addEventListener('click', showReleaseSort);
ratingBackBtn.addEventListener('click', backToMainSort);
releaseBackBtn.addEventListener('click', backToMainSort);

function showWrapperSort() {
  menuWrapperSort.classList.toggle('show');
}

function showRatingSort() {
  menuBar.style.marginLeft = '-200px';

  setTimeout(() => {
    ratingItem.style.display = 'block';
  }, 100);
}

function showReleaseSort() {
  menuBar.style.marginLeft = '-200px';
  setTimeout(() => {
    releaseItem.style.display = 'block';
  }, 100);
}

function backToMainSort() {
  menuBar.style.marginLeft = '0px';
  setTimeout(() => {
    releaseItem.style.display = 'none';
    ratingItem.style.display = 'none';
  }, 100);
}

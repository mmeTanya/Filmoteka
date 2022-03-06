let showGenresBtn = document.querySelector('.filterDrop');
let genreBtn = document.querySelector('.genreBtn');
let GenreBtns = document.querySelector('.filter-genre');

showGenresBtn.addEventListener('click', showGenres);
GenreBtns.addEventListener('click', hideGenres);

function showGenres() {
  GenreBtns.classList.toggle('hideGenre');
}

function hideGenres() {
  GenreBtns.classList.add('hideGenre');
}

let library = document.querySelector('#library-link');
library.addEventListener('click', removeGenres);
function removeGenres() {
  showGenresBtn.classList.add('hideGenre');
}
export default function getRefs() {
  return {
    // --- Header ---
    textError: document.querySelector('.header__search-error'),
    btnWatched: document.querySelector('#btn-watched'), //
    btnQueue: document.querySelector('#btn-queue'), //
    libraryLink: document.querySelector('#library-link'),
    homeLink: document.querySelector('#home-link'),
    header: document.querySelector('#header'),
    headerForm: document.querySelector('.header__form'),
    searchForm: document.querySelector('.header__search-form'),
    searchInput: document.querySelector('.header__search-input'),
    headerButton: document.querySelector('.header__button'),
    sortWraper: document.querySelector('.header__drop-btn'),
    decrBtn: document.querySelector('.header__increase-btn'),
    incrBtn: document.querySelector('.header__decrease-btn'),
    releaseDecrBtn: document.querySelector('.header__asc-btn'),
    releaseIncrBtn: document.querySelector('.header__desc-btn'),
    nav: document.querySelector('#nav'),
    menuWrapper: document.querySelector('.header__wrapper'),
    menuBar: document.querySelector('.header__menu-bar'),
    ratingItem: document.querySelector('.header__rating-item'),
    releaseItem: document.querySelector('.header__release-item'),
    // --- GALLERY ---
    mainContainer: document.querySelector('.main'),
    sliderTitle: document.querySelector('.slider-title'),
    sliderContainer: document.querySelector('.slider-wrapper'),
    sliderWraper: document.querySelector('.js-slider-container'),
    filterGenre: document.querySelector('.filter-genre'),
    galleryList: document.querySelector('.gallery__list'),
    // --- Modal ---
    modalСardRef: document.querySelector('.modal-form__card'), //modal.html
    overlayRef: document.querySelector('.overlay'), //modal.html
    overlayBackgroundRef: document.querySelector('.overlay__bg'), //modal.html
    clsBtnRef: document.querySelector('.modal-form__close-btn'), //modal.html
    // --- Pages (pagination) ---
    paginationBox: document.getElementById('tui-pagination-container'),
    // ---SCROLL-TOP---
    topBtn: document.querySelector('.scroll-top'),
    // ---PRELOADER---
    preloader: document.querySelector('.preloader'),
    // ---NIGHT MODE---
    nightModeBtn: document.querySelector('.night-mode-btn'),
    lightIcon: document.querySelector('.fa-sun'),
    darkIcon: document.querySelector('.fa-moon'),
    // --- Footer ---
    openTeamModal: document.querySelector('.footer-open-modal'),
    teamModal: document.querySelector('.team-modal'),
    btnCloseModal: document.querySelector('.close'),
  };
}

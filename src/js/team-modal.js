import teamModalTpl from '../templates/teamModal.hbs';
import teamData from './data/team';
import getRefs from './refs';

const { openTeamModal, teamModal, btnCloseModal } = getRefs();

openTeamModal.addEventListener('click', e => {
  e.preventDefault();

  const teamModalMarkup = teamModalTpl(teamData);
  teamModal.innerHTML = teamModalMarkup;

  const btnCloseModal = document.querySelector('.close');
  teamModal.classList.remove('is-hidden');
  teamModal.classList.add('is-open');

  btnCloseModal.addEventListener('click', () => {
    teamModal.classList.remove('is-open');
    teamModal.classList.add('is-hidden');
  });
});








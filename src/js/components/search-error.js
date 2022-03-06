import getRefs from '../refs';
const { textError } = getRefs();

export default function (isTrue) {
  if (isTrue) {
    textError.classList.remove('is-hidden');

    return;
  }
  textError.classList.add('is-hidden');
}

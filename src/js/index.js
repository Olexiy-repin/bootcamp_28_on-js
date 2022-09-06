import logoImg from '../images/logo.png';

console.log(logoImg);

const logoEl = document.querySelector('.js-logo');

const logoImeEl = document.createElement('img');
logoImeEl.src = `${logoImg}`;
logoImeEl.alt = 'logotype';

logoEl.append(logoImeEl);

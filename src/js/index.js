import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.min.js';

// import createPageHeader from '../templates/header.hbs';
// import pathToSprite from '../images/sprite.svg';

// document.body.insertAdjacentHTML('afterbegin', createPageHeader({ spriteUrl: pathToSprite }));

// document.documentElement.style.setProperty('--accent-color', 'teal');

//? Що код виведе до консолі?
// setTimeout(() => {
//   console.log('From setTimeout');
// }, 0);

// const promise = new Promise((resolve, reject) => {
//   console.log('From promise');

//   resolve();
// });

// promise.then(() => {
//   console.log('From then');
// });

// console.log('The end');

//? Що код виведе до консолі?
// console.log(1);

// setTimeout(() => console.log(2), 0);

// Promise.resolve().then(() => console.log(3));

// Promise.resolve().then(() => setTimeout(() => console.log(4), 0));

// Promise.resolve().then(() => console.log(5));

// setTimeout(() => console.log(6), 0);

// console.log(7);

//? Послідовність виконання асинхронного коду в event loop
// setTimeout(() => {
//   let counter = 0;

//   for (let i = 0; i < 1e10; i += 1) {
//     counter += 1;
//   }

//   console.log('Hello from setTimeout');

//   console.log(counter);
// }, 0);

// Promise.resolve('Hello from then').then(str => {
//   let counter = 0;

//   for (let i = 0; i < 1e10; i += 1) {
//     counter += 1;
//   }

//   console.log(str);

//   console.log(counter);
// });

// document.body.innerHTML = '<h1>Hello</h1>';

// for (let i = 0; i < 1e4; i += 1) {
//   console.log(i);
// }

$('.slick-slider').slick({
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  dotsClass: 'slick-dots',
  prevArrow: '<button><</button>',
  nextArrow: '<button>></button>',
});

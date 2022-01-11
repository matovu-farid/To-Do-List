import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import { listHtml } from './modules/list_html';

const array = [
  {
    description: 'Wash clothes',
    completed: false,
    index: 0,
  },
  {
    description: 'Wash dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'Wash car',
    completed: false,
    index: 0,
  },
];

const listMarkup = document.querySelector('.to-do-list');

const populateToDos = () => {
  console.log(listMarkup);
  array.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.classList.add(...['side-padding', 'to-do']);

    listItem.innerHTML = listHtml(item);
    listMarkup.appendChild(listItem);
  });
};

window.addEventListener('load', () => populateToDos());
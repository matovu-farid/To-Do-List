import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

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

const listHtml = (item) => ((item.completed) ? `
        <label >
            <input type="checkbox" name="x" checked>
            ${item.description}
        </label>
        <i class="fas fa-ellipsis-v icon"></i>
    ` : `
    <label >
        <input type="checkbox" name="x" >
        ${item.description}
    </label>
    <i class="fas fa-ellipsis-v icon"></i>
`);

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
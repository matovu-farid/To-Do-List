import ListItemMarkup from './list_html';

const listMarkup = document.querySelector('.to-do-list');
export default class DisplayList {
  constructor(listmanager) {
    this.listmanager = listmanager;
  }

  #clear = () => {
    listMarkup.innerHTML = '';
  }

  #clearSelect = () => {
    const lis = document.querySelectorAll('li');
    lis.forEach((li) => {
      li.className = 'to-do';
    });
  };

  #populateToDos = () => {
    const { array } = this.listmanager;
    array.forEach((item) => {
      const markup = new ListItemMarkup(item, this.listmanager);
      const listItem = markup.createListItem();
      listMarkup.appendChild(listItem);
    });
    setTimeout(this.#clearSelect, 200);
  };

 render=() => {
   this.#clear();
   this.#populateToDos();
 }
}

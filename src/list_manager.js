import LocalStorageManager from './local_storage';

import ListItemMarkup from './list_html';

const listMarkup = document.querySelector('.to-do-list');

export default class ListManager {
  constructor() {
    this.storage = new LocalStorageManager();
    this.array = this.storage.retrieve();
    this.render();
  }

  #clear = () => {
    listMarkup.innerHTML = '';
  };

  #clearSelect = () => {
    const lis = document.querySelectorAll('li');
    lis.forEach((li) => {
      li.className = 'to-do';
    });
  };

  #populateToDos = () => {
    this.array.forEach((item) => {
      const markup = new ListItemMarkup(item, this);
      const listItem = markup.createListItem();
      listMarkup.appendChild(listItem);
    });
    setTimeout(this.#clearSelect, 200);
  };

  render = () => {
    this.#clear();
    this.#populateToDos();
  };

  remove = (item) => {
    this.array.splice(item.index - 1, 1);

    this.#reIndex();
    this.storage.save(this.array);
    this.render();
  };

  #reIndex = () => {
    this.array.forEach((item, index) => {
      item.index = index + 1;
    });
    const inputs = document.querySelectorAll('.input');
    inputs.forEach((input, index) => {
      input.id = `text-${index + 1}`;
    });
    const listItems = document.querySelectorAll('.to-do');
    listItems.forEach((listItem, index) => {
      listItem.id = `task-${index + 1}`;
    });
  };

  addTask = (taskInput) => {
    if (taskInput.value !== '') {
      const item = {
        description: taskInput.value,
        completed: false,
        index: this.array.length + 1,
      };
      this.array.push(item);
      taskInput.value = '';
      this.storage.save(this.array);

      this.render(this.array);
    }
  };

  edit = (item) => {
    this.array[item.index - 1] = item;
    this.storage.save(this.array);
    this.render();
  };

  clearCompleted = () => {
    this.array = this.array.filter((task) => task.completed === false);
    this.#reIndex();
    this.storage.save(this.array);
    this.render(this.array);
  };
}

export const listManager = new ListManager();

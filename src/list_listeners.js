export default class ListListeners {
  constructor(listManager) {
    this.listManager = listManager;
    this.array = listManager.array;
  }

  #addClearListener = () => {
    const clearButton = document.querySelector('#clear-completed');
    clearButton.addEventListener('click', () => {
      this.listManager.clearCompleted();
    });
  };

  #addTaskInputListener = () => {
    const taskInput = document.querySelector('#task-input');
    taskInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        this.listManager.addTask(taskInput);
      }
    });
  };

  attachListeners = () => {
    this.#addClearListener();
    this.#addTaskInputListener();
  };
}

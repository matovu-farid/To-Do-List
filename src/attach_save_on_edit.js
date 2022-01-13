export default class AttachSaveOnEdit {
  constructor(item, listManager) {
    this.timeOut = null;

    this.item = item;
    this.listManager = listManager;
  }

    #edit=() => {
      const textarea = document.querySelector(`#text-${this.item.index}`);
      this.item.description = textarea.value;
      this.listManager.edit(this.item);
    }

    #attachSaveOnEdit = () => {
      const textarea = document.querySelector(`#text-${this.item.index}`);

      textarea.addEventListener('keyup', () => {
        clearTimeout(this.timeOut);
        this.timeOut = setTimeout(() => {
          this.#edit();
        }, 2000);
      });
    };

      #attachSaveOnEditEnter = () => {
        const textarea = document.querySelector(`#text-${this.item.index}`);
        textarea.addEventListener('keydown', (event) => {
          if (event.key === 'Enter') {
            this.#edit();
          }
        });
      };

    attachSave=() => {
      this.#attachSaveOnEdit();
      this.#attachSaveOnEditEnter();
    }
}

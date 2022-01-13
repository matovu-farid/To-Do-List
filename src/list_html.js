import AttachSaveOnEdit from './attach_save_on_edit';

export default class ListItemMarkup {
  constructor(item, listManager) {
    this.item = item;
    this.manager = listManager;
  }

    #listHtml = (item) => `
        <label  class="list-label">
            <div class="place-holder centered-box"></div>
            <textarea readonly rows=1 id="text-${item.index}"  class="input">${item.description}</textarea>     
        </label>
      `;

     #createDeleteIcon = () => {
       const deleteIcon = document.createElement('div');
       deleteIcon.innerHTML = '<i class="far fa-trash-alt icon" aria-hidden="true"></i>';
       deleteIcon.addEventListener('click', () => {
         this.manager.remove(this.item);
       });
       return deleteIcon;
     };

     #addSelect = (item) => {
       const li = document.querySelector(`#task-${item.index}`);
       li.classList.add('select');
     };

     #createMoreIcon = () => {
       const icon = document.createElement('div');
       icon.innerHTML = `<i  class="fas fa-ellipsis-v  edit-${this.item.index} icon"></i>`;
       icon.addEventListener('click', () => {
         const textarea = document.querySelector(`#text-${this.item.index}`);

         if (textarea) {
           const attachSaveOnEdit = new AttachSaveOnEdit(this.item, this.manager);
           attachSaveOnEdit.attachSave();
           textarea.removeAttribute('readonly');
           icon.innerHTML = '';
           icon.appendChild(this.#createDeleteIcon());
           this.#addSelect(this.item);
         }
       });
       return icon;
     };

 #createCheckBox = (item) => {
   const checkBoxDiv = document.createElement('div');
   checkBoxDiv.innerHTML = item.completed
     ? '<input type="checkbox" checked>'
     : '<input type="checkbox" >';
   const checkBox = checkBoxDiv.querySelector('input');
   checkBox.addEventListener('click', () => {
     item.completed = !item.completed;
     this.manager.edit(item);
   });
   return checkBoxDiv;
 };

     createListItem = () => {
       const li = document.createElement('li');

       li.classList.add(...['side-padding', 'to-do']);
       li.id = `task-${this.item.index}`;
       li.innerHTML = this.#listHtml(this.item);
       const placeHolder = li.querySelector('label > div');
       placeHolder.appendChild(this.#createCheckBox(this.item));
       li.appendChild(this.#createMoreIcon());
       return li;
     };
}
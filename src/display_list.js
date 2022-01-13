import {ListItemMarkup} from './list_html'


const listMarkup = document.querySelector('.to-do-list');
export class DisplayList {
  constructor(listmanager) {
    this.listmanager = listmanager;
    
  }

  #clear = () => {
    listMarkup.innerHTML = '';
  }
  #clearSelect = () => {
    const lis = document.querySelectorAll(`li`);
    lis.forEach(li=>{
      li.className = 'to-do'
    })
  };
  #populateToDos = () => {
    const array = this.listmanager.array
    array.forEach((item)=>{
      let markup = new ListItemMarkup(item,this.listmanager);
      let listItem= markup.createListItem()
      listMarkup.appendChild(listItem);
    });
    setTimeout(this.#clearSelect,200)

      
    
  };

 render=() => {
   this.#clear();
   this.#populateToDos();
 }
}


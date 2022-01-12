import {listMarkup,createListItem} from './list_html';



export  class DisplayList {
    constructor(aray){
        
    }

  #clear = ()=>{
     listMarkup.innerHTML = ''
 }

  #populateToDos = (array) => {
 
   array.forEach((item) => {
    
     listMarkup.appendChild(createListItem(item));
   });
 };
 
 render=(array)=>{
     this.#clear();
     this.#populateToDos(array)
 }
}
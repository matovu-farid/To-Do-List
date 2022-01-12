
import {toggleSelect, attachSaveOnEdit, attachSaveOnEditEnter, edit, remove} from './add_edit_and_remove'

export const listMarkup = document.querySelector('.to-do-list');



export const listHtml = (item) => `
        <label  class="list-label">
            <div class="place-holder centered-box"></div>
            <textarea readonly rows=1 id="text-${item.index}"  class="input">${item.description}</textarea>     
        </label>
      `
    ;

    const createCheckBox = (item)=>{
        const checkBoxDiv = document.createElement('div');
        checkBoxDiv.innerHTML = item.completed?
        `<input type="checkbox" checked>`:
        `<input type="checkbox" >`;
        const checkBox = checkBoxDiv.querySelector('input');
        checkBox.addEventListener('click',()=>{
            item.completed = !item.completed
            edit(item)          
        })
        return checkBoxDiv;
    }


    const createDeleteIcon = (item)=>{
        const deleteIcon = document.createElement('div');
        deleteIcon.innerHTML = `<i class="far fa-trash-alt icon" aria-hidden="true"></i>`;
        deleteIcon.addEventListener('click',()=>{
            remove(item)
        });
        return deleteIcon
    }

    const createMoreIcon=(item)=>{
        const icon = document.createElement('div');
        
        icon.innerHTML = `<i  class="fas fa-ellipsis-v  edit-${item.index} icon"></i>` ;
        icon.addEventListener('click',()=>{
            const textarea= document.querySelector(`#text-${item.index}`);
            attachSaveOnEdit(textarea,item);
            attachSaveOnEditEnter(textarea,item)
            if(textarea){

                textarea.removeAttribute('readonly');
                icon.innerHTML = ''
                icon.appendChild(createDeleteIcon(item))
                toggleSelect(item)
            }
        })
        return icon;
    }

    export const createListItem = (item)=>{
        const li = document.createElement('li');
        li.classList.add(...['side-padding', 'to-do']);
        li.id = `task-${item.index}`
        li.innerHTML = listHtml(item);
        const placeHolder = li.querySelector('label > div')
        placeHolder.appendChild(createCheckBox(item))
        li.appendChild(createMoreIcon(item))
        return li;
    }
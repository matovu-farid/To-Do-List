
import {DisplayList} from './display_list';
import {storage} from './local_storage';


export let array = storage.retrieve();
 

 
const displayList = new DisplayList();
displayList.render(array);



export const edit = (item)=>{
    array[item.index-1] = item;
    storage.save(array)
    displayList.render(array);
}

let timeOut = null;
export const toggleSelect=(item)=>{
  const li = document.querySelector(`#task-${item.index}`);
  li.classList.toggle('selected')
}
// export const removeSelect=(item)=>{
//   const li = document.querySelector(`#task-${item.index}`);
//   console.log('li',li)
//   li.classList.toggle('selected')
// }
export const attachSaveOnEdit = (inputElement,item)=>{
  inputElement.addEventListener('keyup',()=>{

    clearTimeout(timeOut);
    timeOut = setTimeout(()=>{
     // removeSelect(item);
      item.description = inputElement.value;
      edit(item);
      
    },2000)
    
  })

}


export const attachSaveOnEditEnter = (inputElement,item)=>{
  inputElement.addEventListener('keydown',(event)=>{
    if(event.key==='Enter'){
      item.description = inputElement.value;
      edit(item);
     // removeSelect(item)
    }


  })

}


const reIndex =()=>{
  array.forEach((item,index)=>{
    item.index = index+1;
})
}

const clearCompleted = ()=>{
 array = array.filter(task=>task.completed===false)
 reIndex()
 storage.save(array)
 displayList.render(array)
}
const clearButton = document.querySelector('#clear-completed')
clearButton.addEventListener('click',()=>{
  clearCompleted()
})



export const remove = (item)=>{
   array = array.filter(itemGot=> itemGot.index!==item.index);
   displayList.render(array)
   reIndex()
   storage.save(array)
  
  
     
}
  
  
   export const addTask = (taskInput)=>{
       const item = {
        description: taskInput.value,
        completed: false,
        index: array.length+1,
      };
        array.push(item);
        taskInput.value = '';
        storage.save(array)

        displayList.render(array)
        
     
    }

const taskInput = document.querySelector('#task-input');

taskInput.addEventListener('keydown',(event)=>{
 
    if(event.key==="Enter"){
        addTask(taskInput);     
   };
})

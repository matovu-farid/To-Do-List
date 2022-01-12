
import {DisplayList} from './display_list';
export let array = [
    {
      description: 'Wash clothes',
      completed: false,
      index: 1,
    },
    {
      description: 'Wash dishes',
      completed: false,
      index: 2,
    },
    {
      description: 'Wash car',
      completed: false,
      index: 3,
    },
    
  ];
 

 
const displayList = new DisplayList();
displayList.render(array);



export const edit = (item)=>{
    array[item.index-1] = item;
    displayList.render(array);
    console.log(array)
}

let timeOut = null;
export const attachSaveOnEdit = (inputElement,item)=>{
  inputElement.addEventListener('keyup',()=>{

    clearTimeout(timeOut);
    timeOut = setTimeout(()=>{
      item.description = inputElement.value;
      edit(item);
      console.log(array)
    },1000)
  })

}

const clearCompleted = ()=>{
 array = array.filter(task=>task.completed===false)
 displayList.render(array)
}
const clearButton = document.querySelector('#clear-completed')
clearButton.addEventListener('click',()=>{
  clearCompleted()
})

export const remove = (item)=>{
   array = array.filter(itemGot=> itemGot.index!==item.index);
   array.forEach((item,index)=>{
       item.index = index;
   })
  
  
    displayList.render(array)
}
  
  
   export const addTask = (taskInput)=>{
       const item = {
        description: taskInput.value,
        completed: false,
        index: array.length+1,
      };
      array.push(item)
        taskInput.value = '';

        displayList.render(array)
        
     
    }

const taskInput = document.querySelector('#task-input');

taskInput.addEventListener('keydown',(event)=>{
 
    if(event.key==="Enter"){
        addTask(taskInput);     
   };
})

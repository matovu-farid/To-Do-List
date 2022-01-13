import ListManager from './list_manager';

const listManager = new ListManager();

export const editTask = (task) => listManager.edit(task);
export const removeTask = (task) => listManager.remove(task);
export const addTask = (taskInput) => listManager.addTask(taskInput);
export const clearTasks = () => listManager.clearCompleted();
export const getArray = () => listManager.array;
import { listManager } from './list_manager';

export const editTask = (task) => listManager.edit(task);
export const removeTask = (task) => listManager.remove(task);
export const addTask = (taskInput) => listManager.addTask(taskInput);
export const clearTasks = () => listManager.clearCompleted();
export const getArray = () => listManager.array;
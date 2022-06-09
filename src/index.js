import './style.css';
import displayTodos from '../modules/displayTodos.js';
import clearAllTasks from '../modules/removeAll.js';
import { addItem } from '../modules/addEditRemove.js';

window.addEventListener('load', () => {
  displayTodos();
  clearAllTasks();
});

const newTodoForm = document.querySelector('#new-todo-form');
newTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  addItem(e.target.elements.content.value);

  // Reset the form
  e.target.reset();
});

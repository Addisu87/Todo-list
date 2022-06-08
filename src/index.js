import './style.css';
import DisplayTodos from '../modules/displayTodos.js';
import clearAllTasks from '../modules/removeAll.js';
import addItem from '../modules/addItem.js';

window.addEventListener('load', () => {
  const newTodoForm = document.querySelector('#new-todo-form');
  newTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    addItem(e.target.elements.content.value);

    // Reset the form
    e.target.reset();
  });

  DisplayTodos();
  clearAllTasks();
});

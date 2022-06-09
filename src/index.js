import './style.css';
import displayTodos from '../modules/displayTodos.js';
import clearAllTasks from '../modules/removeAll.js';
import showAlert from '../modules/showAlert.js';
import { addItem } from '../modules/addEditDelete.js';

window.addEventListener('load', () => {
  displayTodos();
  clearAllTasks();
});

const newTodoForm = document.querySelector('#new-todo-form');
newTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const previousTodos = JSON.parse(localStorage.getItem('todos')) || [];
  const content = e.target.elements.content.value;

  // Validate
  if (content === '') {
    showAlert('Please fill in the field', 'danger');
  } else {
    const todos = addItem(content, previousTodos);
    localStorage.setItem('todos', JSON.stringify(todos));
    displayTodos();

    showAlert('To-do list added', 'success');
  }

  // Reset the form
  e.target.reset();
});

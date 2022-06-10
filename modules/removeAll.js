import displayTodos from './displayTodos.js';
import { removeAllDone } from './addEditDelete.js';

const clearAllTasks = () => {
  const clearTasks = document.querySelector('#completed');
  clearTasks.innerHTML = '';

  const removeAll = document.createElement('button');
  removeAll.classList.add('completed');
  removeAll.innerHTML = 'Remove All';

  clearTasks.appendChild(removeAll);

  removeAll.addEventListener('click', () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const notRemoved = removeAllDone(todos);
    localStorage.setItem('todos', JSON.stringify(notRemoved));
    displayTodos();
  });
};

export default clearAllTasks;

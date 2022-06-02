import '../src/style.css';
import DisplayTodos from './displayTodos.js';

const clearAllTasks = () => {
  const clearTasks = document.querySelector('#clear-tasks');
  clearTasks.innerHTML = '';

  const removeAll = document.createElement('button');
  removeAll.classList.add('remove-all');
  removeAll.innerHTML = 'Remove All';

  clearTasks.appendChild(removeAll);

  removeAll.addEventListener('click', () => {
    localStorage.clear();
    DisplayTodos();
  });
};

export default clearAllTasks;

import '../src/style.css';
import DisplayTodos from './displayTodos.js';

const clearAllTasks = () => {
  const clearTasks = document.querySelector('#completed');
  clearTasks.innerHTML = '';

  const removeAll = document.createElement('button');
  removeAll.classList.add('completed');
  removeAll.innerHTML = 'Remove All';

  clearTasks.appendChild(removeAll);

  removeAll.addEventListener('click', () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const notRemoved = todos.filter((todo) => !todo.done);
    localStorage.clear('todos');
    localStorage.setItem('todos', JSON.stringify(notRemoved));
    DisplayTodos();
  });
};

export default clearAllTasks;

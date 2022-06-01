import './style.css';
import DisplayTodos from './displayTodos.js';

window.addEventListener('load', () => {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const newTodoForm = document.querySelector('#new-todo-form');

  newTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const todo = {
      content: e.target.elements.content.value,
      done: false,
      createdAt: new Date().getTime(),
    };

    todos.push(todo);

    localStorage.setItem('todos', JSON.stringify(todos));

    // Reset the form
    e.target.reset();

    DisplayTodos();
  });

  DisplayTodos();
});

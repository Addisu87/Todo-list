import '../src/style.css';
import { editItem, deleteItem } from './addEditRemove.js';

const DisplayTodos = () => {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];

  const todoList = document.querySelector('#todo-list');
  todoList.innerHTML = '';

  todos.forEach((todo, i) => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    const label = document.createElement('label');

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.checked = todo.done;
    label.appendChild(checkBox);

    const span = document.createElement('span');
    span.classList.add('bubble');
    label.appendChild(span);

    const content = document.createElement('div');
    content.classList.add('todo-content');
    content.innerHTML = `<input type="text" id="${i}input" value="${todo.content}" readonly>`;

    const actions = document.createElement('div');
    actions.classList.add('actions');

    const edit = document.createElement('button');
    edit.classList.add('edit');
    edit.innerHTML = 'Edit';
    actions.appendChild(edit);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.innerHTML = 'Delete';
    actions.appendChild(deleteButton);

    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(actions);

    todoList.appendChild(todoItem);

    if (todo.done) {
      todoItem.classList.add('done');
    }

    checkBox.addEventListener('change', (e) => {
      todo.done = e.target.checked;
      localStorage.setItem('todos', JSON.stringify(todos));

      if (todo.done) {
        todoItem.classList.add('done');
      } else {
        todoItem.classList.remove('done');
      }
      DisplayTodos();
    });

    edit.addEventListener('click', () => {
      editItem(i);
    });

    deleteButton.addEventListener('click', () => {
      deleteItem(i);
    });
    DisplayTodos();
  });
};

export default DisplayTodos;

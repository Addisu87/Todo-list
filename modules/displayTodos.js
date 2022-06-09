import { editItem, deleteItem } from './addEditDelete.js';

const displayTodos = () => {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const todoList = document.querySelector('#todo-list');
  todoList.innerHTML = '';

  todos
    .sort((a, b) => a.index - b.index)
    .forEach((todo, i) => {
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
        displayTodos();
      });

      edit.addEventListener('click', () => {
        const input = document.getElementById(`${i}input`);
        input.removeAttribute('readonly');
        input.focus();
        input.addEventListener('blur', (e) => {
          input.setAttribute('readonly', true);
          editItem(i, e);
          displayTodos();
        });
      });

      deleteButton.addEventListener('click', () => {
        const newTodos = deleteItem(i, todos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
        displayTodos();
      });
    });
};

export default displayTodos;

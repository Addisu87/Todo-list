import '../src/style.css';

const DisplayTodos = () => {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];

  const todoList = document.querySelector('#todo-list');
  todoList.innerHTML = '';

  todos
    .sort((a, b) => a.index - b.index)
    .forEach((todo) => {
      const todoItem = document.createElement('div');
      todoItem.classList.add('todo-item');

      const label = document.createElement('label');

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.checked = todo.done;
      label.appendChild(input);

      const span = document.createElement('span');
      span.classList.add('bubble');
      label.appendChild(span);

      const content = document.createElement('div');
      content.classList.add('todo-content');
      content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;

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

      input.addEventListener('change', (e) => {
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
        const input = content.querySelector('input');
        input.removeAttribute('readonly');
        input.focus();
        input.addEventListener('blur', (e) => {
          input.setAttribute('readonly', true);
          todo.content = e.target.value;
          localStorage.setItem('todos', JSON.stringify(todos));
          DisplayTodos();
        });
      });

      deleteButton.addEventListener('click', () => {
        todos = todos.filter((task) => task !== todo);
        localStorage.setItem('todos', JSON.stringify(todos));
        DisplayTodos();
      });
    });
};

export default DisplayTodos;

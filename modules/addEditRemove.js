import '../src/style.css';
import showAlert from './showAlert.js';

const addItem = (content) => {
  const todos = (JSON.parse(localStorage.getItem('todos')) || []).filter(
    (todo) => todo.content !== ''
  );

  const todo = {
    content,
    done: false,
    createdAt: new Date().getTime()
  };

  // Validate
  if (todo.content === '') {
    showAlert('Please fill in the field', 'danger');
  } else {
    showAlert('To-do list added', 'success');
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }
};

const editItem = (i) => {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const todo = todos.filter((_, index) => index === i);

  const input = document.getElementById(`${i}input`);

  input.removeAttribute('readonly');
  input.focus();
  input.addEventListener('blur', (e) => {
    todo.content = e.target.attributes.getNamedItem('id').value;
    input.setAttribute('readonly', true);

    const newTodos = todos.map((task, index) => {
      if (index === i) {
        return todo;
      }
      return task;
    });

    localStorage.setItem('todos', JSON.stringify(newTodos));
  });
};

const deleteItem = (i) => {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos = todos.filter((_, index) => index !== i);
  localStorage.setItem('todos', JSON.stringify(todos));
};

export { addItem, editItem, deleteItem };

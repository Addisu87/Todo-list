import '../src/style.css';
import showAlert from './showAlert.js';

const addItem = (content) => {
  const todos = (JSON.parse(localStorage.getItem('todos')) || []).filter(
    (todo) => todo.content !== '',
  );

  const todo = {
    content,
    done: false,
    createdAt: new Date().getTime(),
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

export default addItem;

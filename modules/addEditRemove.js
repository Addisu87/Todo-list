import '../src/style.css';
import showAlert from './showAlert.js';
import displayTodos from './displayTodos.js';

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
    displayTodos();
  }
};

const editItem = (i, e) => {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const task = todos.find((index) => index === i);
  const newContent = e.target.value;
  task.content = newContent;
  todos[i] = task;
  localStorage.setItem('todos', JSON.stringify(todos));
};

const deleteItem = (i) => {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos = todos.filter((_, index) => index !== i);
  localStorage.setItem('todos', JSON.stringify(todos));
};

export { addItem, editItem, deleteItem };

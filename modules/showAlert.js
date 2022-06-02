import '../src/style.css';

const showAlert = (message, className) => {
  const div = document.createElement('div');
  div.className = `alert alert-${className}`;
  div.appendChild(document.createTextNode(message));
  const form = document.querySelector('#new-todo-form');
  const list = document.querySelector('#content');
  form.insertBefore(div, list);

  // Vanish in 2 seconds
  setTimeout(() => document.querySelector('.alert').remove(), 2000);
};

export default showAlert;

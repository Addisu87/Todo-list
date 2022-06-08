import '../src/style.css';

const deleteItem = (i) => {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos = todos.filter((_, index) => index !== i);
  localStorage.setItem('todos', JSON.stringify(todos));
};

export default deleteItem;

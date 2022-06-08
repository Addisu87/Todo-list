import '../src/style.css';

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

export default editItem;

const addItem = (content, todos) => {
  const newTodos = todos.filter((todo) => todo.content !== '');

  const todo = {
    content,
    done: false,
    createdAt: new Date().getTime(),
  };

  newTodos.push(todo);

  return newTodos;
};

const editItem = (i, e) => {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const task = todos.find((index) => index === i);
  const newContent = e.target.value;
  task.content = newContent;
  todos[i] = task;
  localStorage.setItem('todos', JSON.stringify(todos));
};

const deleteItem = (i, todos) => todos.filter((_, index) => index !== i);

export { addItem, editItem, deleteItem };

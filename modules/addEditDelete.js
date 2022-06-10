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

const editItem = (todos, itemIndex, content) => {
  const newTodos = todos;
  const task = newTodos.find((_, index) => index === itemIndex);
  task.content = content;
  newTodos[itemIndex] = task;
  return newTodos;
};

const updateTaskStatus = (todos, itemIndex, status) => {
  const newTodos = todos;
  const task = newTodos.find((_, index) => index === itemIndex);
  task.done = status;
  newTodos[itemIndex] = task;
  return newTodos;
};

const deleteItem = (i, todos) => todos.filter((_, index) => index !== i);

const removeAllDone = (todos) => todos.filter((todo) => !todo.done);

export {
  addItem, editItem, deleteItem, removeAllDone, updateTaskStatus,
};

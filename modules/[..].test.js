import displayTodos from './displayTodos.js';

describe('Add and delete items from the todo list', () => {
  let task;

  beforeEach(() => {
    task = new displayTodos();
  });

  test('Add one new task to the list', () => {
    const lengthArray = task.todos.length;
    task.addItem('Add a task');
    expect(task.todos).toHaveLength(lengthArray + 1);
  });

  test('Remove one task from the list', () => {
    task.addItem('Add a task');
    const lengthArray = task.todos.length;
    task.deleteItem(1);
    expect(task.todos).toHaveLength(lengthArray - 1);
  });
});

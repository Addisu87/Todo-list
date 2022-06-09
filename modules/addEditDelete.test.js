import { addItem, deleteItem } from './addEditDelete.js';

describe('Add and delete items from the todo list', () => {
  let tasks = [];

  test('Add new task to the list', () => {
    const lengthArray = tasks.length;
    tasks = addItem('Add a task 1', tasks);
    tasks = addItem('Add a task 2', tasks);
    expect(tasks).toHaveLength(lengthArray + 2);
  });

  test('Remove a task from the list', () => {
    const lengthArray = tasks.length;
    tasks = deleteItem(0, tasks);
    tasks = deleteItem(0, tasks);
    expect(tasks).toHaveLength(lengthArray - 2);
  });
});

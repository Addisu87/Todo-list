import {
  addItem,
  deleteItem,
  removeAllDone,
  editItem,
  updateTaskStatus,
} from './addEditDelete.js';
import mock from '../__mocks__/mock.json';

describe('Add and delete items from the todo list', () => {
  let tasks = mock;

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

  test('Remove all', () => {
    const lengthArray = tasks.length;
    tasks = removeAllDone(tasks);
    expect(tasks).toHaveLength(lengthArray - 1);
  });

  test('edit item', () => {
    tasks = editItem(tasks, 0, 'edited task');
    expect(tasks[0].content).toBe('edited task');
  });

  test('update task status', () => {
    tasks = updateTaskStatus(tasks, 0, false);
    expect(tasks[0].done).toBe(false);
  });
});

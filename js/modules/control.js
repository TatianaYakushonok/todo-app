import { createRow } from './createElement.js';
import { addTaskData } from './serviceStorage.js';

const addTaskPage = (task, list) => {
  list.append(createRow(task));
};

export const formControl = (form, list) => {
  console.log(form.elements);
  form.task.addEventListener('change', () => {
    form.elements[2].disabled = false;
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = Math.random().toString().substring(2, 10);
    form.elements[0].value = id;
    const formData = new FormData(e.target);
    const newTask = Object.fromEntries(formData);
    addTaskPage(newTask, list);
    addTaskData(newTask);
    form.elements[2].disabled = true;

    form.reset();
  });
  form.addEventListener('reset', () => {
    form.elements[2].disabled = true;
  });
};

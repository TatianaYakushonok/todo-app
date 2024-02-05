import { createRow } from './createElement.js';
import {
  addTaskData,
  editStatusStorage,
  editStorage,
  removeStorage,
} from './serviceStorage.js';

const addTaskPage = (task, list) => {
  list.append(createRow(task));
};

export const formControl = (key, form, list) => {
  console.log(form.elements);
  form.task.addEventListener('change', () => {
    form.elements[4].disabled = false;
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = Math.random().toString().substring(2, 10);
    form.elements[0].value = id;
    form.elements[2].value = 'В процессе';
    const formData = new FormData(e.target);
    const newTask = Object.fromEntries(formData);
    addTaskPage(newTask, list);
    addTaskData(key, newTask);
    form.elements[4].disabled = true;

    form.reset();
  });
  form.addEventListener('reset', () => {
    form.elements[4].disabled = true;
  });
};

export const deleteTaskControl = (key, list) => {
  list.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.btn-danger')) {
      const taskDelete = confirm('Вы действительно хотите удалить задачу?');
      if (taskDelete) {
        target.closest('.table-row').remove();
        const task = target.closest('.table-row').dataset.id;
        removeStorage(key, task);
      } else {
        return;
      }
    }
  });
};

export const statusTaskControl = (key, list) => {
  list.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.btn-success')) {
      const taskRow = target.closest('.table-row');
      taskRow.classList.remove('table-light');
      taskRow.classList.add('table-success', 'table-row');

      const task = taskRow.querySelector('.task');
      task.classList.add('text-decoration-line-through');

      const statusTask = taskRow.querySelector('.status');
      statusTask.textContent = 'Выполнена';

      const taskId = taskRow.dataset.id;
      editStatusStorage(key, taskId);
    }
  });

  return list;
};

export const editTaskControl = (key, list) => {
  list.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.btn-secondary')) {
      const taskRow = target.closest('.table-row');
      const task = taskRow.querySelector('.task');
      const taskId = target.closest('.table-row').dataset.id;
      task.focus();
      task.addEventListener('blur', () => {
        editStorage(key, taskId, task.textContent);
      });
    }
  });
};

/* export const formModalControl = (modal) => {
  const modalForm = modal.querySelector('.user-form');
  const modalInput = modalForm.querySelector('.form-control');
  let userName = '';
  modalInput.addEventListener('change', () => {
    userName = modalInput.value;
    console.log(userName);
  });
  console.log(userName);

  return userName;
}; */

import { createRow } from './createElement.js';
import {
  addTaskData,
  editStatusStorage,
  editStorage,
  getStorage,
  removeStorage,
} from './serviceStorage.js';

const addTaskPage = (task, list) => {
  list.append(createRow(task));
};

export const formControl = (key, form, list) => {
  form.task.addEventListener('change', () => {
    form.elements[4].disabled = false;
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = Math.random().toString().substring(2, 10);
    const dataTasks = getStorage(key);
    let num = 0;
    dataTasks.map((tasks, ind) => (num = ind + 1));
    const formData = new FormData(form);
    formData.set('id', id);
    formData.set('status', 'В процессе');
    formData.set('num', num);
    const newTask = Object.fromEntries(formData);
    newTask.num = num + 1;
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
      const taskId = taskRow.dataset.id;

      const task = taskRow.querySelector('.task');

      const dataTask = getStorage(key);
      let typeTask = '';
      dataTask.map((task) => {
        if (task.id === taskId) {
          typeTask = task.type;
        }
      });

      const statusTask = taskRow.querySelector('.status');
      if (statusTask.textContent === 'В процессе') {
        statusTask.textContent = 'Выполнена';
        if (typeTask === 'Обычная') {
          taskRow.classList.remove('table-light', 'table-row');
        }
        if (typeTask === 'Важная') {
          taskRow.classList.remove('table-warning', 'table-row');
        }
        if (typeTask === 'Срочная') {
          taskRow.classList.remove('table-danger', 'table-row');
        }
        taskRow.classList.add('table-success', 'table-row');
        task.classList.add('task', 'text-decoration-line-through');
      } else {
        statusTask.textContent = 'В процессе';
        if (typeTask === 'Обычная') {
          taskRow.classList.add('table-light', 'table-row');
        }
        if (typeTask === 'Важная') {
          taskRow.classList.add('table-warning', 'table-row');
        }
        if (typeTask === 'Срочная') {
          taskRow.classList.add('table-danger', 'table-row');
        }
        taskRow.classList.remove('table-success');
        task.classList.remove('text-decoration-line-through');
      }

      editStatusStorage(key, taskId, statusTask.textContent);
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

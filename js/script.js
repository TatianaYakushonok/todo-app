import { renderTasks, renderTodoApp } from './modules/render.js';
import {
  formControl,
  deleteTaskControl,
  statusTaskControl,
  editTaskControl,
} from './modules/control.js';
import { getStorage } from './modules/serviceStorage.js';

const init = (selectorApp) => {
  const app = document.querySelector(selectorApp);
  //const userName = prompt('Введите ваше имя');
  const { modal, form, list } = renderTodoApp(app);
  const userModal = new bootstrap.Modal('#userEnterModal');
  userModal.show();
  const modalInput = modal.querySelector('.form-control');
  modalInput.addEventListener('change', () => {
    const userName = modalInput.value;
    const dataTasks = getStorage(userName);
    const status = statusTaskControl(userName, list);
    const allRows = renderTasks(userName, status, dataTasks);
    deleteTaskControl(userName, list);
    editTaskControl(userName, list);
    formControl(userName, form, list);
  });
};

init('.app-container');

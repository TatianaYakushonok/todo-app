import {
  createTitle,
  createForm,
  createTableWrapper,
  createTable,
  createRow,
  createModal,
} from './createElement.js';
import { getStorage } from './serviceStorage.js';

export const renderTasks = (key, elem, data) => {
  data = getStorage(key);
  const allRow = data.map(createRow);
  elem.append(...allRow);

  return allRow;
};

export const renderTodoApp = (selectorApp) => {
  const modal = createModal();
  const title = createTitle();
  const form = createForm();
  const tableWrapper = createTableWrapper();
  const table = createTable();

  tableWrapper.append(table);
  selectorApp.classList.add(
    'vh-100',
    'w-100',
    'd-flex',
    'align-items-center',
    'justify-content-center',
    'flex-column',
  );
  document.body.append(modal);
  selectorApp.append(title, form, tableWrapper);

  return {
    modal,
    title,
    form,
    tableWrapper,
    list: table.tbody,
  };
};

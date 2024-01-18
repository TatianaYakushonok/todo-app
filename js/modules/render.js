import {
  createTitle,
  createForm,
  createTableWrapper,
  createTable,
  createRow,
} from './createElement.js';
import { getStorage } from './serviceStorage.js';

export const renderTasks = (elem, data) => {
  data = getStorage('task');
  const allRow = data.map(createRow);
  elem.append(...allRow);

  return allRow;
};

export const renderTodoApp = (selectorApp) => {
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
  selectorApp.append(title, form, tableWrapper);

  return {
    title,
    form,
    tableWrapper,
    list: table.tbody,
  };
};

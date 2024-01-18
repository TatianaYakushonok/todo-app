import { renderTasks, renderTodoApp } from './modules/render.js';
import { formControl } from './modules/control.js';
import { getStorage } from './modules/serviceStorage.js';

const init = (selectorApp) => {
  const app = document.querySelector(selectorApp);
  const { title, form, tableWrapper, list } = renderTodoApp(app);
  const dataTasks = getStorage('task');
  const allRows = renderTasks(list, dataTasks);
  formControl(form, list);
};

init('.app-container');

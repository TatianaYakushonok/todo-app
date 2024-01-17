import { renderTasks, renderTodoApp } from './modules/render.js';
import { dataTasks } from './dataTasks.js';

const init = (selectorApp) => {
  const app = document.querySelector(selectorApp);
  const { title, form, tableWrapper, list } = renderTodoApp(app);
  const allRows = renderTasks(list, dataTasks);
};

init('.app-container');

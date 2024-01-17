export const createTitle = () => {
  const title = document.createElement('h3');
  title.textContent = 'Todo App';

  return title;
};

const createButton = (className, type, text) => {
  const button = document.createElement('button');
  button.className = className;
  button.textContent = text;
  button.type = type;

  return button;
};

export const createForm = () => {
  const form = document.createElement('form');
  form.classList.add('d-flex', 'align-items-center', 'mb-3');
  form.insertAdjacentHTML(
    'beforeend',
    `<label class="form-group me-3 mb-0">
      <input type="text" class="form-control" placeholder="ввести задачу">
    </label>`,
  );
  const saveBtn = createButton('btn btn-primary me-3', 'submit', 'Сохранить');
  const resetBtn = createButton('btn btn-warning', 'reset', 'Очистить');

  form.append(saveBtn, resetBtn);

  return form;
};

export const createTableWrapper = () => {
  const tableWrapper = document.createElement('div');
  tableWrapper.classList.add('table-wrapper');

  return tableWrapper;
};

export const createTable = () => {
  const table = document.createElement('table');
  table.classList.add('table', 'table-hover', 'table-bordered');
  const thead = document.createElement('thead');
  thead.insertAdjacentHTML(
    'beforeend',
    `
      <tr>
        <th>№</th>
        <th>Задача</th>
        <th>Статус</th>
        <th>Действия</th>
      </tr>
    `,
  );
  const tbody = document.createElement('tbody');
  table.append(thead, tbody);
  table.tbody = tbody;

  return table;
};

export const createRow = ({ id, task, status }) => {
  const tr = document.createElement('tr');
  tr.classList.add('table-light');
  const btnDell = createButton('btn btn-danger me-2', 'button', 'Удалить');
  const btnSuccess = createButton('btn btn-success', 'button', 'Завершить');
  tr.insertAdjacentHTML(
    'beforeend',
    `
      <td>${id}</td>
      <td class="task">
        ${task}
      </td>
      <td>${status}</td>
    `,
  );
  const tdBtns = document.createElement('td');
  tdBtns.append(btnDell, btnSuccess);
  tr.append(tdBtns);

  return tr;
};

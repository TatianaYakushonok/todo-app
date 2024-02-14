export const createTitle = () => {
  const title = document.createElement('h3');
  title.textContent = 'Todo App';

  return title;
};

const createButton = (className, type, text, disabled = false) => {
  const button = document.createElement('button');
  button.className = className;
  button.textContent = text;
  button.type = type;
  button.disabled = disabled;

  return button;
};

export const createForm = () => {
  const form = document.createElement('form');
  form.classList.add('d-flex', 'align-items-center', 'mb-3');
  form.insertAdjacentHTML(
    'beforeend',
    ` <input type="hidden" class="form-id" name="id">
      <label class="form-group me-3 mb-0 w-100">
        <input type="text" class="form-control" name="task" placeholder="ввести задачу">
      </label>
      <input type="hidden" class="form-status" name="status">
      <select name="type" class="form-select me-3 mb-0 w-50">
        <option value="Обычная">Обычная</option>
        <option value="Важная">Важная</option>
        <option value="Срочная">Срочная</option>
      </select>
      `,
  );
  const saveBtn = createButton(
    'btn btn-primary me-3',
    'submit',
    'Сохранить',
    true,
  );
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

export const createRow = ({ id, task, status, type }) => {
  const btnDell = createButton('btn btn-danger me-2', 'button', 'Удалить');
  const btnSuccess = createButton(
    'btn btn-success me-2',
    'button',
    'Завершить',
  );
  const btnEdit = createButton('btn btn-secondary', 'button', 'Редактировать');

  const tr = document.createElement('tr');
  if (type === 'Обычная' && status === 'В процессе') {
    tr.classList.add('table-light', 'table-row');
  } else if (type === 'Важная' && status === 'В процессе') {
    tr.classList.add('table-warning', 'table-row');
  } else if (type === 'Срочная' && status === 'В процессе') {
    tr.classList.add('table-danger', 'table-row');
  }

  if (status === 'Выполнена') {
    tr.classList.add('table-success', 'table-row');
  }

  const classTask =
    status === 'В процессе' ? 'task' : 'task text-decoration-line-through';
  const statusTask = status === 'В процессе' ? 'В процессе' : 'Выполнена';

  tr.setAttribute('data-id', id);
  tr.insertAdjacentHTML(
    'beforeend',
    `
      <td>${id}</td>
      <td class="${classTask}"  contenteditable="true">         
        ${task}
      </td>
      <td class="status">${statusTask}</td>
    `,
  );

  const tdBtns = document.createElement('td');
  tdBtns.append(btnDell, btnSuccess, btnEdit);
  tr.append(tdBtns);

  return tr;
};

export const createModal = () => {
  const modal = document.createElement('div');
  modal.classList.add('modal', 'fade');
  modal.setAttribute('tabindex', '-1');
  modal.setAttribute('id', 'userEnterModal');
  modal.insertAdjacentHTML(
    'beforeend',
    `
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Добро пожаловать в приложение ToDo App</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
          </div>
          <div class="modal-body">
            <form class="user-form">
              <label class="form-group me-3 mb-0">
                Введите свое имя:
                <input type="text" class="form-control form-user-name" name="name">
              </label>
            </form>
          </div>
          <div class="modal-footer">
          <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal">Войти</button>
          </div>
        </div>
      </div>
    `,
  );

  return modal;
};

export const getStorage = (key) => {
  const dataTasks = JSON.parse(localStorage.getItem(key) || '[]');
  return dataTasks;
};

export const setStorage = (key, task) => {
  const dataTasks = getStorage(key);
  dataTasks.push(task);
  localStorage.setItem(key, JSON.stringify(dataTasks));
};

/* const sortStorage = (key) => {
  const dataPhone = getStorage(key);
  const sortData = dataPhone.sort((name1, name2) => {
    const res = name1.name > name2.name ? 1 : -1;
    return res;
  });
  localStorage.setItem(key, JSON.stringify(sortData));
}; */

export const removeStorage = (key, task) => {
  const dataTasks = getStorage(key);
  const index = dataTasks.findIndex((item) => item.task === task);
  if (index !== -1) {
    dataTasks.splice(index, 1);
  }
  localStorage.setItem(key, JSON.stringify(dataTasks));
};

export const addTaskData = (task) => {
  setStorage('task', task);
  const dataTasks = getStorage('task');
  dataTasks.push(task);
};

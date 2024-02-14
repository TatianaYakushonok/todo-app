export const getStorage = (key) => {
  const dataTasks = JSON.parse(localStorage.getItem(key) || '[]');
  return dataTasks;
};

export const setStorage = (key, task) => {
  const dataTasks = getStorage(key);
  dataTasks.push(task);
  localStorage.setItem(key, JSON.stringify(dataTasks));
};

export const editStorage = (key, taskId, taskName) => {
  const dataTasks = getStorage(key);
  const index = dataTasks.findIndex((item) => item.id === taskId);
  if (index !== -1) {
    dataTasks[index].task = taskName;
  }
  localStorage.setItem(key, JSON.stringify(dataTasks));
};

export const editStatusStorage = (key, taskId, statusTask) => {
  const dataTasks = getStorage(key);
  const index = dataTasks.findIndex((item) => item.id === taskId);
  if (index !== -1) {
    dataTasks[index].status = statusTask;
  }
  localStorage.setItem(key, JSON.stringify(dataTasks));
};

export const removeStorage = (key, task) => {
  const dataTasks = getStorage(key);
  const index = dataTasks.findIndex((item) => item.id === task);
  if (index !== -1) {
    dataTasks.splice(index, 1);
  }
  localStorage.setItem(key, JSON.stringify(dataTasks));
};

export const addTaskData = (key, task) => {
  setStorage(key, task);
  const dataTasks = getStorage(key);
  dataTasks.push(task);
};

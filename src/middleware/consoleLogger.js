export const consoleLogger = (store) => (next) => (action) => {
  console.debug("action: ", action);
  console.debug("сейчас: ", store.getState());
  let result = next(action);
  console.debug("будет: ", store.getState());
  return result;
};

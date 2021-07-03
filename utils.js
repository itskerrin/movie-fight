const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    // wrapper
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

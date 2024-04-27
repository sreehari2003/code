function debounce(method, timeOut = 2000) {
  let timer = null;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      method(...args);
    }, timeOut);
  };
}

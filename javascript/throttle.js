const useThrottle = (method, timeOut = 3000) => {
  let timer = null;

  return function (...args) {
    if (timer === null) {
      method(...args);
      timer = setTimeout(() => {
        timer = null;
      }, timeOut);
    }
  };
};

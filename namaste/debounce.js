export const debounce = (fn, time = 1000) => {
  let timeOut;

  if (timeOut) {
    clearTimeout(timeOut);
  }

  return function (...args) {
    const ctx = this;
    timeOut = setTimeout(() => {
      fn.apply(ctx, args);
    }, time);
  };
};

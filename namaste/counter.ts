type ReturnObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): ReturnObj {
  const def = init;
  return {
    increment: () => {
      return init++;
    },
    decrement: () => {
      return init--;
    },
    reset: () => {
      return (init = def);
    },
  };
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

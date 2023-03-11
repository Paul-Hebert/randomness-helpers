export let randomFunction = Math.random;

export const setRandomFunction = (newRandomFunc: () => number) =>
  (randomFunction = newRandomFunc);

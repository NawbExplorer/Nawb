import { useReducer } from 'react';

export const useForceUpdate = function () {
  const [, update] = useReducer((x) => x + 1, 0);
  return update;
};

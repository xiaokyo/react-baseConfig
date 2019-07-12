/*action*/
export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";
export const RESET = "counter/RESET";

export function increment() {
  return dispatch => {
    dispatch({ type: INCREMENT });
  };
}

export function decrement() {
  return dispatch => {
    dispatch({ type: DECREMENT });
  };
}

export function reset() {
  return dispatch => {
    dispatch({ type: RESET });
  };
}

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "@actions/counter";

// style
import "./style.css";

export default props => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  const _increment = () => increment()(dispatch);
  const _decrement = () => decrement()(dispatch);
  const _reset = () => reset()(dispatch);

  return (
    <div>
      i am list
      <div>
        <div>当前计数为{count}</div>
        <button onClick={_increment}>自增</button>
        <button onClick={_decrement}>自减</button>
        <button onClick={_reset}>重置</button>
      </div>
    </div>
  );
};

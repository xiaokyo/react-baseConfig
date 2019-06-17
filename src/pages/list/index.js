import React from "react";
import { connect } from "react-redux";

import { increment, decrement, reset } from "@actions/counter";

// style
import "./style.css";

@connect(
  ({ counter }) => counter,
  dispatch => ({
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    },
    reset: () => {
      dispatch(reset());
    }
  })
)
export default class List extends React.Component {
  render() {
    const { count, increment, decrement, reset } = this.props;
    return (
      <div>
        i am list
        <div>
          <div>当前计数为{count}</div>
          <button onClick={() => increment()}>自增</button>
          <button onClick={() => decrement()}>自减</button>
          <button onClick={() => reset()}>重置</button>
        </div>
      </div>
    );
  }
}

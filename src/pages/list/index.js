import React from 'react';
import {connect} from 'react-redux';

import {increment, decrement, reset} from '@actions/counter';

// style
import './style.css';

const List = props => {
  const {count, increment, decrement, reset} = props;

  return (
    <div>
      i am list
      <div>
        <div>当前计数为{count}</div>
        <button onClick={() => increment ()}>
          自增
        </button>
        <button onClick={() => decrement ()}>
          自减
        </button>
        <button onClick={() => reset ()}>
          重置
        </button>
      </div>
    </div>
  );
};

export default connect (
  ({counter}) => counter,
  dispatch => ({
    increment: () => {
      dispatch (increment ());
    },
    decrement: () => {
      dispatch (decrement ());
    },
    reset: () => {
      dispatch (reset ());
    },
  })
) (List);

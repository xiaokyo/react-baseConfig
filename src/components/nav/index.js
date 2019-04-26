import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <Link to="/">首页</Link>
      <Link to="/list">List</Link>
    </div>
  );
};

export default Nav;

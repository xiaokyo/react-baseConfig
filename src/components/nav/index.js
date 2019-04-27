import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <Link to="/">首页</Link>
      <Link to="/list">List</Link>
      <Link to="/userinfo">userinfo</Link>
    </div>
  );
};

export default Nav;

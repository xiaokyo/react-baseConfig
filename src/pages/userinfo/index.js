import React from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from '@actions/userinfo';

const UserInfo = props => {
  const {userInfo = {}} = props.userInfo;
  return (
    <div>
      {
        <div>
          <p>用户信息：</p>
          <p>用户名：{userInfo.name}</p>
          <p>介绍：{userInfo.intro}</p>
        </div>
      }
      <button onClick={() => props.getUserInfo ()}>请求用户信息</button>
    </div>
  );
};

export default connect (userInfo => userInfo, {getUserInfo}) (UserInfo);

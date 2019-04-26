import React from 'react';
import pic from '@images/1.png';

// style
import "./style.css"

const App = props => {
  const {name} = props;
  return (
    <div>
      this is {name}
      <img src={pic} />
    </div>
  );
};

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import FxExpiryBar from './FxExpiryBar';

const App: React.FC = () => {
  console.log('render')
  return (
    <div>
      <FxExpiryBar timer={3} onExpiry={()=>{
        console.log('asas');
      }} />
      {/* <FxExpiryBar timer={20}  /> */}
      {/* <FxExpiryBar  timer={30} /> */}
    </div>
  );
}

export default App;

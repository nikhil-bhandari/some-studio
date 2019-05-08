import React from 'react';
import logo from './logo.svg';
import './App.css';
import FxExpiryBar from './FxExpiryBar';

const App: React.FC = () => {
  const conversions = [
    { from: { amount: 1, unit: 'SGD' }, to: { amount: 50, unit: 'INR' }, timer: 10 },
    { from: { amount: 1, unit: 'SGD' }, to: { amount: 0.73, unit: 'USD' }, timer: 20 },
    { from: { amount: 1, unit: 'SGD' }, to: { amount: 0.66, unit: 'EUR' }, timer: 30 },
  ];

  return (
    <div>
      {
        conversions.map((currency) =>  <FxExpiryBar
        from={currency.from}
        to={currency.to}
        timer={currency.timer}
        onExpiry={() => {
          console.log(`10 should be Refreshing`);
        }} />)
      }
    </div>
  );
}

export default App;

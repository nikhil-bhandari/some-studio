import React from 'react';
import './App.css';
import FxExpiryBar from './FxExpiryBar/FxExpiryBar';

const App: React.FC = () => {
  const conversions = [
    { from: { amount: 1, unit: 'SGD' }, to: { amount: 50, unit: 'INR' }, timer: 10 },
    { from: { amount: 1, unit: 'SGD' }, to: { amount: 0.73, unit: 'USD' }, timer: 20 },
    { from: { amount: 1, unit: 'SGD' }, to: { amount: 0.66, unit: 'EUR' }, timer: 30 },
  ];

  return (
    <div>
      {
        conversions.map((currency) =>
          <FxExpiryBar
            from={currency.from}
            to={currency.to}
            timer={currency.timer}
            onExpiry={() => {
              console.log(`${currency.timer} should be Refreshing`);
            }} />
        )
      }
    </div>
  );
}

export default App;

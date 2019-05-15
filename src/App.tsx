import React, { useState } from 'react';
import './App.css';
import FxExpiryBar from './FxExpiryBar/FxExpiryBar';
import Currency from './Currency/Currency';



const App: React.FC = () => {
  const [conversion, setConversion] = useState({
    from: { amount: 100, unit: 'USD' },
    to: { amount: 2948, unit: 'TWD' },
  });
  const currencyPair = {
    from: { amount: 1, unit: 'USD' },
    to: { amount: 29.48, unit: 'TWD' },
    timer: 5
  };

  return (
    <div style={{ padding: '20px' }}>
      <Currency currency={conversion.from} onChange={(value) => {
        conversion.from.amount = parseInt(value);
        setConversion(Object.assign({}, conversion));
      }} />
      <Currency currency={conversion.to} onChange={(value) => {
        conversion.to.amount = parseInt(value);
        setConversion(Object.assign({}, conversion));
      }} />
      <FxExpiryBar
        from={currencyPair.from}
        to={currencyPair.to}
        timer={currencyPair.timer}
        onRefresh={(afterRefresh) => {
          console.log(`Refreshing.....`);
          setTimeout(() => {
            console.log('Refreshed');
            afterRefresh();
          }, 3000);
        }}
        onExpiry={() => {
          console.log('Expired')
        }} />
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import FxExpiryBar from './FxExpiryBar';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const currency = { from: { amount: 1, unit: 'SGD' }, to: { amount: 50, unit: 'INR' }, timer: 10 };
    ReactDOM.render(<FxExpiryBar
        from={currency.from}
        to={currency.to}
        timer={currency.timer}
        onExpiry={() => {
            console.log(`${currency.timer} should be Refreshing`);
        }}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
});

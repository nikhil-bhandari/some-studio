import React, { ChangeEvent } from 'react';
import { CurrencyContainer, CurrencyDescription, CurrencyAmount } from './styled';
import CurrencyProps from './CurrencyProps';

const Currency: React.FC<CurrencyProps> = ({ currency, onChange }) => {

    const onChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return <CurrencyContainer>
        <CurrencyDescription>
            <div>XXX</div>
            <div>{currency.unit}</div>
        </CurrencyDescription>
        <CurrencyAmount>
            <input type="text"
                value={currency.amount || ''}
                onChange={onChangeEvent} />
        </CurrencyAmount>
    </CurrencyContainer>
}

export default Currency;
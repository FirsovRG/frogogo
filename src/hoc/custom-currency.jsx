import React from 'react';
import Currency from 'react-currency-formatter';

export const CustomCurrency = ({ quantity }) => (
    <Currency quantity={quantity} currency='RUB' locale='ru_RU' pattern='### !'/>
);

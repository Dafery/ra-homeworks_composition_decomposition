import React from 'react';
import { Rate } from './Rate';

const ratesData = [
  {
    id: 1,
    currency: 'USD MOEX',
    rate: 65.58,
    change: '+1.28',
  },
  {
    id: 2,
    currency: 'НЕФТЬ',
    rate: 66.9,
    change: '-0.33%',
  },
];

// Создание списка курсов валют

export const Rates = () => {
  return (
    <ul className="rates-list">
      {ratesData.map((data) => (
        <Rate {...data} key={data.id} />
      ))}
    </ul>
  );
};

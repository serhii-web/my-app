import React from 'react';
import { Continent } from '../Continent';

export const Continents = ({ continents }) => (
  <ul>
    {continents.map(continent => (
      <li key={continent.name}>
        <Continent {...continent}/>
      </li>
    ))}
  </ul>
);

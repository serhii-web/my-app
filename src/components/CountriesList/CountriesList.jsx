import React from 'react';
import { Countrie } from '../Countrie'

export const CountriesList = React.memo(({ countries }) => (
  <ul>
    {countries.map(countrie => (
      <li key={countrie.name}>
        <Countrie {...countrie} />
      </li>
    ))}
  </ul>
))

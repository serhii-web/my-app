import React from 'react';
import { Language } from '../Language';

export const Languages = React.memo(({ languages }) => (
  <ul>
    {languages.map(language => (
      <li key={language.name}>
        <Language language={language.name} />
      </li>
    ))}
  </ul>
));

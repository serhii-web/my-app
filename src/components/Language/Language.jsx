import React, { useContext } from 'react';
import { Test } from '../Continent';

export const Language = ({ language }) => {
  const callback = useContext(Test);

  return (
    <h3 onClick={() => callback(false)}>{language}</h3>
  )
};

import React, { useState } from 'react';
import { Languages } from '../Languages'

export const Countrie = ({ name, languages }) => {
  const [showLanguage, setShowLanguage] = useState(false);

  return (
    <>
      <h2 onClick={() => setShowLanguage(!showLanguage)}>{name}</h2>
      {showLanguage && <Languages languages={languages} />}
    </>
  )
}
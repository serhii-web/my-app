import React, { useState } from 'react';
import { CountriesList } from '../CountriesList';

export const Test = React.createContext(null)

export const Continent = ({ name, countries }) => {
  const [showCountries, setShowCountries] = useState(false);

  return (
    <Test.Provider value={setShowCountries}>  
      <h1 onClick={() => setShowCountries(!showCountries)}>{name}</h1>
      {showCountries && <CountriesList countries={countries}/>}
    </Test.Provider>
  )
}
import React, { useState, useEffect } from 'react';
import { Continents } from './components/Continents';
import { getDate } from './api/getDate';
import './App.css';

function App() {
  const [continents, setContinents] = useState(null);

  useEffect(() => {
    getDate()
      .then(setContinents)
  }, []);

  return (
    <div>
      {continents && <Continents continents={continents} />}
    </div>
  );
};

export default App;

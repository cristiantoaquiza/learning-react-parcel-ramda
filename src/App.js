import { isEmpty } from 'ramda';
import React, { useState } from 'react';
import Results from './Results';
import Searcher from './Searcher';

export const App = () => {
  const [results, setResults] = useState([]);

  return (
    <main>
      <h1>Wikipedia Search</h1>
      <Searcher setResults={setResults} />
      {!isEmpty(results) && <Results results={results} />}
    </main>
  );
};

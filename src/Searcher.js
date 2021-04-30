import { isEmpty, pipe } from 'ramda';
import React, { useEffect, useState } from 'react';
import { buildWikipediaSearchUrl, sanitizeInput } from './utils';

const Searcher = ({ setResults }) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const fetchWikipediaResults = async () => {
      const resultsData = await fetch(url);
      const results = await resultsData.json();
      setResults(results);
    };
    if (!isEmpty(url)) fetchWikipediaResults();
  }, [url]);

  const handleOnChange = pipe(sanitizeInput, buildWikipediaSearchUrl, setUrl);

  return <input type='text' placeholder='Search' onChange={handleOnChange} />;
};

export default Searcher;

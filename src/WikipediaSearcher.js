import { pipe, tap } from 'ramda';
import React from 'react';
import { buildWikipediaSearchUrl, sanitizeInput } from './utils';

const WikipediaSearcher = () => {
  const handleOnChange = pipe(
    sanitizeInput,
    buildWikipediaSearchUrl,
    tap(console.log)
  );

  return <input type='text' placeholder='Search' onChange={handleOnChange} />;
};

export default WikipediaSearcher;

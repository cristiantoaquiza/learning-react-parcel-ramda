import React from 'react';

const Results = ({ results }) => {
  const [query, names, summaries, links] = results;

  return (
    <>
      <h2>{`Searching for ${query}`}</h2>
      <ul>
        {names.map((name, index) => (
          <li key={`${name}-${index}`}>
            <a href={links[index]} target='_blank'>
              <h4>{name}</h4>
            </a>
            <p>{summaries[index]}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Results;

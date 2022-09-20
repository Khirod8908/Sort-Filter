import React, { useState } from 'react';
import data from './data.json';

const Filter = () => {
  const [option, setOption] = useState();
  const sorting = (e) => {
    setOption(e.target.value);
  };

  const sortRes = data.sort((a, b) => {
    if (option === 'recomended') {
      return a.id > b.id ? 1 : -1;
    }

    if (option === 'popularity') {
      return a.popularity < b.popularity ? 1 : -1;
    }

    if (option === 'high_to_low') {
      return a.price < b.price ? 1 : -1;
    }

    if (option === 'low_to_high') {
      return a.price > b.price ? 1 : -1;
    }
  });
  console.log(sortRes);

  return (
    <div>
      {/* filtering by name */}
      <div className="select_filter">
        <select value={option} onChange={sorting}>
          <option value="recomended">Recomended</option>
          <option value="popularity">Popularity</option>
          <option value="high_to_low">Price: High to Low</option>
          <option value="low_to_high">Price: Low to High</option>
        </select>
      </div>
      {sortRes.map((e, i) => {
        return (
          <div
            key={i}
            style={{
              border: '1px solid #d4d4d4',
              padding: '.5rem',
              width: '300px',
              margin: '1rem auto',
            }}
          >
            <h4 style={{ marginBottom: '.2rem' }}>Name: {e.name}</h4>
            <label
              style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
              <p>Price: {e.price}</p>
              <p>Popularity: {e.popularity}</p>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Filter;

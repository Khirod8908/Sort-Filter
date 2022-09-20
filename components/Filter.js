import React, { useState } from 'react';
import data from './data.json';

const Filter = () => {
  const [option, setOption] = useState();
  const sorting = (e) => {
    setOption(e.target.value);
  };

  const sortRes = data.sort((a, b) => {
    if (option === 'popularity') {
      return a.popularity > b.popularity ? 1 : -1;
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
          <option>All</option>
          <option value="popularity">Popularity</option>
          <option value="high_to_low">Price: High to Low</option>
          <option value="low_to_high">Price: Low to High</option>
        </select>
      </div>
      {sortRes.map((e, i) => {
        return (
          <div key={i}>
            <h6>{e.name}</h6>
            <p>{e.price}</p>
            <span>{e.popularity}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Filter;

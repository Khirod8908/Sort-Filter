import React, { useState } from 'react';
export default function Home() {
  const employees = [
    { id: 4, name: 'Dean', country: 'Denmark' },
    { id: 3, name: 'Carl', country: 'Canada' },
    { id: 2, name: 'Bob', country: 'Belgium' },
    { id: 1, name: 'Alice', country: 'Austria' },
    { id: 5, name: 'Ethan', country: 'Egypt' },
  ];

  // 👇️ sort by Numeric property ASCENDING (1 - 100)
  const numAscending = [...employees].sort((a, b) => a.id - b.id);
  // 👇️ sort by Numeric property DESCENDING (100 - 1)
  const numDescending = [...employees].sort((a, b) => b.id - a.id);

  // 👇️ sort by String property ASCENDING (A - Z)
  const strAscending = [...employees].sort((a, b) =>
    a.name > b.name ? 1 : -1
  );

  // 👇️ sort by String property DESCENDING (Z - A)
  const strDescending = [...employees].sort((a, b) =>
    a.name > b.name ? -1 : 1
  );

  const [option, setOption] = useState();
  const [items, setItems] = useState();
  const sortBy = (e) => {
    setOption(e.target.value);
  };

  // if (option == '1 - 100') {
  //   const numAscending = [...employees].sort((a, b) => a.id - b.id);
  //   setItems(numAscending);
  // } else if (option == '100 - 1') {
  //   console.log('100-1');
  // }

  return (
    <div>
      <select defaultValue={'1 - 100'} onChange={sortBy}>
        <option value="1 - 100">1 - 100</option>
        <option value="100 - 1">100 - 1</option>
        <option value="a - z">A - Z</option>
        <option value="z - a">Z - A</option>
      </select>
      {numDescending.map((employee) => {
        return (
          <div key={employee.id}>
            <h2>id: {employee.id}</h2>
            <h2>name: {employee.name}</h2>
            <h2>country: {employee.country}</h2>

            <hr />
          </div>
        );
      })}
    </div>
  );
}

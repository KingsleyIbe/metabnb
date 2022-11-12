import React from 'react';
import Data from './FilterBtn';

const FilterBtns = () => {
  const data = Data;
  return (
    <div>
      <div className="flex gap-10 items-center">
        {data && data.map((item) => (
          <ul key={item.id}>
            <li><button type="button">{item.title}</button></li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default FilterBtns;

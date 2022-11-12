import React from 'react';
import Data from './FilterBtn';
import Setting from '../../assets/images/setting.png';

const FilterBtns = () => {
  const data = Data;
  return (
    <div className="max-w-[100%] px-[120px] py-10">
      <div className="flex gap-10 items-center">
        {data && data.map((item) => (
          <ul key={item.id} className="active">
            <li><button type="button">{item.title}</button></li>
          </ul>
        ))}
        <div className="flex flex-row items-center border border-1-solid rounded-[8px] max-w-[161px] p-2">
          <input type="text" placeholder="Location" className="max-w-[100px]" />
          <img src={Setting} alt="Setting" />
        </div>
      </div>
    </div>
  );
};

export default FilterBtns;

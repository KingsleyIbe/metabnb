import React from 'react';
import Data from './FilterBtn';
import Setting from '../../assets/images/setting.png';

const FilterBtns = () => {
  const data = Data;
  return (
    <div className="overflow-x-auto lg:block lg:max-w-[100%] w-[90%] px-2 sm:p-10 lg:px-[80px] lg:py-10">
      <div className="flex gap-10 items-center min-w-[100%]">
        {data && data.map((item) => (
          <ul key={item.id}>
            <li><button type="button" className="hover:opacity-[0.4]">{item.title}</button></li>
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

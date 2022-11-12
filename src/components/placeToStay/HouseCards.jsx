import React from 'react';
import Data from './HouseCards';

const HouseCards = () => {
  const data = Data;
  return (
    <div>
      <div className="flex flex-row gap-2 flex-wrap items-center justify-center w-[100%] mb-10">
        {data && data.map((item) => (
          <ul key={item.id} className="rounded-[8px] bg-[#fff] border border-solid-1 p-2 w-1/7">
            <li>
              <img src={item.image} alt={item.alt} className="max-w-[260px]" />
              {' '}
            </li>
            <li className="flex gap-2 items-center my-2 max-w-[100%] text-[12px]">
              <p>{item.title}</p>
              <p className="font-bold text-right">{item.price}</p>
            </li>
            <li className="flex gap-5 items-center mb-2 max-w-[100%] text-[12px]">
              <p>{item.distance}</p>
              <p className="items-end">{item.available}</p>
            </li>
            <li>
              <img src={item.review} alt={item.alt} />
              {' '}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default HouseCards;

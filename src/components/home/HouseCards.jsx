import React from 'react';
import Data from './HouseCards';

const HouseCards = () => {
  const data = Data;
  return (
    <div>
      <div>
        {data && data.map((item) => (
          <ul key={item.id}>
            <li>
              <img src={item.image} alt={item.alt} />
              {' '}
            </li>
            <li>
              <p>{item.title}</p>
              <p>{item.price}</p>
            </li>
            <li>
              <p>{item.distance}</p>
              <p>{item.available}</p>
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

import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import NavItems from './NavItems';

const MobileDropDown = () => {
  const data = NavItems;

  const navLinksStyles = ({ isActive }) => ({
    borderBottom: isActive ? '4px solid #FFF' : 'none',
  });

  return (
    <header className="w-[100vw] z-50 absolute top-[50px] right-0">
      <div className="text-[#fff] bg-[#A02279]">
        <nav className="p-5">
          {data.map((item) => (
            <div key={uuidv4()} className="">
              <ul className="w-[100%] my-5 pl-5">
                <li className="hover:opacity-[0.4]"><NavLink to={item.href} style={navLinksStyles}>{item.name}</NavLink></li>
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default MobileDropDown;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Data from './NavItems';

const Header = () => {
  const data = Data;
  return (
    <header className="p-10">
      <nav className="hidden lg:flex lg:flex-row lg:items-center lg:gap-[200px]">
        <span>
          <img src={logo} alt="Logo" />
        </span>
        <span className="flex gap-5 items-center text-[#434343]">
          {data && data.map((item) => (
            <ul key={item.id}>
              <li><Link to={item.href}>{item.name}</Link></li>
            </ul>
          ))}
        </span>
        <span>
          <button type="button" className="rounded-[10px] bg-[#A02279] px-[21px] py-[12px] text-[#fff]">Connect wallet</button>
        </span>
      </nav>
    </header>
  );
};

export default Header;

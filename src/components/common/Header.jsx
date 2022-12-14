/* eslint-disable react/prop-types */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Data from './NavItems';

const Header = ({ changeWord }) => {
  const data = Data;

  const navLinksStyles = ({ isActive }) => ({
    borderBottom: isActive ? '4px solid #A02279' : 'none',
  });

  return (
    <>
      <header className="hidden p-10 lg:block">
        <nav className="flex flex-row items-center justify-between gap-[170px] max-w-[1240px] md:gap-[50px]">
          <span>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </span>
          <span className="flex gap-10 items-center text-[#434343] text-[20px]">
            {data && data.map((item) => (
              <ul key={item.id}>
                <li className="hover:opacity-[0.4]"><NavLink to={item.href} style={navLinksStyles}>{item.name}</NavLink></li>
              </ul>
            ))}
          </span>
          <div>
            <button onClick={() => changeWord()} type="button" className="hover:opacity-[0.4] rounded-[10px] bg-[#A02279] px-[21px] py-[12px] text-[#fff]">Connect wallet</button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

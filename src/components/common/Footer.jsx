import React from 'react';
import { Link } from 'react-router-dom';
import FooterLogo from '../../assets/images/home/footerlogo.svg';
import Facebook from '../../assets/images/home/facebook.png';
import Instagram from '../../assets/images/home/instagram.png';
import Twitter from '../../assets/images/home/twitter.png';
import Copyright from '../../assets/images/home/copyright.png';
import Data from './FooterLinks';

const Footer = () => {
  const data = Data;
  return (
    <footer className="bg-[#1D1D1E] w-[100%]">
      <div className="flex gap-[100px] items-center p-[100px]">
        <div className="text-[#fff]">
          <img src={FooterLogo} alt="Logo" className="mb-[50px]" />
          <div className="flex gap-5 items-center mb-10">
            <img src={Facebook} alt="Facebook Logo" />
            <img src={Instagram} alt="Instagram Logo" />
            <img src={Twitter} alt="Twitter Logo" />
          </div>
          <div className="flex gap-5 items-center">
            <img src={Copyright} alt="Facebook Logo" />
            <p>2022 Metabnb</p>
          </div>
        </div>
        <div className="flex gap-[250px]">
          {data && data.map((item) => (
            <ul key={item.id}>
              <li><h4 className="text-[#fff]"><Link to={item.href}>{item.name}</Link></h4></li>
              <li className="text-[#F1F3F9] opacity-[0.5]">
                <p><Link to={item.href}>{item.subtitle[0]}</Link></p>
                <p><Link to={item.href}>{item.subtitle[1]}</Link></p>
                <p><Link to={item.href}>{item.subtitle[2]}</Link></p>
                <p><Link to={item.href}>{item.subtitle[3]}</Link></p>

              </li>
            </ul>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

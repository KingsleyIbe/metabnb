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
          <Link to="/"><img src={FooterLogo} alt="Logo" className="mb-[50px] hover:opacity-[0.4]" /></Link>
          <div className="flex gap-10 items-center mb-10">
            <a href="/" target="__blank" className="hover:opacity-[0.4]"><img src={Facebook} alt="Facebook Logo" /></a>
            <a href="/" target="__blank" className="hover:opacity-[0.4]"><img src={Instagram} alt="Instagram Logo" /></a>
            <a href="/" target="__blank" className="hover:opacity-[0.4]"><img src={Twitter} alt="Twitter Logo" /></a>
          </div>
          <div className="flex gap-5 items-center hover:opacity-[0.4]">
            <img src={Copyright} alt="Facebook Logo" />
            <p>2022 Metabnb</p>
          </div>
        </div>
        <div className="flex gap-[250px]">
          {data && data.map((item) => (
            <ul key={item.id}>
              <li><h4 className="text-[#fff] hover:opacity-[0.4]"><Link to={item.href}>{item.name}</Link></h4></li>
              <li className="text-[#F1F3F9] opacity-[0.5]">
                <Link to={item.href}><p className="hover:opacity-[0.4]">{item.subtitle[0]}</p></Link>
                <Link to={item.href}><p className="hover:opacity-[0.4]">{item.subtitle[1]}</p></Link>
                <Link to={item.href}><p className="hover:opacity-[0.4]">{item.subtitle[2]}</p></Link>
                <Link to={item.href}><p className="hover:opacity-[0.4]">{item.subtitle[3]}</p></Link>

              </li>
            </ul>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

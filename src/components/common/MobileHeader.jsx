import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import siteLogo from '../../assets/images/logo.png';
import MobileDropDown from './MobileDropDown';
import ConnectWalletBtn from './ConnectWalletBtn';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div className="z-50 lg:hidden">
      <div className="py-5 pl-2 md:p-5 sm:p-5 flex gap-5 sm:gap-10 relative justify-between">
        <Link to="/" className="flex gap-2 md:gap-2 sm:gap-2 item-center">
          <span><img src={siteLogo} alt="Site logo" className="w-[150px] md:w-[250px] sm:w-[50px]" /></span>
        </Link>
        <div className="flex gap-5 md:gap-10 sm:gap-10 item-center pr-2">
          <ConnectWalletBtn />
          <button type="button" onClick={openMenu} className="">
            <FontAwesomeIcon icon={faBars} className="text-[30px] text-[#A02279]" />
          </button>
          {!isOpen ? '' : (<div className="relative"><MobileDropDown /></div>)}
        </div>
      </div>
    </div>
  );
};
export default MobileHeader;

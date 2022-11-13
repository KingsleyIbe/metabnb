import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import siteLogo from '../../assets/images/logo.png';
import MobileDropDown from './MobileDropDown';
import ConnectWallet from './ConnectWallet';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div className="z-50 lg:hidden">
      <div className="py-5 pl-2 md:p-5 sm:p-5 flex gap-0 justify-end md:gap-10 sm:gap-10 item-center relative">
        <Link to="/" className="flex gap-2 md:gap-2 sm:gap-2 item-center">
          <span><img src={siteLogo} alt="Site logo" className="md:w-[50px] sm:w-[50px]" /></span>
        </Link>
        <div className="flex gap-0 md:gap-10 sm:gap-10 item-center">
          <ConnectWallet />
          <button type="button" onClick={openMenu} className="">
            <FontAwesomeIcon icon={faBars} className="text-[30px]" />
          </button>
          {!isOpen ? '' : (<div><MobileDropDown /></div>)}
        </div>
      </div>
    </div>
  );
};
export default MobileHeader;

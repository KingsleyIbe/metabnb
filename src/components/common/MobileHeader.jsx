import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import siteLogo from '../../assets/images/logo.png';
import MobileDropDown from './MobileDropDown';
import ConnectWallet from './ConnectWallet';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
    localStorage.setItem('modalState', isOpen);
  };

  return (
    <>
      <div className="z-50 lg:hidden">
        <div className="py-5 pl-2 md:p-5 sm:p-5 flex gap-5 sm:gap-10 justify-between">
          <Link to="/" className="">
            <span><img src={siteLogo} alt="Site logo" className="w-[150px] md:w-[250px] sm:w-[50px]" /></span>
          </Link>
          <div className="flex gap-5 md:gap-10 sm:gap-10 item-center pr-2">
            <div>
              <button onClick={openModal} type="button" className="hover:opacity-[0.4] rounded-[10px] bg-[#A02279] px-[21px] py-[12px] text-[#fff]">Connect wallet</button>
            </div>
            <button type="button" onClick={openMenu} className="">
              <FontAwesomeIcon icon={faBars} className="text-[30px] text-[#A02279]" />
            </button>
            {!isOpen ? '' : (<div className="relative"><MobileDropDown /></div>)}
          </div>
        </div>
      </div>
      {!modal ? '' : (<div className="relative"><ConnectWallet /></div>)}
    </>
  );
};
export default MobileHeader;

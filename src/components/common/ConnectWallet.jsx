/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Metamask from '../../assets/images/home/metamask.png';
import WalletConnect from '../../assets/images/home/walletConnect.png';

const ConnectWallet = () => {
  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => {
    setIsOpen(!isOpen);
    if (isOpen === true) {
      document.body.style.background = '#fff';
    }
  };

  return (
    <>
      {isOpen && (
      <div className="w-[100%] p-10 lg:p-5 lg:w-[500px]  md:p-5 md:w-[500px] fixed md:w-[500px] lg:fixed lg:left-[35%] md:left-[25%] lg:right-[50%] lg:top-[35%] md:right-[50%] md:top-[35%] rounded-[8px] border border-1-solid bg-[#fff]">
        <div className="flex justify-between border-b">
          <h2 className="text-[#333] text-[24px] font-bold">Connect Wallet</h2>
          <button onClick={openModal} type="button" className="align-end justify-end">X</button>
        </div>
        <p className="text-[#333] text-[16px] mt-5">Choose your preferred wallet:</p>
        <div className="border border-1-solid bg-[#F8F9FA] rounded-[12px] mb-2 p-2 flex justify-between items-center max-w-[436px]">
          <button className="flex gap-2 items-center" type="button">
            <img src={Metamask} alt="Metamask connect logo" />
            <h3 className="text-[#000] text-[18px] font-semibold">Metamask</h3>
          </button>
          <div>
            <span> &gt; </span>
          </div>
        </div>
        <div className="border border-1-solid rounded-[12px] p-2 flex justify-between items-center max-w-[436px]">
          <button className="flex gap-2 items-center" type="button">
            <img src={WalletConnect} alt="Metamask connect logo" />
            <h3 className="text-[#000] text-[18px] font-semibold">Connect Wallet</h3>
          </button>
          <div>
            <span> &gt; </span>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default ConnectWallet;

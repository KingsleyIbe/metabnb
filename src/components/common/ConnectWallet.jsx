import React from 'react';
import Metamask from '../../assets/images/home/metamask.png';
import WalletConnect from '../../assets/images/home/walletConnect.png';

const ConnectWallet = () => (
  <div className="w-[500px] rounded-[8px] p-5 border border-1-solid center bg-[#fff]">
    <div className="flex justify-between border-b">
      <h2 className="text-[#333] text-[24px] font-bold">Connect Wallet</h2>
      <button type="button" className="align-end justify-end">X</button>
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
);

export default ConnectWallet;

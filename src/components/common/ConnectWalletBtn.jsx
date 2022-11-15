/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
import React, { useState } from 'react';

const ConnectWalletBtn = ({ setModal }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleState = () => {
    setIsClicked(!isClicked);
    setModal = isClicked;
    console.log(setModal);
  };
  return (
    <div>
      <button onClick={() => setModal('modal-active')} type="button" className="hover:opacity-[0.4] rounded-[10px] bg-[#A02279] px-[21px] py-[12px] text-[#fff]">Connect wallet</button>
    </div>
  );
};

export default ConnectWalletBtn;

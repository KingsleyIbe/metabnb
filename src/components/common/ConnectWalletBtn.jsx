import React, { useState } from 'react';

const ConnectWalletBtn = () => {
  const [isOpen, setIsOpen] = useState();

  const openMenu = () => {
    if (isOpen === false) {
      setIsOpen(true);
      localStorage.setItem('isOpen', 'true');
      console.log(isOpen);
    } else {
      setIsOpen(false);
      localStorage.setItem('isOpen', 'false');
      console.log(isOpen);
    }
  };
  return (
    <div>
      <button onClick={openMenu} type="button" className="hover:opacity-[0.4] rounded-[10px] bg-[#A02279] px-[21px] py-[12px] text-[#fff]">Connect wallet</button>
    </div>
  );
};

export default ConnectWalletBtn;

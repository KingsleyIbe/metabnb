import React from 'react';
import Metamask from '../../assets/images/home/metamask.png';

const ConnectWallet = () => (
  <div>
    <div>
      <h2>Connect Wallet</h2>
      <span>X</span>
    </div>
    <hr />
    <div className="border border-1-solid flex gap-10">
      <div className="flex gap-2 items-center flex-end">
        <img src={Metamask} alt="Metamask connect logo" />
        <h3>Metamask</h3>
      </div>
      <div>
        <span> &gt; </span>
      </div>
    </div>
  </div>
);

export default ConnectWallet;

import React, { useState } from 'react';
import ConnectWallet from '../common/ConnectWallet';
import Footer from '../common/Footer';
import Header from '../common/Header';
import MobileHeader from '../common/MobileHeader';
import HouseCards from './HouseCards.jsx';
import HouseCardsHeader from './HouseCardsHeader';
import Intro from './Intro';
import MetaBnbNFT from './MetaBnbNFT';
import PartnerLogo from './PartnerLogo';

const Home = () => {
  const [modal, setModal] = useState('inactive');
  return (
    <div>
      {/* className={`${!isOpen ? 'opacity-[0.2]' : 'opacity-1'}`} */}
      <>
        <Header setModal={setModal} />
        <MobileHeader />
        <div className="">
          <Intro />
          <PartnerLogo />
          <HouseCardsHeader />
          <HouseCards />
          <MetaBnbNFT />
          <Footer />
        </div>
      </>
      {modal === 'wallet-active' && (
      <ConnectWallet setModal={setModal} />
      )}
    </div>
  );
};

export default Home;

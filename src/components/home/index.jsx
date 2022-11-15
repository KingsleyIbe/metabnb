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
  const [word, setWord] = useState(false);
  const openModal = () => {
    setWord(!word);
  };
  return (
    <>
      <div className={`${word ? 'change-bg' : 'opacity-[1]'} relative lg:block`}>
        <Header changeWord={openModal} />
        <MobileHeader />
        <div>
          <Intro />
          <PartnerLogo />
          <HouseCardsHeader />
          <HouseCards />
          <MetaBnbNFT />
          <Footer />
        </div>
      </div>
      {word ? (<div className="relative"><ConnectWallet /></div>) : ''}
    </>
  );
};

export default Home;

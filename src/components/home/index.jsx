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
    // localStorage.setItem('modalState', isOpen);
    // console.log(isOpen);
  };

  return (

    <>
      <div className={`${word ? 'opacity-[0.6]' : 'opacity-[1]'} relative hidden p-10 lg:block`}>
        <Header changeWord={openModal} />
        <MobileHeader />
        <div className={`${word ? 'opacity-[0.6]' : 'opacity-[1]'}`}>
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

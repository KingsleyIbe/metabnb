import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import MobileHeader from '../common/MobileHeader';
import HouseCards from './HouseCards.jsx';
import HouseCardsHeader from './HouseCardsHeader';
import Intro from './Intro';
import MetaBnbNFT from './MetaBnbNFT';
import PartnerLogo from './PartnerLogo';

const Home = () => {
  const modalState = localStorage.getItem('modalState');
  return (
    <>
      <div className="relative">
        <Header />
        <MobileHeader />
        <div className={`${modalState ? 'opacity-[1]' : 'opacity-[0.1]'}`}>
          <Intro />
          <PartnerLogo />
          <HouseCardsHeader />
          <HouseCards />
          <MetaBnbNFT />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;

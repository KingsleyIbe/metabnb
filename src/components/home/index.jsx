import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import MobileHeader from '../common/MobileHeader';
import HouseCards from './HouseCards.jsx';
import HouseCardsHeader from './HouseCardsHeader';
import Intro from './Intro';
import MetaBnbNFT from './MetaBnbNFT';
import PartnerLogo from './PartnerLogo';

const Home = () => (
  <>
    <div className="relative">
      <Header />
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
  </>
);

export default Home;

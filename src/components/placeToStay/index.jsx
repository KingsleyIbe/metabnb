import React, { useState } from 'react';
import ConnectWallet from '../common/ConnectWallet';
import Footer from '../common/Footer';
import Header from '../common/Header';
import MobileHeader from '../common/MobileHeader';
import FilterBtns from './FilterBtns';
import HouseCards from './HouseCards.jsx';

const PlaceToStay = () => {
  const [word, setWord] = useState(false);
  const openModal = () => {
    setWord(!word);
  };
  return (
    <>
      <div className={`${word ? 'change-bg' : 'opacity-[1]'} relative lg:block`}>
        <div className="px-10">
          <Header changeWord={openModal} />
        </div>
        <MobileHeader />
      </div>
      <div className={`${word ? 'change-bg' : 'opacity-[1]'}`}>
        <FilterBtns />
        <HouseCards />
        <Footer />
      </div>
      {word ? (<div className="relative"><ConnectWallet /></div>) : ''}
    </>
  );
};

export default PlaceToStay;

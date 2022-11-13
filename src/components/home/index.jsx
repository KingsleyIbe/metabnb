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
  const isOpen = localStorage.getItem('isOpen');
  console.log(isOpen);

  return (
    <div className={`${!isOpen ? 'opacity-[0.2]' : 'opacity-1'} lg:flex lg:flex-col lg:items-center lg:justify-center`}>
      <>
        <Header />
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
      {!isOpen ? (
        <ConnectWallet />
      ) : (
        null
      )}
    </div>
  );
};

export default Home;

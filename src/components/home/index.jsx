import ConnectWallet from '../common/ConnectWallet';
import Footer from '../common/Footer';
import Header from '../common/Header';
import HouseCards from './HouseCards.jsx';
import HouseCardsHeader from './HouseCardsHeader';
import Intro from './Intro';
import MetaBnbNFT from './MetaBnbNFT';
import PartnerLogo from './PartnerLogo';

const Home = () => {
  const isOpen = sessionStorage.getItem('isOpen');

  return (
    <div className={`${!isOpen ? 'opacity-[0.2]' : 'opacity-1'} flex flex-col items-center justify-center`}>
      <>
        <Header />
        <Intro />
        <PartnerLogo />
        <HouseCardsHeader />
        <HouseCards />
        <MetaBnbNFT />
        <Footer />
      </>
      {isOpen ? (
        <ConnectWallet />
      ) : (
        null
      )}
    </div>
  );
};

export default Home;

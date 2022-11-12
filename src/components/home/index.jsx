import Header from '../common/Header';
import HouseCards from './HouseCards.jsx';
import HouseCardsHeader from './HouseCardsHeader';
import Intro from './Intro';
import MetaBnbNFT from './MetaBnbNFT';
import PartnerLogo from './PartnerLogo';

const Home = () => (
  <div className="flex flex-col items-center justify-center">
    <Header />
    <Intro />
    <PartnerLogo />
    <HouseCardsHeader />
    <HouseCards />
    <MetaBnbNFT />
  </div>
);
export default Home;

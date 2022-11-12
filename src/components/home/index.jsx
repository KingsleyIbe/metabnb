import Header from '../common/Header';
import HouseCards from './HouseCards.jsx';
import HouseCardsHeader from './HouseCardsHeader';
import Intro from './Intro';
import PartnerLogo from './PartnerLogo';

const Home = () => (
  <div className="flex flex-col items-center justify-center">
    <Header />
    <Intro />
    <PartnerLogo />
    <HouseCardsHeader />
    <HouseCards />
  </div>
);
export default Home;

import Header from '../common/Header';
import HouseCards from './HouseCards.jsx';
import Intro from './Intro';
import PartnerLogo from './PartnerLogo';

const Home = () => (
  <div className="flex flex-col items-center justify-center">
    <Header />
    <Intro />
    <PartnerLogo />
    <HouseCards />
  </div>
);
export default Home;

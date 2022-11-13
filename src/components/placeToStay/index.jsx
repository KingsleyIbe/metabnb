import Footer from '../common/Footer';
import Header from '../common/Header';
import MobileHeader from '../common/MobileHeader';
import FilterBtns from './FilterBtns';
import HouseCards from './HouseCards.jsx';

const PlaceToStay = () => (
  <div>
    <div className="">
      <div className="px-10">
        <Header />
      </div>
      <MobileHeader />
    </div>
    <FilterBtns />
    <HouseCards />
    <Footer />
  </div>
);

export default PlaceToStay;

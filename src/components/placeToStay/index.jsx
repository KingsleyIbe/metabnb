import Footer from '../common/Footer';
import Header from '../common/Header';
import FilterBtns from './FilterBtns';
import HouseCards from './HouseCards.jsx';

const PlaceToStay = () => (
  <div>
    <div className="flex flex-col items-center justify-center">
      <Header />
    </div>
    <FilterBtns />
    <HouseCards />
    <Footer />
  </div>
);

export default PlaceToStay;

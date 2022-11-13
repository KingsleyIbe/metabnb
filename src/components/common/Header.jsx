import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import ConnectWallet from './ConnectWallet';
import Data from './NavItems';

const Header = () => {
  const data = Data;

  const navLinksStyles = ({ isActive }) => ({
    borderBottom: isActive ? '4px solid #A02279' : 'none',
  });

  return (
    <header className="p-10">
      <nav className="hidden lg:flex lg:flex-row lg:items-center lg:gap-[170px] lg:max-w-[1240px]">
        <span>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </span>
        <span className="flex gap-5 items-center text-[#434343] text-[20px]">
          {data && data.map((item) => (
            <ul key={item.id}>
              <li className="hover:opacity-[0.4]"><NavLink to={item.href} style={navLinksStyles}>{item.name}</NavLink></li>
            </ul>
          ))}
        </span>
        <ConnectWallet />
      </nav>
    </header>
  );
};

export default Header;

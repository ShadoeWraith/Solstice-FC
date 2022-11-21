import './Navbar.scss';
import filigree from '../../assets/images/Filigree.png';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={filigree} alt='filigree'></img>
      <div className='nav-list'>
        <Link to='/'>
          <button className='list-item'>Home</button>
        </Link>
        <Link to='members'>
          <button className='list-item'>Members</button>
        </Link>
      </div>
      <div className='nav-list'>
        <Link to='events'>
          <button className='list-item'>Events</button>
        </Link>
        <Link to='venue'>
          <button className='list-item'>Venue</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

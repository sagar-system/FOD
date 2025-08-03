import './navbar.css';
import images from './newlogo1.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCab } from '@fortawesome/free-solid-svg-icons';
import {Link }from 'react-router-dom'

export default function Navbar() {  // Changed to PascalCase
  return (
    <div className='navbar'>
      <div className='navbar-logo img'>
        <img src={images} alt="Logo" />  {/* Added alt attribute */}
      </div>

      <ul className='navbar-list'>
        {/* <FontAwesomeIcon icon={faCab} className='car-logo'/> */}
        <li className='navbar-item'><Link to="/home">Home</Link></li>  {/* Changed className */}
        <li className='navbar-item'><Link to="/subscribe">SUBSCRIBE</Link></li>
        <li className='navbar-item'><Link to="/contact">CONTACTS</Link></li>
        <li className='navbar-item'><Link to="/about">ABOUT</Link></li>
        <li className='search'>
          <input type="search" placeholder='SEARCH 🔍' />
           
        </li>
      </ul>
    </div>
  )
}
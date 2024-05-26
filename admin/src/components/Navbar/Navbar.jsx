import { assets } from '../../assets/assets';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="Logo of admin" />
      <img className="profile" src={assets.profile_image} alt="Profile image" />
    </div>
  );
};

export default Navbar;

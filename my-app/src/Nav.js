import './index.css';
import logo from './logo.svg';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='Nav'>
            <NavLink to='/'><img src={logo} alt='' className='logo' /></NavLink>
            <div className='NavLinks'>
                <NavLink to='/' className='NavLink'>Home</NavLink>
                <NavLink to='/pages/Trending' className='NavLink'>Trending</NavLink>
                <NavLink to='/pages/Notifications' className='NavLink'>Notifications</NavLink>
                <NavLink to='/pages/Messages' className='NavLink'>Messages</NavLink>
                <NavLink to='/pages/Account' className='NavLink'>Account</NavLink>
            </div>
        </div>
    );
}
 
export default Nav
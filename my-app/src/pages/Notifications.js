import { NavLink } from 'react-router-dom';
import '../index.css';

const Notifications = () => {
    return (
        <>
            <h1 className='page-title'>Notifications</h1>
            <div className='container'>
                <div className='nNav'>
                    <div className='nNavLinks'>
                        <NavLink to='/pages/Notifications' className='nNavLink'>Notifications</NavLink>
                        <NavLink to='/pages/notifications/Verified' className='nNavLink'>Verified</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Notifications;
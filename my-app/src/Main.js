import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Messages from './pages/Messages';
import Trending from './pages/Trending';
import Notifications from './pages/Notifications';
import Account from './pages/Account';
import News from './pages/trend/News';
import Sports from './pages/trend/Sports';
import Entertainment from './pages/trend/Entertainment';
import Verified from './pages/notifications/Verified';

const Main = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/pages/Trending' element={<Trending />}/>
            <Route exact path='/pages/Messages' element={<Messages />}/>
            <Route exact path='/pages/Notifications' element={<Notifications />}/>
            <Route exact path='/pages/Account' element={<Account />}/>
            <Route exact path='/pages/trend/News' element={<News />}/>
            <Route exact path='/pages/trend/Sports' element={<Sports />}/>
            <Route exact path='/pages/trend/Entertainment' element={<Entertainment />}/>
            <Route exact path='/pages/notifications/Verified' element={<Verified />}/>
        </Routes>
    );
}
 
export default Main;
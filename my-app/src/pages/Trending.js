import '../index.css';
import { NavLink } from 'react-router-dom';


const Trending = () => {

    return (
        <>
            <h1 className='page-title'>Trending</h1>
            <div className='container'>
                <div className='trendNav'>
                    <div className='trendLinks'>
                        <NavLink to='/pages/Trending' className='trendLink'>Trending</NavLink>
                        <NavLink to='/pages/trend/News' className='trendLink'>News</NavLink>
                        <NavLink to='/pages/trend/Sports' className='trendLink'>Sports</NavLink>
                        <NavLink to='/pages/trend/Entertainment' className='trendLink'>Entertainment</NavLink>
                    </div>
                </div>
                <div className='onetrend'>

                </div>
                <div className='trend'></div>
                <div className='trend'></div>
            </div>
        </>
    );
}
 
export default Trending;
import '../index.css';

const Home = () => {
    return (
        <>
            <h1 className='page-title'>Latest Post</h1>
            <div className='container'>

            </div>
            <div className='scontainer'>
                <input placeholder='Search...' className='searchbox'/>
            </div>
            <div className='tcontainer'>
                <h3 className='page-subtitle'>Trending</h3>
            </div>
            <div className='fpcontainer'>
                <h3 className='page-subtitle'>Who to follow</h3>
            </div>
        </>
    );
}
 
export default Home;
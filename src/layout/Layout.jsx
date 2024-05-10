import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
// import Footer1 from '../components/Footer1';
// import Header from '../components/Header';
import Footer1 from '../components/Footer';

const Layout = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <Navbar></Navbar>
                {/* <Header></Header> */}
            </div>
            {/* Outlet */}
            <div className='container mx-auto min-h-[calc(100vh-350px)]'>
                <Outlet></Outlet>
            </div>
            <div className=''>
                <Footer1></Footer1>
            </div>
        </div>
    );
};

export default Layout;
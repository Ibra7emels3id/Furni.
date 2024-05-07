import React from 'react';
import Navbar from './Navbar';
import MainHeader from './MainHeader';

const Header = () => {
    return (
        <>
            <header className=' bg-emerald-900 w-full h-8/12'>
                <Navbar />
                <MainHeader/>
            </header>
        </>
    );
}

export default Header;

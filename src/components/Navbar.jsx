import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import HandleUser from './HandleUser';
import HandelCountCart from './HandelCountCart';



// import style css
import './style/Navbar.css'

// import Component Style Icon 
import './style/IconNavBar.css'


// import Icons Material ui 
import PersonIcon from '@mui/icons-material/Person';
import ComponentListLinks from './ComponentListLinks';



const Navbar = () => {
    const [bgNavbar, setbgNavbar] = useState();
    const [ClickIcons, setClickIcons] = useState('hidden')


    // handle scroll header change
    window.onscroll = () => {
        if (window.scrollY > 100) {
            setbgNavbar('bg-emerald-950')
        }
        else {
            setbgNavbar('')
        }
    }



    // handle Click iCon List
    const handleListIcon = () => {
        if (ClickIcons === 'hidden') {
            setClickIcons('block')
        } else {
            setClickIcons('hidden')
        }
    }



    return (
        <>
            <nav className={`Navbar ${bgNavbar}   z-50 flex justify-between px-3 md:px-10  py-5 items-center fixed w-full`}>
                <div className="logo">
                    <Link to='/to'><h1 className='  text-white font-mono text-4xl'>Furni.</h1></Link>
                </div>
                <div className="links hidden lg:flex">
                    <ul className='flex gap-3 items-center'>
                        <li>
                            <NavLink className=' text-zinc-400 p-3' to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className=' text-zinc-400 p-3 hover:text-white ' to='/shop'>Shop</NavLink>
                        </li>
                        <li>
                            <NavLink className=' text-zinc-400 p-3 hover:text-white' to='/about'>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink className=' text-zinc-400 p-3 hover:text-white' to='/services'>services</NavLink>
                        </li>
                        <li className=' relative'>
                            <NavLink className='Pages transition-opacity text-zinc-400 p-3 hover:text-white flex items-center ' to='/blog'>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink className=' text-zinc-400 p-3 hover:text-white' to='/contact'>Contact Us</NavLink>
                        </li>
                        <li className='px-3'>
                            <Link className='text-zinc-400 p-3 hover:text-white'><HandelCountCart /></Link>
                        </li>
                        <li>
                            <HandleUser />
                        </li>
                        <li className='px-3 '>
                            <PersonIcon sx={{ fontSize: '30px', color: '#9b9b9b', cursor: 'pointer' }} />
                        </li>
                    </ul>
                </div>
                <label className="bar flex lg:hidden" htmlFor="check">
                    <input onClick={() => {
                        handleListIcon()
                    }} type="checkbox" id="check" />
                    <span className="top"></span>
                    <span className="middle"></span>
                    <span className="bottom"></span>
                </label>
                <label className="hamburger hidden">
                    <input onClick={() => {
                        // handleListIcon()
                    }} type="checkbox" />
                    <svg viewBox="0 0 32 32">
                        <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path className="line" d="M7 16 27 16"></path>
                    </svg>
                </label>
            </nav>
            <ComponentListLinks AddList={ClickIcons} />
        </>
    );
}

export default Navbar;

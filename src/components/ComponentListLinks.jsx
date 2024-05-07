import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import HandleUser from './HandleUser';
import HandelCountCart from './HandelCountCart';

// import Icons Material ui 
import PersonIcon from '@mui/icons-material/Person';

// import style css
import './style/ComponentListLinks.css'

const ComponentListLinks = ({AddList}) => {
    return (
        <>
            <div className={`ComponentListLinks ${AddList} flex items-center justify-center  fixed z-30 top-24   w-full left-0`}>
                <ul className='flex flex-col justify-center w-10/12 m-auto bg-emerald-950  rounded-2xl p-10  gap-5 items-center'>
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
                    <li className='px-3 relative'>
                        <Link className='text-zinc-400 p-3 hover:text-white relative'><HandelCountCart /></Link>
                    </li>
                    <li>
                        <HandleUser />
                    </li>
                    <li className='px-3 '>
                        <PersonIcon sx={{ fontSize: '30px', color: '#9b9b9b', cursor: 'pointer' }} />
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ComponentListLinks;

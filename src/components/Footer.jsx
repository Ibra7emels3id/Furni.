import React from 'react';
import { Link } from 'react-router-dom';

// import Imges
import Sofa from '../../imges/sofa.png'


// import icons ui
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


// import style css
// import './style/Footer.css'

const Footer = () => {
    return (
        <>
            <footer className=' m-auto bg-white pt-20 relative mt-32'>
                <div className="container-footer w-10/12 m-auto ">
                    <div className="contact-footer mt-32 md:mt-3">
                        <div className="form flex flex-col ">
                            <h4 className='mb-6 flex items-center '><EmailIcon sx={{ color: 'gray' }} /><span className='mx-3 text-green-700 font-medium'>Subscribe to Newsletter</span></h4>
                            <form action="" className='grid grid-cols-1 md:grid-cols-3 gap-4 my-1'>
                                <input className=' border h-14 rounded-2xl focus:border-green-950 border-neutral-500 px-2' type="text" name="" id="" placeholder='Enter your Name ' />
                                <input className=' border h-14 rounded-2xl focus:border-green-950 border-neutral-500 px-2' type="email" name="" id="" placeholder='Enter your Email ' />
                                <button className=' border h-14 rounded-2xl focus:border-green-800 border-neutral-500 bg-green-950 w-32 text-white'><TelegramIcon /></button>
                            </form>
                        </div>
                        <div className="sofa absolute right-2 md:right-24 -top-32 w-80">
                            <img src={Sofa} alt="" />
                        </div>
                    </div>
                    <div className="info-footer grid grid-cols-1 lg:grid-cols-5  gap-y-12 mt-16">
                        <div className="box col-span-5 lg:col-span-2">
                            <div className="title">
                                <h3 className='text-5xl text-green-950 font-medium'>Furni.</h3>
                            </div>
                            <p className=' text-neutral-600 my-5 font-sans'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>
                            <div className="links flex gap-2">
                                <Link className=' h-12 w-12 bg-green-100 flex items-center justify-center rounded-full text-green-950' to=''><FacebookIcon /></Link>
                                <Link className=' h-12 w-12 bg-green-200 flex items-center justify-center rounded-full text-green-950' to=''><XIcon /></Link>
                                <Link className=' h-12 w-12 bg-green-200 flex items-center justify-center rounded-full text-green-950' to=''><WhatsAppIcon /></Link>
                                <Link className=' h-12 w-12 bg-green-200 flex items-center justify-center rounded-full text-green-950' to=''><YouTubeIcon /></Link>
                                <Link className=' h-12 w-12 bg-green-200 flex items-center justify-center rounded-full text-green-950' to=''><InstagramIcon /></Link>
                            </div>
                        </div>
                        <div className='col-span-3 grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-4 md:text-start text-center'>
                            <div className="box">
                                <div className="links pl-0 md:pl-10">
                                    <ul className='flex gap-3 flex-col'>
                                        <li>
                                            <Link className=' font-sans' to='/About'>About Us</Link>
                                        </li>
                                        <li>
                                            <Link className='font-sans' to='/services'>services</Link>
                                        </li>
                                        <li className=' relative'>
                                            <Link className='font-sans' to='/Blog'>Blog</Link>
                                        </li>
                                        <li>
                                            <Link className='font-sans' to='/contact'>Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="box">
                                <div className="links pl-0 md:pl-10">
                                    <ul className='flex gap-3 flex-col'>
                                        <li>
                                            <Link className=' font-sans' to='/About'>Support</Link>
                                        </li>
                                        <li>
                                            <Link className=' font-sans ' to='/services'>Knowledge base</Link>
                                        </li>
                                        <li className=' relative'>
                                            <Link className='font-sans ' to='/Blog'>Live chat</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="box">
                                <div className="links pl-0 md:pl-10">
                                    <ul className='flex gap-3 flex-col'>
                                        <li>
                                            <Link className='font-sans' to='/About'>Jobs</Link>
                                        </li>
                                        <li>
                                            <Link className=' font-sans ' to='/services'>Our team</Link>
                                        </li>
                                        <li className=' relative'>
                                            <Link className='font-sans' to='/Blog'>Leadership</Link>
                                        </li>
                                        <li>
                                            <Link className='font-sans' to='/contact'>Privacy Policy</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="box">
                                <div className="links pl-0 md:pl-10">
                                    <ul className='flex gap-3 flex-col'>
                                        <li>
                                            <Link className='font-sans' to='/About'>Nordic Chair</Link>
                                        </li>
                                        <li>
                                            <Link className=' font-sans ' to='/services'>Kruzo Aero</Link>
                                        </li>
                                        <li className=' relative'>
                                            <Link className='font-sans' to='/Blog'>Ergonomic Chair</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright border-t-2 mt-20 p-10 text-center">
                        <p className=' text-neutral-600 font-sans text-xl'>Copyright © 2021 Furni. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductMainSection from '../components/ProductMainSection';
import Testimonials from '../components/Testimonials';


// imoort icons ui
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';




const Contact = () => {
    return (
        <>
            <header className=' bg-emerald-900 w-full h-8/12'>
                <Navbar />
                <div className="manheader overflow-hidden">
                    <div className='head w-11/12 m-auto flex items-center justify-between pt-44 pb-20'>
                        <div className="left w-full">
                            <h4 className=' py-4 font-extrabold text-5xl md:text-6xl  text-white'>
                                Contact
                            </h4>
                            <p className=' text-gray-400 text-base my-6 w-9/12'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                        </div>
                    </div>
                </div>
            </header>
            <div className="contact  w-11/12 md:w-10/12 lg:w-7/12 m-auto py-24">
                <div className="icons grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 py-10">
                    <p className='flex items-center '><span className=' bg-green-950 h-12 w-12 flex items-center justify-center rounded mr-2'><FmdGoodIcon sx={{ fontSize: '30px' , color: 'white' }}/></span><span className=' font-sans text-sm'>43 Raymouth Rd. Baltemoer, London 3910</span></p>
                    <p className='flex items-center '><span className=' bg-green-950 h-12 w-12 flex items-center justify-center rounded mr-2'><MailIcon sx={{ fontSize: '30px' , color: 'white' }}/></span><span className=' font-sans text-sm'>info@yourdomain.com</span></p>
                    <p className='flex items-center '><span className=' bg-green-950 h-12 w-12 flex items-center justify-center rounded mr-2'><CallIcon sx={{ fontSize: '30px' , color: 'white' }}/></span><span className=' font-sans text-sm'>+010123456789</span></p>
                </div>
                <form action="" className='flex flex-col gap-4'>
                    <div className="input-name grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input className='px-2 rounded h-12 focus:border-lime-700' type="text" placeholder='Enter your First Name' />
                        <input className='px-2 rounded h-12 focus:border-lime-700' type="text" placeholder='Enter your First Last' />
                    </div>
                    <input className='h-12 px-2 rounded focus:border-lime-700' type="email" name="" id="" placeholder='Enter Your Email'/>
                    <textarea className='h-48 p-3 rounded focus:border-lime-700' name="" id="" placeholder='Enter your message here...'>
                        
                    </textarea>
                    <button   className=' bg-green-950 h-12 text-white rounded'>
                        Send Message
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Contact;

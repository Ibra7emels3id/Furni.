import React from 'react';
import { Link } from 'react-router-dom';

// import imges 
import image from '../../imges/couch.png'

// import style css
import './style/manheader.css'

const MainHeader = () => {
    return (
        <>
            <div className="manheader pb-6 overflow-hidden">
                <div className='head w-11/12 m-auto grid grid-cols-1 lg:grid-cols-2 gap-y-5 pt-44'>
                    <div className="left flex flex-col justify-center ">
                        <h4 className=' py-4 font-extrabold sm:text-6xl sm:text-start text-center text-4xl  text-white'>
                            Modern Interior <br/> Design Studio
                        </h4>
                        <p className=' text-gray-400 text-base mb-3 w-12/12 sm:text-start sm:m-0 text-center m-auto'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                        <div className="flex gap-4 sm:m-0 m-auto">
                            <Link className=' rounded-3xl py-3 px-6 text-white bg-yellow-500 mt-4 block' to=''>Read More</Link>
                            <Link className=' border-2 border-gray-500 rounded-3xl py-3 px-6 text-white  mt-4 block hover:border-white'  to='/contact'>Contact Us</Link>
                        </div>
                    </div>
                    <div className="right">
                        <div className="imge   w-12/12  flex items-center justify-end relative">
                            <img className=' z-10 px-10' src={image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainHeader;

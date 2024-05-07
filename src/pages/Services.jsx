import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductMainSection from '../components/ProductMainSection';
import Testimonials from '../components/Testimonials';



// import imges why choose
import img1 from '../../imges/truck.svg'
import img2 from '../../imges/bag.svg'
import img3 from '../../imges/support.svg'
import img4 from '../../imges/return.svg'



const Services = () => {
    return (
        <>
            <header className=' bg-emerald-900 w-full h-8/12'>
                <Navbar />
                <div className="manheader overflow-hidden">
                    <div className='head w-11/12 m-auto flex items-center justify-between pt-44 pb-20'>
                        <div className="left w-2/4">
                            <h4 className=' py-4 font-extrabold text-6xl text-white'>
                                Services
                            </h4>
                            <p className=' text-gray-400 text-base my-6 w-9/12'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                        </div>
                    </div>
                </div>
            </header>
            <div className="products grid grid-cols-4 py-32 w-10/12 m-auto gap-10">
                <div className="box">
                    <div className="imge mb-5 relative">
                        <img src={img1} alt="" />
                    </div>
                    <h6 className='text-lg my-1 font-semibold'>Fast & Free Shipping</h6>
                    <p className=' text-gray-600 font-normal font-sans'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
                <div className="box">
                    <div className="imge mb-5 relative">
                        <img src={img2} alt="" />
                    </div>
                    <h6 className='text-lg my-1 font-semibold'>Easy to Shop</h6>
                    <p className=' text-gray-600 font-normal font-sans'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
                <div className="box">
                    <div className="imge mb-5 relative">
                        <img src={img3} alt="" />
                    </div>
                    <h6 className='text-lg my-1 font-semibold'>24/7 Support</h6>
                    <p className=' text-gray-600 font-normal font-sans'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
                <div className="box">
                    <div className="imge mb-5 relative">
                        <img src={img4} alt="" />
                    </div>
                    <h6 className='text-lg my-1 font-semibold'>Hassle Free Returns</h6>
                    <p className=' text-gray-600 font-normal font-sans'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
                <div className="box">
                    <div className="imge mb-5 relative">
                        <img src={img1} alt="" />
                    </div>
                    <h6 className='text-lg my-1 font-semibold'>Fast & Free Shipping</h6>
                    <p className=' text-gray-600 font-normal font-sans'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
                <div className="box">
                    <div className="imge mb-5 relative">
                        <img src={img2} alt="" />
                    </div>
                    <h6 className='text-lg my-1 font-semibold'>Easy to Shop</h6>
                    <p className=' text-gray-600 font-normal font-sans'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
                <div className="box">
                    <div className="imge mb-5 relative">
                        <img src={img3} alt="" />
                    </div>
                    <h6 className='text-lg my-1 font-semibold'>24/7 Support</h6>
                    <p className=' text-gray-600 font-normal font-sans'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
                <div className="box">
                    <div className="imge mb-5 relative">
                        <img src={img4} alt="" />
                    </div>
                    <h6 className='text-lg my-1 font-semibold'>Hassle Free Returns</h6>
                    <p className=' text-gray-600 font-normal font-sans'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
            </div>
            <ProductMainSection/>
            <Testimonials/>
            <Footer />
        </>
    );
}

export default Services;

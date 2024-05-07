import React from 'react';

// import style css
import './style/WhyChoose.css';

// import imges why choose
import imgWhoChoose from '../../imges/why-choose-us-img.jpg'
import img1 from '../../imges/truck.svg'
import img2 from '../../imges/bag.svg'
import img3 from '../../imges/support.svg'
import img4 from '../../imges/return.svg'

const WhyChoose = () => {
    return (
        <>
            <div className="WhyChoose m-auto w-10/12 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-36">
                    <div className="left pt-5 ">
                        <div className="title">
                            <h1 className=' text-gray-800 font-bold text-2xl md:text-5xl'>Why Choose Us</h1>
                            <p className='my-7 font-normal text-gray-400'>
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                            </p>
                        </div>
                        <div className="boxs grid grid-cols-2 gap-10 mt-10">
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
                    </div>
                    <div className="rigth  flex items-end justify-end">
                        <div className="img relative  w-10/12">
                            <img className='w-full rounded-3xl' src={imgWhoChoose} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WhyChoose;

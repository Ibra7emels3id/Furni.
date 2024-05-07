import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// import './styles.css';

// import imges Prson
import img1 from '../../imges/person-1.jpg'
// import img2 from '../../imges/person-2.jpg'
// import img3 from '../../imges/person-3.jpg'
// import img4 from '../../imges/person-4.jpg'

const Testimonials = () => {
    return (
        <>
            <section>
                <div className="Testimonials py-10">
                    <div className="title text-center">
                        <h3 className='text-4xl font-bold'>Testimonials</h3>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Autoplay, Navigation]}
                        className="Testimonials-mySwiper"
                    >
                        <SwiperSlide className='text-center'>
                            <div className="brg w-11/12 md:w-8/12 m-auto my-10">
                                <p className=' text-neutral-700 font-sans'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                            </div>
                            <div className="account">
                                <div className="img w-32 m-auto flex items-center justify-center mb-8">
                                    <img className='rounded-full' src={img1} alt="" />
                                </div>
                                <p className='text-xl font-bold'>Maria Jones</p>
                                <span>CEO, Co-Founder, XYZ Inc.</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='text-center'>
                            <div className="brg w-11/12 md:w-8/12 m-auto my-10">
                                <p className=' text-neutral-700 font-sans'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                            </div>
                            <div className="account">
                                <div className="img w-32 m-auto flex items-center justify-center mb-8">
                                    <img className='rounded-full' src={img1} alt="" />
                                </div>
                                <p className='text-xl font-bold'>Maria Jones</p>
                                <span>CEO, Co-Founder, XYZ Inc.</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='text-center'>
                            <div className="brg w-11/12 md:w-8/12 m-auto my-10">
                                <p className=' text-neutral-700 font-sans'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                            </div>
                            <div className="account">
                                <div className="img w-32 m-auto flex items-center justify-center mb-8">
                                    <img className='rounded-full' src={img1} alt="" />
                                </div>
                                <p className='text-xl font-bold'>Maria Jones</p>
                                <span>CEO, Co-Founder, XYZ Inc.</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='text-center'>
                            <div className="brg w-11/12 md:w-8/12 m-auto my-10">
                                <p className=' text-neutral-700 font-sans'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                            </div>
                            <div className="account">
                                <div className="img w-32 m-auto flex items-center justify-center mb-8">
                                    <img className='rounded-full' src={img1} alt="" />
                                </div>
                                <p className='text-xl font-bold'>Maria Jones</p>
                                <span>CEO, Co-Founder, XYZ Inc.</span>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default Testimonials;

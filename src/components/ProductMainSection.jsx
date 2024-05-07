import React, { useEffect, useState } from 'react';
import MainCardSlics from './MainCardSlics';


// import style css 
import './style/ProductMainSection.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

// import imges Product 
import product1 from '../../imges/product-1.png'
import product2 from '../../imges/product-2.png'
import product3 from '../../imges/product-3.png'

// import icons ui 
import AddIcon from '@mui/icons-material/Add';


const ProductMainSection = () => {
    const [Products, setProducts] = useState([])

    // Fetch Data 
    const GetProdects = async () => {
        const Res = await fetch(`http://localhost:3000/Featured`)
        const Data = await Res.json()
        // console.log(Data);
        setProducts(Data)
    }
    // handle Data Api
    useEffect(() => {
        GetProdects()
    }, [])

    return (
        <>
            <section>
                <div className="main-product grid grid-cols-1 lg:grid-cols-3 gap-y-10  p-10 md:p-20">
                    <div className="text col-span-1 flex flex-col pt-6 ">
                        <h5 className=' font-bold text-3xl md:text-5xl text-green-950'>Crafted with excellent material.</h5>
                        <p className='py-5'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                        <button className=' bg-neutral-800 text-white rounded-3xl px-9 py-3 w-48'>Export</button>
                    </div>
                    <Swiper
                        className="mySwiper products grid grid-cols-3 col-span-2 gap-10" slidesPerView={3}
                        spaceBetween={30}
                        loop={{
                            true: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            550: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination, Autoplay]}
                    >
                        {Products.map((product) => {
                            return (
                                <>
                                    <SwiperSlide key={product.id}>
                                        <div key={product.id} className="cart pb-14 text-center relative">
                                            <div className="img">
                                                <img className=' z-50' src={product.image} alt="" />
                                            </div>
                                            <div className="tex">
                                                <h3 className='text-xl font-bold p-2 '>{product.title}</h3>
                                                <span>{product.price}$</span>
                                            </div>
                                            <div className="icons absolute bottom-5 opacity-0 left-1/2 transform -translate-x-1/2 z-40">
                                                <AddIcon sx={{ fontSize: '35px', backgroundColor: '#2e2e2e', color: 'white', borderRadius: '50%', cursor: 'pointer' }} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </>
                            )
                        })}
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default ProductMainSection;

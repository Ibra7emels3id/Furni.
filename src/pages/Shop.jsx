import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import GetProdects
import { GetProdects } from '../Features/ProductsSlise';

// import components
import Navbar from '../components/Navbar';
import MainHeader from '../components/MainHeader';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

const Shop = () => {
    
    
    // Get Data Api
    const dispatch = useDispatch()
    const Data = useSelector((state) => state.Products.prodects)
    const {isLoading} = useSelector((state) => state.Products)

    useEffect(() => {
        dispatch(GetProdects())
    }, [])

    // get all products
    const AllProducts = Data.map((item) => {
        return <Cards key={item.id} item={item}/>
    })


    return (
        <>
            <header className=' bg-emerald-900 w-full h-8/12'>
                <Navbar />
                <div className="manheader overflow-hidden">
                    <div className='head w-11/12 m-auto flex items-center justify-between pt-44 pb-20'>
                        <div className="left w-full">
                            <h4 className=' py-4 font-extrabold text-6xl text-white'>
                                Shop
                            </h4>
                            <p className=' text-gray-400 text-base my-6 md:w-5/12 w-full'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                        </div>
                    </div>
                </div>
            </header>
            <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-16 w-10/12 m-auto gap-10">
                {isLoading ? 'isLoading....': AllProducts}
            </div>
            <Footer/>
        </>
    );
}
    
export default Shop;

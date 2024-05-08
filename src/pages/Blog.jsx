import React from 'react';
import RecentBlog from '../components/RecentBlog';
import ProductMainSection from '../components/ProductMainSection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Blog = () => {
    return (
        <>
            <header className=' bg-emerald-900 w-full h-8/12'>
                <Navbar />
                <div className="manheader overflow-hidden">
                    <div className='head w-11/12 m-auto flex items-center justify-between pt-44 pb-20'>
                        <div className="left w-full">
                            <h4 className=' py-4 font-extrabold text-5xl md:text-6xl text-white'>
                                Blog
                            </h4>
                            <p className=' text-gray-400 text-base my-6 w-full md:w-9/12'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                        </div>
                    </div>
                </div>
            </header>
            <RecentBlog/>
            <Testimonials/>
            <Footer />
        </>
    );
}

export default Blog;

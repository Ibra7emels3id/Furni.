import React from 'react';
import { Link } from 'react-router-dom';

// import imges 
import post1 from '../../imges/post-1.jpg'
import post2 from '../../imges/post-2.jpg'
import post3 from '../../imges/post-3.jpg'

const RecentBlog = () => {
    return (
        <section>
            <div className="RecentBlog w-11/12 lg:w-10/12 m-auto py-16">
                <div className="titls flex justify-between items-center">
                    <h1 className='text-3xl font-medium'>Recent Blog</h1>
                    <Link>View All Posts</Link>
                </div>
                <div className="boxs grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 py-16 gap-5">
                    <div className="box1">
                        <div>
                            <img className='rounded-3xl' src={post1} alt="" />
                        </div>
                        <div className="text px-3 py-5">
                            <h3 className=' font-medium text-xl'>Small Space Furniture Apartment Ideas.</h3>
                            <p className='font-medium text-xl mt-5'>by Kristin Watson on Dec 12, 2021</p>
                        </div>
                    </div>
                    <div className="box1">
                        <div>
                            <img className='rounded-3xl' src={post2} alt="" />
                        </div>
                        <div className="text px-3 py-5">
                            <h3 className=' font-medium text-xl'>Small Space Furniture Apartment Ideas.</h3>
                            <p className='font-medium text-xl mt-5'>by Kristin Watson on Dec 12, 2021</p>
                        </div>
                    </div>
                    <div className="box1">
                        <div>
                            <img className='rounded-3xl' src={post3} alt="" />
                        </div>
                        <div className="text px-3 py-5">
                            <h3 className=' font-medium text-xl'>Small Space Furniture Apartment Ideas.</h3>
                            <p className='font-medium text-xl mt-5'>by Kristin Watson on Dec 12, 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RecentBlog;

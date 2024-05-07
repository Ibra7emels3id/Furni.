import React from 'react';
import { Link } from 'react-router-dom';

// import style css
import './style/Category.css'

// import imge Category
import img1 from '../../imges/1.png'
import img2 from '../../imges/2.png'
import img3 from '../../imges/3.png'

const Category = () => {
    return (
        <>
            <section>
                <div className="Category grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-10   w-10/12 m-auto my-16">
                    <div className="box flex items-center">
                        <div className="imge w-80 relative">
                            <img src={img1} alt="" />
                        </div>
                        <div className="text flex flex-col">
                            <h5 className='font-bold text-xl'>Nordic Chair</h5>
                            <p className=' font-medium text-gray-500 py-1'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                            <Link to='/shop'>Read Moor</Link>
                        </div>
                    </div>
                    <div className="box flex items-center">
                        <div className="imge w-80 relative">
                            <img src={img2} alt="" />
                        </div>
                        <div className="text flex flex-col">
                            <h5 className='font-bold text-xl'>Nordic Chair</h5>
                            <p className=' font-medium text-gray-500 py-1'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                            <Link to='/shop'>Read Moor</Link>
                        </div>
                    </div>
                    <div className="box flex items-center justify-start">
                        <div className="imge w-80 relative">
                            <img  src={img3} alt="" />
                        </div>
                        <div className="text flex flex-col">
                            <h5 className='font-bold text-xl'>Nordic Chair</h5>
                            <p className=' font-medium text-gray-500 py-1'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                            <Link to='/shop'>Read Moor</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Category;

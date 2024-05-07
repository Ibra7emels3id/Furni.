import React from 'react';

// import Style CSs
import './style/WeHelp.css'

// import imges grid
import grid1 from '../../imges/img-grid-1.jpg'
import grid2 from '../../imges/img-grid-2.jpg'
import grid3 from '../../imges/img-grid-3.jpg'



const WeHelp = () => {
    return (
        <>
            <div className="WeHelp w-10/12 m-auto grid grid-cols-1 lg:grid-cols-2 gap-y-16 py-32">
                <div className="left grid grid-cols-6 gap-5 relative">
                    <div className="img1 col-span-4 grid relative">
                        <img className='rounded-3xl' src={grid1} alt="" />
                        <div className="img3 h-full  absolute -right-10 w-9/12 md:-bottom-52 sm:-bottom-40 -bottom-24  ">
                            <img className='rounded-3xl' src={grid3} alt="" />
                        </div>
                    </div>
                    <div className="img2 col-span-2">
                        <img className='rounded-3xl' src={grid2} alt="" />
                    </div>
                </div>
                <div className="right px-2 md:px-10 py-5">
                    <h4 className='text-2xl font-medium text-gray-900 md:text-4xl'>We Help You Make Modern Interior Design</h4>
                    <p className='text-gray-400 my-7 font-normal'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
                    <ul className="list-unstyled list-disc grid grid-cols-2 p-5 gap-10">
                        <li className='text-gray-700 font-light'>Donec vitae odio quis nisl dapibus malesuada</li>
                        <li className='text-gray-700 font-light'>Donec vitae odio quis nisl dapibus malesuada</li>
                        <li className='text-gray-700 font-light'>Donec vitae odio quis nisl dapibus malesuada</li>
                        <li className='text-gray-700 font-light'>Donec vitae odio quis nisl dapibus malesuada</li>
                    </ul>
                    <button className='mt-5 bg-neutral-800 text-white rounded-3xl px-9 py-4 w-48'>Export</button>
                </div>
            </div>
        </>
    );
}

export default WeHelp;

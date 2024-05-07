import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';


// import imges 
import person1 from '../../imges/person-1.jpg'
import person2 from '../../imges/person_2.jpg'
import person3 from '../../imges/person_3.jpg'
import person4 from '../../imges/person_4.jpg'

const About = () => {
    return (
        <>
            <header className=' bg-emerald-900 w-full h-8/12'>
                <Navbar />
                <div className="manheader overflow-hidden">
                    <div className='head w-11/12 m-auto flex items-center justify-between pt-44 pb-20'>
                        <div className="left w-2/4">
                            <h4 className=' py-4 font-extrabold text-6xl text-white'>
                                About Us
                            </h4>
                            <p className=' text-gray-400 text-base my-6 w-9/12'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                        </div>
                    </div>
                </div>
            </header>
            <WhyChoose/>
            <div className="OurTeam grid grid-cols-4 py-16 w-10/12 m-auto gap-10 py-32">
                <div className="box flex flex-col gap-4">
                    <img src={person1} alt="" />
                    <Link className=' font-bold text-3xl underline decoration-2 hover:no-underline' to='/' >Lawson Arnold</Link>
                    <span>CEO, Founder, Atty.</span>
                    <p className=' font-sans'>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <Link className='underline decoration-1' to='/'>Learn More</Link>
                </div>
                <div className="box flex flex-col gap-4">
                    <img src={person2} alt="" />
                    <Link className=' font-bold text-3xl underline decoration-2 hover:no-underline' to='/' >Jeremy Walker</Link>
                    <span>CEO, Founder, Atty.</span>
                    <p className=' font-sans'>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <Link className='underline decoration-1' to='/'>Learn More</Link>
                </div>
                <div className="box flex flex-col gap-4">
                    <img src={person3} alt="" />
                    <Link className=' font-bold text-3xl underline decoration-2 hover:no-underline' to='/' >Patrik White</Link>
                    <span>CEO, Founder, Atty.</span>
                    <p className=' font-sans'>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <Link className='underline decoration-1' to='/'>Learn More</Link>
                </div>
                <div className="box flex flex-col gap-4">
                    <img src={person4} alt="" />
                    <Link className=' font-bold text-3xl underline decoration-2 hover:no-underline' to='/' >Kathryn Ryan</Link>
                    <span>CEO, Founder, Atty.</span>
                    <p className=' font-sans'>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <Link className='underline decoration-1' to='/'>Learn More</Link>
                </div>
            </div>
            <Testimonials/>
            <Footer />
        </>
    );
}

export default About;

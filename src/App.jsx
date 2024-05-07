import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Category from './components/Category'
import Footer from './components/Footer'
import Header from './components/Header'
import ProductMainSection from './components/ProductMainSection'
import RecentBlog from './components/RecentBlog'
import Testimonials from './components/Testimonials'
import WeHelp from './components/WeHelp'
import WhyChoose from './components/WhyChoose'
import { useEffect } from 'react'
import { GetProdects } from './Features/ProductsSlise'
import ComponentListLinks from './components/ComponentListLinks'





function App() {
    return (
        <>
            <Header/>
            <ProductMainSection/>
            <WhyChoose/>
            <WeHelp/>
            <Category/>
            <Testimonials/>
            <RecentBlog/>
            <Footer/>
        </>
    )
}

export default App

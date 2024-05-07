import React from 'react';


// import icons ui 
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { AddToCart } from '../Features/Cartslise';

const Cards = ({ item }) => {
    const dispatch = useDispatch()

    return (
        <>
            <div key={item.id}  className="cart pb-14 text-center relative">
                <div className="img">
                    <img className=' z-50 w-56 h-60 m-auto' src={item.image} alt="" />
                </div>
                <div className="tex">
                    <h3 className='text-xl font-bold p-2 '>{item.title}</h3>
                    <span>{item.price}$</span>
                </div>
                <div className="icons absolute bottom-5 opacity-0 left-1/2 transform -translate-x-1/2 z-40">
                    <AddIcon onClick={()=>{
                        dispatch(AddToCart(item))
                    }} sx={{ fontSize: '35px', backgroundColor: '#2e2e2e', color: 'white', borderRadius: '50%', cursor: 'pointer' }} />
                </div>
            </div>
        </>
    );
}

export default Cards;

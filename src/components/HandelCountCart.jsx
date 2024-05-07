import { IconButton } from '@mui/material';
import React, { useEffect } from 'react';

// import Icons Material ui 
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetTotalquantity } from '../Features/Cartslise';

// handle style icon shop
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        
    },
}));






const HandelCountCart = () => {
    // dyrect Page 
    const naveget = useNavigate()


    // handle count Cart quantity 
    const { cartquantity } = useSelector((state) => state.Cart)
    const card = useSelector((state) => state.Cart )
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetTotalquantity())
    }, [card, dispatch])


    return (
        <>
            <IconButton onClick={() => {
                naveget('/cart')
            }} sx={{ color: '#9b9b9b' , position:'relative' }} aria-label="cart">
                <StyledBadge badgeContent={cartquantity} color="secondary">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
        </>
    );
}

export default HandelCountCart;

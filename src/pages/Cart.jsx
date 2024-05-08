import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import RecentBlog from '../components/RecentBlog';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { AddToCart, MiunsToCart, RemoveFromCart, ClearCards, GetTotalquantity } from '../Features/Cartslise';

// import table ui from CartoStore
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#064e3b',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 15,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



const Cart = () => {
    const dispatch = useDispatch()
    const Naveget = useNavigate()
    const CartProduct = useSelector((stat) => stat.Cart.cart)


    // handle count Cart quantity 
    const { CartTotal } = useSelector((state) => state.Cart)

    const card = useSelector((state) => state.Cart)
    useEffect(() => {
        dispatch(GetTotalquantity())
    }, [card, dispatch])

    return (
        <>
            <header className=' bg-emerald-900 w-full h-8/12'>
                <Navbar />
                <div className="manheader overflow-hidden">
                    <div className='head w-11/12 m-auto flex items-center justify-between pt-44 pb-20'>
                        <div className="left w-2/4">
                            <h4 className=' py-4 font-extrabold text-6xl text-white'>
                                Cart...
                            </h4>
                        </div>
                    </div>
                </div>
            </header>
            {CartProduct.length === 0 ? <div className="durectShop text-center py-16">
                <h4 className='fs-2 fw-bold'>Shopping Cart</h4>
                <p className='fs-1 p-4'>your is currentiy empty</p>
                <Link to='/shop' className='btn fs-4 bg-neutral-900 h-12 w-52 flex items-center justify-center m-auto text-white rounded-xl'><ArrowBackIcon className='fs-3' /> start Shopping</Link>
            </div> : <>
                <TableContainer sx={{ width: '90%', margin: '50px auto'  }} className='mt-5 mb-5' component={Paper}>
                    <Table sx={{ minWidth: 1000 }} aria-label="customized table">
                        <TableHead sx={{ width: '200px' }}>
                            <TableRow sx={{ width: '200px' }}>
                                <StyledTableCell align="center" sx={{ width: '150px' }}>Cart Imge</StyledTableCell>
                                <StyledTableCell align="center">Title</StyledTableCell>
                                <StyledTableCell align="center">Price</StyledTableCell>
                                <StyledTableCell align="center">Quantity</StyledTableCell>
                                <StyledTableCell align="center">Item Total Price</StyledTableCell>
                                <StyledTableCell align="center">Delete Product</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {CartProduct.map((itme) => (
                                <StyledTableRow className='d-fle align-items-center justify-content-beween w-100' key={itme.id}>
                                    <StyledTableCell component="" scope="">
                                        <img className='w-100' src={itme.image} alt="" />
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{itme.title}</StyledTableCell>
                                    <StyledTableCell align="center">{itme.price}</StyledTableCell>
                                    <StyledTableCell align="rigth"><span className='flex  items-center justify-center '><p onClick={() => {
                                        dispatch(AddToCart(itme))
                                    }} className='plus m-0 p-0 border p-3 fs-4 w-9 h-9 flex items-center justify-center cursor-pointer hover:text-green-700 '><AddIcon sx={{}} /></p><span className='m-0 px-5 d-flex align-items-center'>{itme.cartquantity}</span><p onClick={() => {
                                        dispatch(MiunsToCart(itme))
                                    }} className='m-0 p-0 border p-3 fs-4 miuns w-9 h-9 flex items-center justify-center cursor-pointer hover:text-green-700 '><RemoveIcon /></p></span></StyledTableCell>
                                    <StyledTableCell className='fs-5' align="center">{Math.round(itme.price * itme.cartquantity)}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        <Tooltip title="Delete">
                                            <IconButton onClick={() => {
                                                dispatch(RemoveFromCart(itme))
                                            }}>
                                                <DeleteIcon className='fs-2' />
                                            </IconButton>
                                        </Tooltip>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className="CrackPayoment p-5 pb-20 w-11/12 m-auto flex flex-wrap gap-y-10 items-center justify-between">
                    <button onClick={() => {
                        dispatch(ClearCards())
                    }} className='btn bg-red-900 mt-4 h-12 w-52 flex items-center justify-center text-white rounded-xl'>Clear items</button>
                    <div className="payument d-flex flex-column">
                        <div className="total flex items-center justify-between">
                            <h3 className='fw-bold'>SubTotal: </h3>
                            <span className='fs-4'>{Math.round(CartTotal)}$</span>
                        </div>
                        <p className='mt-3 brg'>Taxes and shipping Calceuated at CheakOut </p>
                        {CartProduct.length > 0 ? <button onClick={()=>{
                            Naveget('/CheckOut')
                        }} className='btn btn-primary mt-3 mb-3 bg-neutral-900 mt-4 h-12 w-52 flex items-center justify-center text-white rounded-xl'>Cheak out</button> : <button className='btn btn-primary mt-3 mb-3'>Login</button>}
                        {/* <Link to='/Products' className='btn fs-4 bg-neutral-900 mt-4 h-12 w-52 flex items-center justify-center text-white rounded-xl'><ArrowBackIcon className='fs-3' /> start Shopping</Link> */}
                    </div>
                </div>
            </>}
            <Footer />
        </>
    );
}

export default Cart;

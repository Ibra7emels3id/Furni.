import React from 'react';
import { useSelector } from 'react-redux';

// components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


// imoprt the Table ui component
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




const CheckOut = () => {


    // Handle Data Cart Ceack Out 
    const cart = useSelector((state) => state.Cart.cart)
    const { CartTotal } = useSelector((state) => state.Cart)

    return (
        <>
            <header className=' bg-emerald-900 w-full h-8/12'>
                <Navbar />
                <div className="manheader overflow-hidden">
                    <div className='head w-11/12 m-auto flex items-center justify-between pt-44 pb-20'>
                        <div className="left w-2/4">
                            <h4 className=' py-4 font-extrabold text-6xl text-white'>
                                Check Out...
                            </h4>
                        </div>
                    </div>
                </div>
            </header>
            <div className="Details m-auto w-11/12 my-32">
                <form className='grid grid-cols-1 lg:grid-cols-2 w-full gap-5'>
                    <div className="billing">
                        <h3 className='text-3xl font-bold mb-4'>Billing Details</h3>
                        <div className=" bg-white border flex flex-col p-10 gap-8" >
                            <select className='h-12 border rounded focus:border-gray-700 w-full px-5' name="" id="">
                                <option value="Egypt">Egypt</option>
                                <option value="Egypt">Egypt</option>
                                <option value="Egypt">Egypt</option>
                                <option value="Egypt">Egypt</option>
                                <option value="Egypt">Egypt</option>
                                <option value="Egypt">Egypt</option>
                                <option value="Egypt">Egypt</option>
                                <option value="Egypt">Egypt</option>
                                <option value="Egypt">Egypt</option>
                            </select>
                            <div className="Name w-full grid grid-cols-2 gap-5">
                                <input className='h-12 border px-2 rounded focus:border-gray-700' type="text" name="" id="" placeholder='Enter your First Name' />
                                <input className='h-12 border px-2 rounded focus:border-gray-700' type="text" name="" id="" placeholder='Enter your Last Name' />
                            </div>
                            <input className='h-12 border px-2 rounded focus:border-gray-700' type="text" name="" id="" placeholder='Company Name' />
                            <input className='h-12 border px-2 rounded focus:border-gray-700' type="text" name="" id="" placeholder='Address *' />
                            <input className='h-12 border px-2 rounded focus:border-gray-700' type="text" name="" id="" placeholder='Apartment, suite, unit etc. (optional)' />
                            <div className="Code-Posta grid grid-cols-2 w-full gap-5">
                                <input className='h-12 border px-2 rounded focus:border-gray-700' type="text" name="" id="" placeholder='State / Country' />
                                <input className='h-12 border px-2 rounded focus:border-gray-700' type="text" name="" id="" placeholder='Posta / Zip' />
                                <input className='h-12 border px-2 rounded focus:border-gray-700' type="text" name="" id="" placeholder='Email Address' />
                                <input className='h-12 border px-2 rounded focus:border-gray-700' type="text" name="" id="" placeholder='Phone' />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="prom-Code">
                            <h3 className='text-3xl font-bold mb-4'>Coupon Code</h3>
                            <div className=" fle flex-col bg-white p-10 border">
                                <p>Enter your coupon code if you have one</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                                    <input className='h-12 border rounded-3xl px-4 focus:border-gray-700' type="text" name="" id="" placeholder='Enter your coupon code' />
                                    <button className=' bg-neutral-900 w-48 h-12 rounded-3xl text-white ml-10'>Apply</button>
                                </div>
                            </div>
                        </div>
                        <div className="Your-Order mt-5 pb-24">
                            <h3 className='text-3xl font-bold mb-4'>Your Order</h3>
                            <div className=" fle flex-col bg-white p-10 border">
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: '100%', border: 'none' }} size="small" aria-label="a dense table">
                                        <TableHead >
                                            <TableRow >
                                                <TableCell sx={{padding:'20px'}}>Title</TableCell>
                                                <TableCell align='center' >Quantity</TableCell>
                                                <TableCell align="right">Total Cart</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {cart.map((it) => {
                                                return (
                                                    <>
                                                        <TableRow>
                                                            <TableCell sx={{padding:'20px' , border:'none'}}>{it.title}</TableCell>
                                                            <TableCell sx={{padding:'20px' , border:'none'}} align='center'>{it.cartquantity}</TableCell>
                                                            <TableCell sx={{padding:'20px' , border:'none'}} align="right">{it.price * it.cartquantity}$</TableCell>
                                                        </TableRow>
                                                    </>
                                                )
                                            })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <div className="Detals mt-2">
                                    <p className='p-3 flex items-center justify-between'>
                                        <span>Cart Subtotal</span>
                                        <span>{Math.round(CartTotal)}$</span>
                                    </p>
                                    <p className='p-3 flex items-center justify-between'>
                                        <span>Payment fee</span>
                                        <span>10$</span>
                                    </p>
                                    <p className='p-3 flex items-center justify-between'>
                                        <span>Order Total</span>
                                        <span>{Math.round(CartTotal)  + +10}</span>
                                    </p>
                                    <button className='flex items-center justify-center w-48 m-auto bg-neutral-900 rounded-3xl h-12 text-white'>Payment Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>


            <Footer />
        </>
    );
}

export default CheckOut;

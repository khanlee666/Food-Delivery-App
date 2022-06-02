import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { RiRefreshFill } from "react-icons/ri"
import { motion } from 'framer-motion';
import { useStateValue } from '../context/stateProvider';
import { actionTypes } from '../context/reducer';
import EmptyCart from "../img/emptyCart.svg";
import CartItem from './CartItem';

const CartContainer = () => {
    
    const [tot, setTot] = useState([]);
    const [ flag, setFlag] =  useState([]);
    
    useEffect(()=> {
        let totalPrice = cartItems.reduce(function(accumulator, item){
            return accumulator + item.qty * item.price;
        }, 0);
        setTot(Number((totalPrice).toFixed(2)));
        console.log(tot)
    }, [tot, flag])

    const clearCart = () =>{
        dispatch({
            type: actionTypes.SET_CARTITEMS,
            cartItems: [],
        });

        localStorage.setItem("cartItems", JSON.stringify([]))
    }

    const [{ cartShow, cartItems, user }, dispatch] = useStateValue();

    const showCart = () => {
        dispatch({
            type: actionTypes.SET_CART_SHOW,
            cartShow: !cartShow,
        });
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className='fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex
    flex-col z-[101]'>

            <div className='w-full flex justify-between items-center p-4 '>
                <motion.div className='cursor-pointer'
                    whileTap={{ scale: 0.8 }}
                    onClick={showCart}
                >
                    <MdOutlineKeyboardBackspace className='text-headingColor text-3xl' />

                </motion.div>
                <p className='text-textColor font-semibold text-lg cursor-default'>Cart</p>

                <motion.p
                    onClick={clearCart}
                    whileTap={{ scale: 0.8 }}
                    className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md
                       text-textColor cursor-pointer'>
                    Clear <RiRefreshFill />
                </motion.p>
            </div>

            {/*Button Section*/}
            {
                cartItems && cartItems.length > 0 ? (
                    <div className='w-full h-full bg-cartBG rounded-t-[2rem] flex flex-col'>
                        {/* cart item section */}
                        <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll
                scrollbar-none'>
                            {/* cart Item */}
                            {
                                cartItems && cartItems.map(item => (
                                    <CartItem 
                                    key={item?.id} 
                                    item = {item}
                                    setFlag ={setFlag}
                                    flag = {flag}
                                    />
                                ))
                            }
                        </div>

                        {/* cart total section  */}
                        <div className='w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col
                items-center justify-evenly px-8 py-2'>
                            <div className='w-full flex items-center justify-between '>
                                <p className='text-gray-400 text-lg'> Sub Total</p>
                                <p className='text-gray-400 text-lg'>₼ {tot}</p>
                            </div>
                            <div className='w-full flex items-center justify-between '>
                                <p className='text-gray-400 text-lg'> Delivery</p>
                                <p className='text-gray-400 text-lg'>₼ 1.50</p>
                            </div>

                            <div className='w-full boder-b my-2 border-gray-600'></div>

                            <div className='w-full flex items-center justify-between'>
                                <p className='text-gray-200 text-xl font-semibold'>Total</p>
                                <p className='text-gray-200 text-xl font-semibold'>₼ {tot + 1.50}</p>
                            </div>

                            {
                                user ? (
                                    <motion.button
                                        whileTap={{ scale: 0.75 }}
                                        type="button"
                                        className='w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2
                                                   hover:shadow-lg'>
                                        Check Out
                                    </motion.button>
                                ):(
                                    <motion.button
                                        whileTap={{ scale: 0.75 }}
                                        type="button"
                                        className='w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2
                                                   hover:shadow-lg'>
                                        Login to Check Out
                                    </motion.button>
                                )
                            }

                        </div>
                    </div>
                ) : (
                    <div className='w-full h-full flex flex-col items-center justify-center gap-6'>
                        <img src={EmptyCart} className="w-300" alt="empty" />
                        <p className='text-xl text-textColor font-semibold'>
                            Add Some Items to Your Cart
                        </p>
                    </div>
                )}

        </motion.div>
    )
}

export default CartContainer
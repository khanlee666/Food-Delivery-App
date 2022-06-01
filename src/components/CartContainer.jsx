import React from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { RiRefreshFill } from "react-icons/ri"
import {BiMinus, BiPlus} from "react-icons/bi"
import { motion } from 'framer-motion';
import { useStateValue } from '../context/stateProvider';
import { actionTypes } from '../context/reducer';

const CartContainer = () => {

    const [{ cartShow }, dispatch] = useStateValue();

    const showCart =() =>{
        dispatch({
            type: actionTypes.SET_CART_SHOW,
            cartShow: !cartShow,
        });
    }

    return (
        <div className='fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex
    flex-col z-[101]'>

            <div className='w-full flex justify-between items-center p-4 '>
                <motion.div className='cursor-pointer'
                    whileTap={{ scale: 0.8 }}
                    onClick ={showCart}
                >
                    <MdOutlineKeyboardBackspace className='text-headingColor text-3xl' />

                </motion.div>
                <p className='text-textColor font-semibold text-lg cursor-default'>Cart</p>

                <motion.p
                    whileTap={{ scale: 0.8 }}
                    className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md
            hover:shadow-lg duration-100 ease-in-out transition-all cursor-pointer text-base 
            text-textColor'>
                    Clear <RiRefreshFill />
                </motion.p>
            </div>

            {/*Button Section*/}
            <div className='w-full h-full bg-cartBG rounded-t-[2rem] flex flex-col'>
                {/* cart item section */}
                <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll
                scrollbar-none'>
                    {/* cart Item */}
                    <div className='w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2'>
                        <img src="https://firebasestorage.googleapis.com/v0/b/restaurant-app-4231a.appspot.com/o/Images%2F1654089474725-d3.png?alt=media&token=512c0925-74cf-4021-8cdd-24fe92b5b1da"
                            className='w-20 h-20 max-w-[60px] rounded-full object-contain'
                            alt='monster' />

                        {/* name section */}
                        <div className='flex flex-col gap-2'>
                            <p className='text-base text-gray-50'>
                                Monster Energy
                            </p>
                            <p className='text-sm block text-gray-300 font-semibold'>₼ 8.00</p>
                        </div>

                        {/* button section */}
                        <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
                            <motion.div whileTap={{scale: 0.75}}>
                                <BiMinus className="text-gray-50"/>
                            </motion.div>
                            <p className='w-5 h-5 rounded-sm bg-cartBG text-gray-50 flex items-center
                            justify-center'>
                                1
                            </p>
                            <motion.div whileTap={{scale: 0.75}}>
                                <BiPlus className="text-gray-50"/>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* cart total section  */}
                <div className='w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col
                items-center justify-evenly px-8 py-2'>
                    <div className='w-full flex items-center justify-between '>
                        <p className='text-gray-400 text-lg'> Sub Total</p>
                        <p className='text-gray-400 text-lg'>₼ 8.00</p>
                    </div>
                    <div className='w-full flex items-center justify-between '>
                        <p className='text-gray-400 text-lg'> Delivery</p>
                        <p className='text-gray-400 text-lg'>₼ 1.50</p>
                    </div>

                    <div className='w-full boder-b my-2 border-gray-600'></div>

                    <div className='w-full flex items-center justify-between'>
                        <p className='text-gray-200 text-xl font-semibold'>Total</p>
                        <p className='text-gray-200 text-xl font-semibold'>₼ 9.50</p>
                    </div>

                    <motion.button
                    whileTap={{scale:0.75}}
                    type="button"
                    className='w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2
                    hover:shadow-lg transition-all ease-in-out duration-150'>
                        Check Out
                    </motion.button>
                </div>
            </div>

        </div>
    )
}

export default CartContainer
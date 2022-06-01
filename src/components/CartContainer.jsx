import React from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { RiRefreshFill } from "react-icons/ri"
import { motion } from 'framer-motion';

const CartContainer = () => {
    return (
        <div className='fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex
    flex-col z-[101]'>

            <div className='w-full flex justify-between items-center p-4 '>
                <motion.div className='cursor-pointer'
                    whileTap={{ scale: 0.8 }}
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
                <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll
                scrollbar-none'>
                    {/* cart Item */}
                    <div className='w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2'>
                        <img src="https://firebasestorage.googleapis.com/v0/b/restaurant-app-4231a.appspot.com/o/Images%2F1654089474725-d3.png?alt=media&token=512c0925-74cf-4021-8cdd-24fe92b5b1da" alt='monster'/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartContainer
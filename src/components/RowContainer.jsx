import React, { useEffect, useRef, useState } from 'react'
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';
import NotFound from "../img/NotFound.svg"
import { useStateValue } from '../context/stateProvider';
import { actionTypes } from '../context/reducer';

const RowContainer = ({flag, data, scrollValue}) => {
    
    const rowContainer = useRef();

    const [items, setItems] = useState([]);

    const [{cartItems}, dispatch] = useStateValue();

    const addToCart = () =>{
        
        dispatch({
            type: actionTypes.SET_CARTITEMS,
            cartItems: items
        })
     localStorage.setItem("cartItems", JSON.stringify(items));
    }

    useEffect(()=>{
        rowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue]);

    useEffect(()=>{
        addToCart();
    },[items])
    return (
        <div 
       ref={rowContainer}
        className={`w-full my-12 flex items-center gap-3 scroll-smooth  ${flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap justify-center'}`}>
           {data && data.length > 0 ? data.map(item => (
               <div key={item?.id} className='w-275 min-w-[275px] md:w-300 md:min-w-[340px] bg-cardOverlay rounded-lg p-2 my-12 h-[225px]  backdrop-blur-lg hover:drop-shadow-lg' >
               <div className='w-full  flex items-center justify-between '>
                   <motion.div  whileHover={{scale: 1.2}} className='w-40 h-40 -mt-8 drop-shadow-2xl'>
                        <img src={item?.imageUrl} 
                   alt='menu'
                   className='w-full h-full object-contain'
                    />
                   </motion.div>
                  
                   <motion.div 
                   whileTap={{scale: 0.75}} 
                   className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center 
                   cursor-pointer hover:shadow-md'
                   onClick={() => setItems([...cartItems, item])}
                   >
                       <MdShoppingBasket className='text-white'/>
                   </motion.div>
               </div>
               <div className='w-full flex flex-col items-end justify-end'>
                   <p className='text-textColor font-semibold text-base md:text-lg'>{item?.title}</p>
                   <p className='mt-1 text-sm text-gray-500'>{item?.calories}</p>
                   <div className='flex items-center gap-8'>
                       <p className='texte-lg text-headingColor font-semibold'>
                           <span className='text-sm text-red-500'>₼</span> {item?.price}
                       </p>
                   </div>
               </div>
           </div>
           )) : <div className='w-full flex flex-col items-center justify-center'>
                     <img className='h-340' src={NotFound} alt="market"/>;
                     <p className='text-headingColor text-xl text-semibold my-2'>Items Not Aviable</p>
               </div>}
        </div>
    )
}

export default RowContainer
import React from 'react';
import Delivery from "../img/delivery.png";
import HeroBG from "../img/heroBg.png"
import { heroData } from '../utils/data';

const HomeContainer = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
            <div className='py-2 flex flex-col flex-1 items-start justify-center gap-6'>
                <div className='flex items-center justify-center gap-2 bg-orange-100 px-2 py-1 rounded-full'>
                    <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
                    <div className='w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl'>
                        <img src={Delivery} className="w-full h-full object-contain" alt='BikeDelivery' />
                    </div>
                </div>
                <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor '>
                    Fastest Delivery in{" "}
                    <span className='text-orange-600 text-[3rem] lg:text-[5rem] '>Your City</span>
                </p>
                <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum culpa mollitia fugiat laboriosam accusantium nihil,
                    vero voluptatum animi, iure corporis asperiores, doloremque
                    distinctio laudantium numquam. Earum odit rerum dolorum dolore?
                </p>
                <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2
        rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>
                    Order Now
                </button>
            </div>
            <div className='py-2 flex e items-center flex-1 relative '>
                <img src={HeroBG} className="ml-auto w-full h-420 lg:w-auto lg:h-650" alt='HeroBG' />
                <div className='w-full h-full absolute top-0 left-0 flex flex-wrap gap-6 items-center justify-center  py-4  '>
                    {heroData && heroData.map(n => (
                        <div key={n.id} className=' lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex  flex-col items-center justify-center drop-shadow-lg '>
                            <img src={n.imgUrl} className="w-20 lg:w-40 -mt-5 lg:-mt-20" alt='Icecream' />
                            <p className='text-base lg:text-xl mt-2 lg:mt-4 text-textColor font-semibold'>{n.name}</p>
                            <p className='text-[12px] lg:text-sm text-lighttextGray text-semibold my-1 lg:my-3' >{n.decp}</p>
                            <p className='text-sm text-headingColor font-semibold'>
                                <span className='text-xs text-red-600 '>₼</span> {" "}
                                {n.price}</p>
                        </div>
                    ))}
                   
                    
                    
                    
                </div>
            </div>
        </section>
    )
}

export default HomeContainer
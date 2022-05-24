import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdFastfood, MdCloudUpload, MdDelete, MdFoodBank, MdAttachMoney } from 'react-icons/md';

import { categories } from "../utils/data"
import Loader from './Loader';

const CreateContainer = () => {

  const [title, setTitle] = useState('');
  const [calories, setCarolies] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [field, setField] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const uploadImage = () => {

  };

  const deleteImage = () => {

  };

  const savidDetails = () =>{

  };

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='w-[90%] md:w-[75%] p-4 rounded-lg border border-gray-300 flex flex-col
      justify-center items-center gap-4'>
        {
          field && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertStatus === 'danger'
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
                }`}>
              {msg}
            </motion.p>
          )
        }

        <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
          <MdFastfood className='text-xl text-gray-700' />
          <input
            type="text"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Add a title"
            className='w-full h-full text-lg bg-transparent outline-none border-none 
          placeholder:text-gray-400 text-textColor'
          />
        </div>

        <div className='w-full'>
          <select className='outline-none w-full text-base p-2 border-b-2 border-gray-200 rounded-md cursor-pointer'>
            <option value='other' onChange={(e) => setCategory(e.target.value)} className="bg-white">Select Category</option>
            {
              categories && categories.map(items => (
                <option key={items.id} className="capitalize outline-none border-0 text-base bg-white 
                 text-headingColor" value={items.urlParamName}>
                  {items.name}
                </option>
              ))
            }
          </select>
        </div>

        <div className='group flex flex-col items-center justify-center border-2 border-dotted 
        border-gray-300 w-full h-225 md:h-420 rounded-lg'>
          {
            isLoading ? <Loader />
              :
              (<>
                {!imageAsset ?
                  (<>
                    <label className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
                      <div className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
                        <div className='flex flex-col items-center justify-center gap-1 text-gray-500 hover:text-gray-700'>
                          <MdCloudUpload className='text-3xl ' />
                          <p > Click here to upload</p>
                        </div>
                      </div>
                      <input
                        type="file"
                        name='uploadimage'
                        accept="image/*"
                        onChange={uploadImage}
                        className="w-0 h-0" />
                    </label>
                  </>)
                  : (<>
                    <div className='relatie w-full'>
                      <img src={imageAsset} alt='uploaded image'
                        className='w-full h-full object-cover' />
                      <button type='button' className='absolute bottom-3 right-3 p-3 rounded-full
                      bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500
                      transition-all ease-in-out'
                        onClick={deleteImage}
                      ><MdDelete className='text-white' /></button>
                    </div>
                  </>)}
              </>)
          }
        </div>
        <div className='w-full flex flex-col md:flew-row items-center gap-3'>
          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2 '>
            <MdFoodBank className='text-gray-700 text-2xl' />
            <input
              type="text"
              required
              value={calories}
              onChange={(e)=>setCarolies(e.target.value)}
              placeholder='Calories'
              className='w-full h-full text-lg bg-transparent outline-none border-none 
            placeholder:text-gray-400 text-textColor'/>
          </div>
          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2 '>
            <MdAttachMoney className='text-gray-700 text-2xl' />
            <input
              type="text"
              required
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
              placeholder='Price'
              className='w-full h-full text-lg bg-transparent outline-none border-none 
            placeholder:text-gray-400 text-textColor'/>
          </div>
        </div>

        <div className='flex items-center w-full'>
          <button type='button' 
          className='ml-0 md:ml-auto w-full md:w-auto border-none outline-none
           bg-emerald-500 text-lg px-12 py-2 rounded-lg text-white font-semibold'
           onClick={savidDetails}>Save Changes</button>
        </div> 
      </div>
    </div> 
  )
}

export default CreateContainer
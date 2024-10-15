import React from 'react'

const Modal = ({handleModal}) => {console.log('Modal')
  return (
    <div className=' flex  flex-col absolute top-[45%] left-[30%]   w-[500px]   h-[300px] '>
    <button onClick={handleModal}>X</button>
    <div className='modal-content'>
      <h1>Offer</h1>
      <p>Get 50% off on all products</p>
      
    </div>
    <button  className='bg-red-700 text-white p-3 rounded-md outline-none cursor-pointer px-6'>Close</button>
  </div>
  )
}

export default Modal
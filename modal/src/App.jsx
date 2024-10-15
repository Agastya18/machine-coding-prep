import { useState } from 'react'
import Modal from './Modal'
import './App.css'

function App() {
  const [isOpen, setisOpen] = useState(false)
  const handleModal = () => {
    setisOpen(!isOpen)
  }

  return (
  <div className=''>
     <div className='flex  items-center justify-center h-[100vh]  place-self-center '>
    <button onClick={handleModal} className=' bg-purple-700 text-white p-3 rounded-md outline-none cursor-pointer px-6'>offer</button>
   </div>
   {
    isOpen && <Modal handleModal={handleModal}/>
     
      
   }
  </div>
  )
}

export default App

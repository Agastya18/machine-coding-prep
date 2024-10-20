import React from 'react'
import { useState } from 'react'
const Toast = () => {
  const [show,setshow] = useState(false)
  const handleshow = () => {
    setshow(true)
    setTimeout(()=>{
      setshow(false)
    },3000)
  }
 
  return (
    <div className='con'><div>
    <div className='allt'>
     {
      show &&  <div className='tos'>success toast <span onClick={()=>setshow(false)}>X</span></div>
     }
    </div>
     <div className='btn'>
     <button onClick={handleshow} >success</button>
      <button>info</button>
      <button>warning</button>
      <button>error</button>
     </div>

    </div></div>
  )
}

export default Toast
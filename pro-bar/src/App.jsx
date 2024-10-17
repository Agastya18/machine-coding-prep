import { useState } from 'react'
import ProgressBar from './ProgressBar'
import './App.css'
import { useEffect } from 'react'

function App() {
const [progress, setProgress] = useState(0)
useEffect(()=>{
  if(progress<100){
    const time = setInterval(()=> setProgress((p)=>p+1),20)

    return ()=>{clearInterval(time)}
  }
},[progress])

  return (
   <div className='App'>
   <ProgressBar progress={progress} color={'green'}/>
   <ProgressBar progress={progress} color={'yellow'}/>
   </div>
  )
}

export default App

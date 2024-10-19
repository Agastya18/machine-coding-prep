import { useState } from 'react'

import './App.css'
import Toast from './Toast'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
   <Toast/>
    
   </div>
  )
}

export default App

import { useState,useEffect } from 'react';
import { ChevronRight,ChevronDown } from 'lucide-react';
const FaqItem = ({faq,index}) => {
  useEffect(()=>{
    if(index == 0){
      setIsOpen(true)
    }
  },[])
    console.log(faq)
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div>
        <div className=' flex  gap-2  items-center'>
        <button onClick={handleToggle} className=' mb-2' > {
            isOpen ? <ChevronDown size={30} /> : <ChevronRight size={30} />
        }  </button>
            <h2 >{faq.question}</h2>
           
        </div>
       {
            isOpen && (
              <div className=' mb-3 mt-3 ml-12 text-left'>
      {faq.answer}
        </div>
            )
       }
    </div>
  )
}

export default FaqItem
import { useState } from 'react'

import './App.css'
import { useEffect } from 'react';

function App() {
  const data = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: "San Francisco"
    },
    {
      image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland"
    },
    {
      image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco"
    },
    {
      image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling"
    },
  
    {
      image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling"
    }
  ];
const [index, setIndex] = useState(0);
useEffect(()=>{
  
 let id=setInterval(handleRignt,2000)
 return () => {
   clearInterval(id);
 }
},[])

const handleRignt = () => {
  setIndex((p)=>{
    if(p === data.length - 1){
      return 0;
    }else{
      return p + 1;
    }
  })
}

const handleLeft = () => {
  if(index === 0){
    setIndex(data.length - 1);
  }else{
    setIndex(index - 1);
  }
}


  return (
  <div className='con'>
   <button onClick={handleLeft} className='l'>
    {"<"}
   </button>
   <img src={data[index].image} alt="dsas" />
    <button onClick={handleRignt} className='r'>
      {">"}
    </button>
  </div>
  )
}

export default App

import { useState,useEffect } from 'react'

import './App.css'

function App() {
 const [isOpen, setIsOpen] = useState(false)
 const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const [timerId, setTimerId] = useState(0);
  const [isPaused, setIsPaused] = useState(false)
 const handleReset = () => {
  if(hour<0 || minute<0 || second<0){
    alert('Please enter a valid time')
    return
  }
    setIsOpen(true)
 }
 const handleStart = () => {
    setIsOpen(true)
 }


 const runtimer=(minute,second,hour,tid)=>{
    if(second>0){
      setSecond((s)=>s-1)
    } else if(minute>0 && second===0){
      setMinute((m)=>m-1)
      setSecond(59) 
    } else{
      setHour((h)=>h-1)
      setMinute(59)
      setSecond(59)
    }
    if (second === 0 && minute === 0 && hour === 0) {
      // resetTimer();
      handleReset();
      alert('Timer is finished');
      clearInterval(tid);
      return
    }
   
 }

 useEffect(()=>{
  let tid;
  if(isOpen){
   tid= setInterval(() => {
      runtimer(minute,second,hour,tid)
    }, 1000);
    setTimerId(tid);
  }
  return () => {
    clearInterval(tid)
  }
 },[isOpen,minute,second,hour])

 const handlePause=()=>{
  setIsPaused(true)
  clearInterval(timerId)
 // setTimerId(0)
 }
 const resetTimer = () => {
  setHour(0)
  setMinute(0)
  setSecond(0)
  setIsOpen(false)
  setIsPaused(false)
  clearInterval(timerId)
  setTimerId(0)
  console.log('reset')
}


  return (
    <div>
      <h1>Countdown Timer</h1>
      {
        !isOpen && (
          <div>
        <div className='input-box'>
        <input onChange={
          (e) => setHour(e.target.value)
        } type="text" name="" id="hr" placeholder='HH' />
        <input onChange={
          (e) => setMinute(e.target.value)
        } type="text" name="" id="min"  placeholder='MM'  />
        <input onChange={
          (e) => setSecond(e.target.value)
        } type="text" name="" id="sec"  placeholder='SS'  />
        </div>
        <button className='butt' onClick={handleStart}>start</button>

      </div>
        )
      }

     {
      isOpen && (
        <div>
        <div className='timer'>
          <div>{hour <10 ?  `0${hour}`: hour }</div>
          <span>:</span>
          <div>{minute  <10 ?  `0${minute}`: minute }</div>
          <span>:</span>
          <div>{second  <10 ?  `0${second}`: second }</div>
        </div>
        <button className='butt' onClick={handlePause}>Pause</button>
        <button className='butt' onClick={handleReset}>Reset</button>
      </div>
      )
     }
    </div>
  )
}

export default App

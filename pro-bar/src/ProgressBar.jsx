import { useEffect } from "react"


const ProgressBar = ({progress,color}) => {
    const objStyle={
        width:`${progress}%`,
        backgroundColor: color || 'lightgreen',
        height: 30,
        borderRadius: 20,

    }
   
  return (
    <div className="con">
        <div className=" bar">
            <div style={objStyle}>
                {`${progress}%`}
            </div>
        </div>
    </div>
  )
}

export default ProgressBar
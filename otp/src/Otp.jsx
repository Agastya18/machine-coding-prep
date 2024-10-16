import { useState,useRef } from "react"

const Otp = ({otpl=5}) => {


   
   const [otp, setOtp] = useState(new Array(otpl).fill(""))
   console.log(otp)
   const ref = useRef([])
   console.log('ref data',ref)
   
   
  return (
    <div>
        {
            otp.map((data, index) => {
                return (
                    <input
                        type="text"
                        maxLength="1"
                        ref={(curr)=>(ref.current[index]=curr)}
                        key={index}
                        value={data}
                        onChange={(e) =>{
                        
                            
                            if(isNaN(e.target.value)) return false  
                            const otpCopy = [...otp]
                            otpCopy[index] = e.target.value
                         if(index+1<otp.length)   ref.current[index+1].focus()
                            setOtp(otpCopy)
                        }}
                      
                    />
                )
            })
        }
    </div>
  )
}

export default Otp
import './App.css'

const StarComp = () => {
  return (
    <div>
    <h1>
        Star Rating 
    </h1>
        <div>

           {
            [1,2,3,4,5].map((num,index)=>(
                <button  key={index}>
                  <span>&#9733;</span>
                </button>
            ))
           }

        </div>
    </div>
  )
}

export default StarComp
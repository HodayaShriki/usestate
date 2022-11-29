import { useState } from "react";

function Counter(props) {
    const {delta} = props
    const {max} = props
    const [count, setCount] = useState(1)
    
    function incr(){
        setCount(
            function (oldCount){
                if (oldCount + delta <= max)
                    return oldCount + delta
                else
                    return reset()
            }
        )
        console.log(count)
    }
    function reset (){
        setCount(
            function (oldCount){
                return oldCount = 1
            }
        )
    }
       
    return (
      <div>
        <h1>Counter</h1>
        
        <p>Counter is at {count}</p>
        <button onClick={incr}> Click to add {delta} to Counter</button>
        <button onClick={reset}> Click to reset the count</button>
      </div>
    );
  }
  
  export default Counter;
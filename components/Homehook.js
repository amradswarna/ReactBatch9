import React, { useState } from "react";
const Homehook = () => { 
     const [count,setCount] = useState(0);
     const Increment = () =>{
      setCount(count + 1);
     }
     const Decrement = () => {
      setCount(count - 1);
     }
    return(
        <div>
          <h1>Function Based Components hooks</h1>
          <h1>{count}</h1>
          <button onClick={Increment}>Increment</button>
          <button onClick={Decrement}>Decrement</button>
        </div>
    )
}
export default Homehook;
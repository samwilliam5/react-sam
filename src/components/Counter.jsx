import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0)
  return (
    <div className='bg-dark text-light py-5'>
      <h3>{count}</h3>
      <button className="btn btn-primary" onClick={()=>setCount(count+1)}>Increment</button>
      <button className="btn btn-info mx-3" onClick={()=>setCount(count-1)}>Decrement</button>
      <button className="btn btn-success" onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter

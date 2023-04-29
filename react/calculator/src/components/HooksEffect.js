import React, { useEffect, useState } from "react"

 function HooksEffect() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    document.title = `clicked ${count} times` 
  })
  //INLINE CSS
  const heading = {
    fontSize: '72px',
    color: 'Pink',
    backgroundColor: 'Green',
    textAlign: 'center',
    alignItems:'center',
    display: 'flex',
    justifyContent:'center'
  }
  return (
    <div>
      <button onClick={()=>setCount(count+1)}style={heading}>Click {count} times</button>
    </div>
  )
}

export default HooksEffect



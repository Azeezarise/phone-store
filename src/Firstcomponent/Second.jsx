import React, { useState } from 'react'

function Second() {
    const [color,setcolor] =useState()
    

    const thecolor = (e)=>{
        setcolor(e.target.value)
      
       
    }

    const change =()=>{
      document.body.style.background = color
    }

  return (
    <div>
        <input type="text"  onChange={thecolor}   onClick={change} />
        <button onClick={change}>change</button>
      <h2 className='go'>The BackgroundColor: {color}</h2>
     
    </div>
  )
}

export default Second
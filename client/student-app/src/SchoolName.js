import React, { useState } from 'react'

export default function SchoolName(props) {
    const [state,setState]=useState([])
    const handleOnchange =(event)=>{
        setState(event.target.value)
        props.catchChildHandler(state)
    }
  return (
    <div className='schoolName'>SchoolName is <h3><span className='sch1'>{state}</span></h3>
    <input type='text' onChange={handleOnchange}/>
    </div>
  )
}

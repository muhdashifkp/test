import React from 'react'
import Child from './Child'

export default function Hanshin() {
  const name ="hanshin"
  const age=21
    return (
    <div>
       <Child username={name} userage={age}/>
    </div>
  )
}

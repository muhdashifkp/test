import React from 'react'

export default function Child(props) {
  return (
    <div>
      <h1>Name:{props.username}</h1>
      <h1>Age:{props.userage}</h1>
    </div>
  )
}

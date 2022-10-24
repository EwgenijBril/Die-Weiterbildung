import React from 'react'
import Button from './Button'

export default function User({id, firstname, lastname, age}) {

  const userStyle = {
    border: '1px solid black',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px',
    width: '200px'
  }

  return (
    
    <div style={userStyle}>
        <p>ID: {id}</p>
        <p>First name: {firstname} </p>
        <p>Last name: {lastname} </p>
        <p>Age: {age} </p>
        <Button/>
    </div>
  )
}

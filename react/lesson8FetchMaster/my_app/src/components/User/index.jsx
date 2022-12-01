import React from 'react'

export default function User({id, name, email,role, avatar}) {
  return (
    <div>
        <p>ID: {id} </p>
        <p>Name: {name} </p>
        <p>Email: {email} </p>
        <p>Role: {role} </p>
        <img src={avatar} alt="foto" />
    </div>
  )
}

import React from 'react'

export default function User({name, age, country}) {
  return (
    <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Country: {country}</p>
    </div>
  )
}

import React from 'react'
import { useState } from 'react'

export default function Input(props) {

  const [name , setName] = useState('')
  const [email , setEmail] = useState('')


  return (
    <div>
      <div className={`form-group`}>
        <div className={`col-sm-10`}>
          <input type={props.type} className={`form-control`} name={props.name} placeholder={props.placeholder} required  />
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import style from "./Button.module.css"

export default function Button(props) {
  return (
    <div>
      <button type="submit" className={`btn btn-primary ${style.btn}`}>{props.text}</button>
    </div>
  )
}

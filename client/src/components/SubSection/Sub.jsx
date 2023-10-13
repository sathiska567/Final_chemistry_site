// eslint-disable-next-line no-unused-vars
import React from 'react'
import AutomaticTextWriter from "../AutomaticTextWriter/AutomaticTextWriter"
import style from "./Sub.module.css"

export default function Sub() {
  return (
    <>
     <div className={`col-sm-5 bg-primary ${style.login_left_section}`}>
              <div className={`col`}>
                <div className={`row-sm-4`}>
                  <h2 className={`text-light`}>Welcome to SPDchem</h2>
                </div>
                <div className={`row-sm-4`}>
                  <AutomaticTextWriter />
                </div><br /><br />

                <div className={`row-sm-4`}>
                <button type="button" className={`btn btn-block ${style.help}`}>ලියාපදිංචිවන ආකාරය</button>
                </div>
              </div>
            </div>
    </>
  )
}

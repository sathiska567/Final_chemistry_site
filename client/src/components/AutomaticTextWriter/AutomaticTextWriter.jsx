import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import style from "./Text.module.css"

export default function AutomaticTextWriter() {
  return (
    <div>
      <TypeAnimation
      sequence={[
        'BETTER EDUCATION EXPERIENCE ...', // Types 'One'
        1000, // Waits 1s
        'රසායන විද්‍යාවේ සන්නාමය ... ', // Deletes 'One' and types 'Two'
        1000, // Waits 2s
        'සදුන් සුමින්ද බණ්ඩාර (UG)', // Deletes 'One' and types 'Two'
        1000, // Waits 2s
         // Types 'Three' without deleting 'Two'
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className={style.text}
    />
    </div>
  )
}

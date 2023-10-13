// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Header } from '../components/Header/Header'
import ClassDetails from '../components/ClassDetails/ClassDetails'
import { Classes } from '../components/Classes/Classes'
import { About } from '../components/About/About'
import { Footer } from '../components/Footer/Footer'
import {Home} from '../components/Home/Home'

export default function HomePage() {
  return (
    <div>
     
      <Header />
      <Home />
      <ClassDetails />
      <Classes/>
      <About/>
      <Footer/>

      
    </div>
  )
}

import React from 'react'
import Home from '../home/homes/Home'
import Branding from '../home/branding/Branding'
import About from '../home/about/About'
import Service from '../home/services/Service'
import Work from '../home/work/Work'
import Map from '../../maps/Map'
import Wrapper from '../home/wapper/Wrapper'

const HomePages = () => {
  return (
    <>
       <Home/>
       <Branding/>
       <About/>
       <Service/>
       <Map/>
       <Wrapper/>  
    </>
  )
}

export default HomePages
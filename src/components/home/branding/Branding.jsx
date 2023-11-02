import React from 'react'
import { data } from './data.js'
import '../branding/branding.css'
const Branding = () => {

  return (
    <>
      <section className='branding'>
        <div className="container grid">
          {
            data.map((value) => {
              return (
                <div className="box flex">
                  <div className="text">
                    <h1 className='tit'>{value.id}</h1>
                  </div>
                  <div className="para">
                    <p className='tit2'>{value.heading}</p>
                    <p className='tit3'>{value.desc}</p>
                  </div>

                </div>
              )
            })
          }
        </div>
        <div className='mas'>
          <a className='a' target="_blank"
          href="https://www.google.com/maps/place/Kosiaka/@6.2396132,-75.5531719,17z/data=!4m7!3m6!1s0x8e44294e59435a09:0x24c0b850163773d2!4b1!8m2!3d6.2396079!4d-75.550597!16s%2Fg%2F11g1rkw12l?authuser=1&entry=ttu" >Ver más</a> </div>
      </section>
    </>
  )
}

export default Branding
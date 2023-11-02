import React from 'react'
import { dataWrapper } from '../services/data.js'
import'../wapper/wrapper.css'

const Wrapper = () => {
    return (
        <>
        <section className="wrapper">
            <div className="containerW">
                {
                    dataWrapper.map((val)=>{
                        return(
                            <div className="box">
                                <h3 className="boxh2">{val.tit}</h3>
                                <p className="boxp1">{val.desc}</p>
                                <p className="boxp">{val.dom}</p>
                            </div>
                        )
                    })
                }
                <button className='primary-btn'><a  className="wa" target="_blank" href='https://api.whatsapp.com/send/?phone=573046300022&text&type=phone_number&app_absent=0'>Contactanos</a></button>
            </div>
        </section>
        </>
    )
}

export default Wrapper
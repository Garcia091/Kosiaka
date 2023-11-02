import React from 'react'
import { data } from '../about/data.js'
import '../about/about.css'

const About = () => {
    return (
        <>
            <section className="about">
                <div className="containerB">
                    {data.map((value) => {
                        return (
                            <>
                                <div className="isq">
                                    <div className="heading">
                                        <h3>Nosotros</h3>
                                        <h1>{value.title}</h1>
                                    </div>
                                    <p>{value.desc1}</p><br/>
                                    <p>{value.desc2}</p><br/>
                                    <p>{value.desc3}</p>
                                    <div className="btn_tin"><button id="tin"><a target="_blank" href="https://api.whatsapp.com/send?phone=573046300022">Conocer más</a></button></div>
                                </div>
                                <div className="Dere">
                                    <div className="img top">
                                        <img src={value.cover} alt="" />
                                    </div>
                                </div>
                            </>
                        )
                    })
                    }
                </div>
            </section>
        </>
    )
}

export default About
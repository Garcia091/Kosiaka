import React from 'react'
import { services } from '../services/data.js'
import '../services/service.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min.js'

const Service = () => {
    return (
        <>
            <div className="services topMarging">
                <div className="container">
                    <div className="heading">
                        <h3>Servicios</h3>
                        <h1>"La comida rápida no tiene por qué ser aburrida. Prueba nuestras creaciones únicas que te sorprenderán."</h1>
                        <div className="btn_tinSer">
                            <button id="tinSer">
                                <Link to="/menu">Ver menú</Link></button></div>
                    </div>
                    <div className="container grid topMarging">
                        {
                            services.map((val) => {
                                return (
                                    <>
                                        <div className="box">
                                            <div className="img">
                                                <img src={val.cover} alt="" />
                                            </div>
                                            <div className="text">
                                                <h2>{val.title}</h2>
                                                <p>{val.desc}</p>
                                                
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
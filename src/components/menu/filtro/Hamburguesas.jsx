import React from 'react'
import Filtro from './Filtro'
import { hamb } from './menu.js'
import './hamb.css'

function Hamburguesas() {
    return (
        <>
            <header id="mainMenuH">
                <div className="container-text-menu">
                    Hamburguesas
                </div>
            </header>

            <main>
                <div>
                    <Filtro />
                </div>

            </main>

            <div className="contenedor">
           {
              hamb.map((val) => {
                const {nombre,descripcion,imagen,precio}= val
                return (
                    <div className="card">
                    <h2>{nombre}</h2>

                    <div className="card__content">
                        <p className="card__title">{nombre}
                        </p><p className="card__description">{descripcion}</p>
                        <p className="card__precio">{precio}</p>
                    </div>
                </div>
                )
            })

           }
            </div>
        </>

    )
}

export default Hamburguesas
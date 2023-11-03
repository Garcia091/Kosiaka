import React from 'react'
import Filtro from './Filtro'
import { perro } from './menu.js'
import './perros.css'

function Perros() {
  return (
    <>
    <header id="mainMenuH">
        <div className="container-text-menu">
            Perros
        </div>
    </header>

    <main>
        <div>
            <Filtro />
        </div>

    </main>

    <div className="contenedor">
   {
      perro.map((val) => {
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

export default Perros
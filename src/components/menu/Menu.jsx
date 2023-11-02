import React from 'react'
import Header from '../home/header/Header'
import '../menu/menu.css'
import Filtro from './filtro/Filtro'

function Menu() {
    return (
        <>
            <header id="mainMenu">
                <div className="container-text-menu">
                    Menú
                </div>
            </header>

            <main>
                <div>
                    <Filtro/>
                </div>
            </main>

        </>
    )
}

export default Menu
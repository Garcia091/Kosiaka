import React from 'react'
import {
    Link
} from "react-router-dom";
import '../filtro/filtro.css'
import Hamburguesas from './Hamburguesas';
function Filtro() {
    return (
        <>
            <div className="principalF">
                <div className="cardF">
                    <span></span>
                    <div className="contentF"><Link to="/hamburguesas"><img className="imgfilter" src="https://res.cloudinary.com/db9wh5uvt/image/upload/v1632242331/Porte%C3%B1a_lijghd.png" alt="" srcset="" /></Link></div>
                </div>
                <div className="cardF">
                    <span></span>
                    <div className="contentF">
                        <Link to="/perros">
                            <img className="imgfilter" 
                            src="https://res.cloudinary.com/db9wh5uvt/image/upload/v1698837745/Hot_oqvftb.png" alt="" srcset="" />
                            </Link>
                    </div>
                </div>

                <div className="cardF">
                    <span></span>
                    <div className="contentF">
                        <Link to="/salchipapas">
                            <img className="imgfilter" 
                            src="https://res.cloudinary.com/db9wh5uvt/image/upload/v1698838155/salchi_qqtezc.png" alt="" srcset="" />
                            </Link>
                    </div>
                </div>

                <div className="cardF">
                    <span></span>
                    <div className="contentF">
                        <Link to="/carnes">
                            <img className="imgfilter" 
                            src="https://res.cloudinary.com/db9wh5uvt/image/upload/v1698838132/carne_krejpi.jpg" alt="" srcset="" />
                            </Link>
                    </div>
                </div>

                <div className="cardF">
                    <span></span>
                    <div className="contentF">
                        <Link to="/hamburguesas">
                            <img className="imgfilter" 
                            src="https://res.cloudinary.com/db9wh5uvt/image/upload/v1698838132/ali_innnys.jpg" alt="" srcset="" />
                            </Link>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Filtro
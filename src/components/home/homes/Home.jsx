import React from 'react'
import '../homes/Home.css'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <section className='home'>
                <div className="container flex">
                    <div className="left2">
                        <div className="img">
                            <img src='https://res.cloudinary.com/db9wh5uvt/image/upload/v1699031704/Logo_tj6q9e.jpg' alt='' id="Logo" />
                        </div>
                    </div>
                    <div className="right2 topMargin">
                        <h1>KOSIAKA <br />Comidas rapidas Medellín</h1>
                        <div className="scoialIcon">
                            <i><a target="_blank" href="https://www.facebook.com/Kosiakacomidasrapidasyhelados"><FacebookIcon className='fab fa-facebook facebook' /></a></i>
                            <i><a target="_blank" href="https://www.instagram.com/kosiaka_food/"><InstagramIcon className='fab fa-instagram instagram' /></a></i>
                            <i><a target="_blank" href="https://api.whatsapp.com/send/?phone=573046300022&text&type=phone_number&app_absent=0"><WhatsAppIcon className='fab fa-whatsApp whatsApp' /></a></i>
                        </div>
                        <p>Saborea nuestra rapidez en cada bocado, con nuestras deliciosas comidas rapidas</p>
                        <div className="btn_tin"><button id="tin"><Link to="/menu">Ver menú</Link></button></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
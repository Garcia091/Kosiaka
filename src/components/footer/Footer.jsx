import React from 'react'
import '../footer/footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
    return (
        <>
            <footer>
                <div className='f1' ><svg viewBox="0 0 500 150" preserveAspectRatio="none"
                    className='f2'>
                    <path d="M0.00,50.10 C150.00,150.33 271.29,-50.10 500.00,50.10 L500.00,-0.00 L0.00,-0.00 Z"
                        className='f3' ></path>
                </svg>
                </div>
                <div class="containerFoo clearfix">

                    <div class="col" id="col-1">
                        <section class="newsletter">
                            <img id="pieLogo" src="./imagenes/Logo.jpeg" alt="" />
                        </section>
                    </div>
                    <div className="scoialIcon">
                        <i><a target="_blank" href="https://www.facebook.com/Kosiakacomidasrapidasyhelados"><FacebookIcon className='fab fa-facebook facebook' /></a></i>
                        <i><a target="_blank" href="https://www.instagram.com/kosiaka_food/"><InstagramIcon className='fab fa-instagram instagram' /></a></i>
                        <i><a target="_blank" href="https://api.whatsapp.com/send/?phone=573046300022&text&type=phone_number&app_absent=0"><WhatsAppIcon className='fab fa-whatsApp whatsApp' /></a></i>

                    </div>

                </div>
            </footer>
        </>

    )
}

export default Footer

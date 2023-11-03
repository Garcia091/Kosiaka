import React from 'react'
import '../header/header.css'
import {
    Link
} from "react-router-dom";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WorkIcon from '@mui/icons-material/Work';
import GridViewIcon from '@mui/icons-material/GridView';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';



import { useState } from 'react'

const Header = () => {
    const [sidebar, setSidebar] = useState(false);

    window.addEventListener('scroll', () => {
        const header = document.querySelector('header')
        header.classList.toggle('active', window.screenY > 200)
    })
    return (
        <>
            <header className='header'>
                <div className="container flex">
                    <div className='LogoP'>
                        <div >
                            <Link to="/" className="Logo">Kosiaka</Link>
                        </div>
                    </div>

                    <div className="nav">
                        <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/historia">Historia</Link></li>
                            <li><Link to="/menu">Menú</Link></li>
                            <li><Link to="/ubucacion">Ubicación</Link></li>
                            <li><Link to="/encuesta">Encuesta</Link></li>
                            <li className='icon'>
                                <SearchOutlinedIcon className="HeaderIcon" />
                                <WorkIcon className="HeaderIcon" />
                                <GridViewIcon className="HeaderIcon" />
                            </li>
                        </ul>
                    </div>
                    <button className='navbar-items-icon' onClick={() => setSidebar(!sidebar)}>
                        {sidebar ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header
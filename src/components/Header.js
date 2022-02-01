import React from 'react'
import './Header.css'
import logo from '../assets/logo.png'
import connect from '../assets/connect.svg'



const Header = () => {
    return (
        <div>
            <div id="___gatsby">
            <div id="gatsby-focus-wrapper">
            <header className="navbar">
                <nav>
                    <ul>
                        <li className="logo">
                            <img src={ logo } alt='logo'/></li>
                        <li className="getInTouch"><a href="mailto: pharaohmak@sleepingpharaoh.com" target="_blank" rel="noreferrer" aria-label="Click here to scroll directly to the Contact Me section"><img src={ connect } alt="" /></a></li>
                    </ul>
                </nav>

               
            </header>
            <section className="Hero__HeroStyles-sc-17fa0jw-0 dxlkPI grid-wrapper ">
                    
                    <p className="subheading ">Makram Ibrahim is...</p>
                    <h1>Sleeping</h1>
                    <h1>Pharaoh</h1>
                    <p className="surheading "><span className="design ">Design.</span> <span className="develope ">Development.</span> <span className="deploy ">Deployment.</span></p>
                </section>
        </div>
        </div>
        </div>
    )
}

export default Header
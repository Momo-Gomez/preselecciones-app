import React from 'react'
import './header.css'
import CP from '../../../assets/familiaCasa.jpg'

const Header = () => {
    return (
        <header>
            <div className= 'container header-container'>    
                    <div className= "couple d-flex justify-content-center">
                        <img src={CP} alt="couple" />
                    </div>
                </div>
        
        </header>
    )
}

export default Header;
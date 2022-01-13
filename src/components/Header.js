import React from 'react'
import './Header.css';
import logo from '../assets/header/cryptopunk-logo.png';
import searchIcon from '../assets/header/search.png';
import themeSwitchIcon from '../assets/header/theme-switch.png';

const header = () => {
    return (
        <div className='header'>
            
            <div className='logo-container'>
                <img src={logo} className='logo' alt="" />
            </div>
            <div className="searchBar">
                <div className="searchIconContainer">
                    <img src={searchIcon} alt=""/>
                </div>
                <div className="searchInput">
                    <input type="text" 
                    className="searchInput" 
                    placeholder="Collection, item or user..."/>
                </div>
            </div>
            <div className='headerItem'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Airdrop</p>
            </div>
            <div className='headerActions'>
                <div className='themeSwitchContainer'>
                    <img src={themeSwitchIcon}/>
                </div>
            </div>
            <div className='loginButton'>
                Get in
            </div>

        </div>
    )
}

export default header

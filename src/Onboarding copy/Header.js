import React from 'react';
import './Header.css';
import bannerImage from '../assets/bannerimage.png'; // Adjust the path as necessary

const Header = () => {
    return (
        <header className="header">
            {/* <div className="banner">
                <div className="bannerimage">
                    <img src={bannerImage} alt="Product 1" />
                </div>
            </div> */}
            <span className="header-top">Telkomsel RumPi</span>
            <span className="header-bottom">Rumah Pintar, Keluarga Aman, Hidup Lebih Praktis.</span>
        </header>
    );
};

export default Header;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css'; // Assuming the CSS is in Navbar.css

const Navbar = () => {
    const navigate = useNavigate();

    const handleCamClick = () => {
        navigate('/cam');
    };

    const handleProfileClick = () => {
        navigate('/profile');
    };

    const handleHomeClick = () => {
        navigate('/home');
    };

    const handleCloudClick = () => {
        navigate('/cloud');
    };
    return (
        <div className="navbar">
            <div className="navbar-tab">
                <div className="nav-group">
                    <div className="nav-item" onClick={handleHomeClick}>
                        <img src={require('./assets/NavBar - Home.png')} alt="Home Icon" />
                        <div className="nav-item-text">Home</div>
                    </div>
                    <div className="nav-item">
                        <img src={require('./assets/NavBar - Shopping Bag.png')} alt="Shopping Bag Icon" />
                        <div className="nav-item-text">Shop</div>
                    </div>
                </div>
                <div className="float-btn">
                    <img src={require('./assets/NavBar - Floating Button.png')} alt="Floating Button Icon" onClick={handleCamClick} />
                </div>
                <div className="nav-group">
                    <div className="nav-item" onClick={handleCloudClick}>
                        <img src={require('./assets/NavBar - Cloud.png')} alt="Control Icon" />
                        <div className="nav-item-text">Cloud</div>
                    </div>
                    <div className="nav-item" onClick={handleProfileClick}>
                        <img src={require('./assets/NavBar - Profile.png')} alt="Profile Icon" />
                        <div className="nav-item-text">Profile</div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;
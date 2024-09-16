import React, { useState } from 'react';
import LogOut from '../components/component/modal'; // Ensure the import path is correct
import Details from '../Homepage/Details.js'; // Import the Details component
import HelpCenter from '../Homepage/HelpCenter.jsx'; // Import the HelpCenter component
import Lokasi from '../Homepage/Lokasi'; // Import the Lokasi component

const Profile = () => {
    const [isLogoutOpen, setIsLogoutOpen] = useState(false);
    const [showDetails, setShowDetails] = useState(false); // Add showDetails state
    const [isBantuan, setIsBantuan] = useState(false); // State for showing HelpCenter
    const [isLokasi, setIsLokasi] = useState(false); // State for showing Lokasi

    const containerStyle = {
        width: '100%',
        height: '100vh',
        backgroundColor: '#EFF1F4',
        fontFamily: 'Poppins, sans-serif',
        padding: '0px',
        boxSizing: 'border-box',
        overflowY: 'auto',
        overflowX: 'hidden',
        position: 'relative',
        transition: 'opacity 0.3s ease',
    };
    const profileSectionStyle = {
        backgroundImage: 'url(/images/bghelp.png)',
        backgroundSize: 'cover',
        height: '464px',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#1A294D',
        padding: '20px 0',
        color: '#fff',
        boxSizing: 'border-box',
    };

    const profilePictureStyle = {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: '15px',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
    };

    const emailStyle = {
        fontWeight: 'bold',
    };

    const menuStyle = {
        alignSelf: 'center',
        width: '300px',
        marginTop: '30px',
        backgroundColor: 'rgba(239, 241, 244, 0.7)',
        borderRadius: '16px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '16px',
        boxSizing: 'border-box',
    };

    const menuItemStyle = {
        display: 'flex',
        alignItems: 'center', // Center items vertically
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        padding: '16px',
        justifyContent: 'space-between',
        marginBottom: '15px',
        height: '45px',
        color: '#1A294D',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '22px',
        cursor: 'pointer',
        boxSizing: 'border-box',
    };

    const buttonStyle = {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        width: '24px',
        height: '24px',
        alignItems: 'center', // Center arrow vertically
    };

    const arrowStyle = {
        width: '16px', // Adjust width
        height: '8px', // Keep aspect ratio
        marginBottom: '20px',
    };

    const logoutButtonStyle = {
        marginTop: '80px',
        alignSelf: 'center',
        color: '#ED0226',
        fontFamily: 'poppins',
        fontWeight: '400',
        backgroundColor: 'transparent',
        border: '1px solid red',
        borderRadius: '30px',
        padding: '10px 30px',
        width: '328px',
        height: '48px',
        fontSize: '16px',
        cursor: 'pointer',
        marginBottom: '20px',
        textAlign: 'center',
    };

    const appVersionStyle = {
        fontSize: '12px',
        color: '#B3B3B3',
    };

    const iconStyle = {
        width: '18px',
        height: '18px',
        marginRight: '10px',
    };

    const handlePerangkatClick = () => {
        setShowDetails(true); // Show the Details component
    };

    const handleLokasiClick = () => {
        setIsLokasi(true); // Show the Lokasi component
    };

    const handleLogoutClick = () => {
        setIsLogoutOpen(true); // Set state to open modal
    };

    const closeLogoutModal = () => {
        setIsLogoutOpen(false); // Set state to close modal
    };

    const handleBackFromDetails = () => {
        setShowDetails(false); // Return to the profile screen
    };

    const handleBackFromLokasi = () => {
        setIsLokasi(false); // Return to the profile screen
    };

    const handleBantuanClick = () => {
        setIsBantuan(true); // Show the HelpCenter component
    };

    const handleBackFromBantuan = () => {
        setIsBantuan(false); // Return to the profile screen
    };

    return (
        <div style={containerStyle}>
            {showDetails ? (
                <Details onBack={handleBackFromDetails} />
            ) : isBantuan ? (
                <HelpCenter onBack={handleBackFromBantuan} />
            ) : isLokasi ? (
                <Lokasi onBack={handleBackFromLokasi} />
            ) : (
                <>
                    <div style={profileSectionStyle}>
                        <img
                            src="/images/prof.png"
                            alt="Profile"
                            style={profilePictureStyle}
                        />
                        <p style={emailStyle}>budi_wicaksono@gmail.com</p>

                        <div style={menuStyle}>
                            <div style={menuItemStyle} onClick={handlePerangkatClick}>
                                <img src="/images/icon1.png" alt="Icon" style={iconStyle} />
                                <div style={{ flex: 1 }}>Perangkat Langganan</div>
                                <button style={buttonStyle}>
                                    <img src="/images/icon5.png" alt="Arrow Icon" style={arrowStyle} />
                                </button>
                            </div>
                            <div style={menuItemStyle} onClick={handleLokasiClick}>
                                <img src="/images/icon2.png" alt="Icon" style={iconStyle} />
                                <div style={{ flex: 1 }}>Pengaturan Lokasi</div>
                                <button style={buttonStyle}>
                                    <img src="/images/icon5.png" alt="Arrow Icon" style={arrowStyle} />
                                </button>
                            </div>
                            <div style={menuItemStyle} onClick={handleBantuanClick}>
                                <img src="/images/icon3.png" alt="Icon" style={iconStyle} />
                                <div style={{ flex: 1 }}>Bantuan</div>
                                <button style={buttonStyle}>
                                    <img src="/images/icon5.png" alt="Arrow Icon" style={arrowStyle} />
                                </button>
                            </div>
                            <div style={menuItemStyle}>
                                <img src="/images/icon4.png" alt="Icon" style={iconStyle} />
                                <div style={{ flex: 1 }}>Tentang RumPi</div>
                                <button style={buttonStyle}>
                                    <img src="/images/icon5.png" alt="Arrow Icon" style={arrowStyle} />
                                </button>
                            </div>
                        </div>

                        {isLogoutOpen && (
                            <LogOut isOpen={isLogoutOpen} onClose={closeLogoutModal} />
                        )}

                        <button style={logoutButtonStyle} onClick={handleLogoutClick}>
                            Keluar
                        </button>

                        <div style={appVersionStyle}>
                            App Version v1.0
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Profile;

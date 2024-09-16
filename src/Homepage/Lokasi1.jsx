import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RoomManagement1 from './RoomManagement1'; // Assume Details component is in the same folder

const Lokasi = () => {
    const navigate = useNavigate();
    const [showDetails, setShowDetails] = useState(false); // State to toggle details view

    const handleDetailsClick = () => {
        setShowDetails(true); // Show the Details component
    };

    const handleBackClick = () => {
        setShowDetails(false); // Go back to the main view
    };

    const container = {
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

    const header = {
        height: '158px',
    };

    const headercontainer = {
        height: '58px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    };

    const buttonStyle = {
        position: 'absolute',
        left: '10px',
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '20px',
        color: '#1A294D',
        cursor: 'pointer',
    };

    const substext = {
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
        color: '#000',
    };

    const whitecon = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '5px 0',
    };

    const menuSection = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    };

    const perangkatcon = {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
    };
    const perangkattxt = {
        color: '#757F90',
        fontSize: '14px',
        fontWeight: '400',
    };

    const perangkatimg = {
        marginRight: '5px',
        width: '15px',
        height: '15px',
    };

    const menuStyle = {
        marginTop: '20px',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '300px',
        gap: '16px',
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        padding: '16px',
    };

    const rumahtxt = {
        textAlign: 'left',
        fontSize: '16px',
        color: '#001A41',
        fontWeight: 400,
    };

    const detailcon = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer', // Add cursor pointer to indicate clickable
    };

    const detailtxt = {
        fontSize: '14px',
        color: 'red',
        fontWeight: 400,
        paddingRight: '12px',
    };

    const detailimg = {
        alignSelf: 'center',
        justifyContent: 'center',
    };

    const iconprof = {
        marginTop: '7px',
        alignSelf: 'flex-start',
    };

    const addDevice = {
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: 'poppins',
        fontWeight: 400,
        backgroundColor: '#ED0226',
        padding: '12px 24px 12px 24px',
        width: '328px',
        height: '48px',
        gap: '4px',
        fontSize: '16px',
        borderRadius: '40px',
        cursor: 'pointer',
        boxSizing: 'border-box',
    };

    if (showDetails) {
        return <RoomManagement1 onBack={handleBackClick} />; // Render Details component with back functionality
    }

    return (
        <div style={container}>
            <div style={header}>
                <div style={headercontainer}>
                    <button style={buttonStyle} onClick={() => navigate(-1)}>
                        <img src="/images/leftarrow.png" alt="Back" />
                    </button>
                    <div style={substext}>Pengaturan Lokasi</div>
                </div>
                <div style={menuSection}>
                    <div style={menuStyle}>
                        <div style={rumahtxt}>Rumah</div>
                        <div style={whitecon} onClick={handleDetailsClick}> {/* Click handler to show details */}
                            <div style={perangkatcon}>
                                <img src="/images/perangkat.png" alt="Back" style={perangkatimg} />
                                <div style={perangkattxt}>3 perangkat</div>
                            </div>
                            <div style={detailcon}>
                                <div style={detailtxt}>Detail</div>
                                <img src="/images/right.png" alt="Icon" style={detailimg} />
                            </div>
                        </div>
                        <img src="/images/iconprof.png" alt="Icon" style={iconprof} />
                    </div>
                </div>
            </div>
            <div style={addDevice}>Tambah Lokasi</div>
        </div>
    );
};

export default Lokasi;

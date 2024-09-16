import React, { useState } from 'react';
import Cloud1 from './Cloud1'; // Import Cloud1 component

const Cloud = () => {
    const [showCloud1, setShowCloud1] = useState(false); // State to handle navigation

    const containerStyle = {
        display: 'flex',
        backgroundImage: 'url(/images/cloudbg.png)',
        backgroundSize: 'cover',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'poppins, sans-serif',
    };

    const headercontainer = {
        top: 0,
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        marginLeft: '12px',
        height: '56px'
    };

    const maincon = {
        marginTop: '60px',
        width: '290px',
        borderRadius: '16px',
        padding: '16px',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const elderlyimage = {
        width: '290px',
        height: '180px',
        borderRadius: '8px',
        boxSizing: 'border-box',
    };

    const elderlytxt = {
        marginTop: '10px',
        textAlign: 'left',
        color: '#181C21',
        fontWeight: 600,
        fontSize: '16px'
    };

    const buttonStyle = {
        position: 'fixed',
        backgroundColor: 'transparent',
        border: 'none',
        left: '6px',
        fontSize: '20px',
        color: '#1A294D',
        cursor: 'pointer',
    };

    const substext = {
        textAlign: 'center',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px'
    };

    const gridContainer = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '10px',
        marginTop: '10px',
    };

    const gridItem = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        padding: '10px',
        backgroundColor: '#FFFFFF',
    };

    const iconStyle = {
        width: '33px',
        height: '33px',
    };

    const labelStyle = {
        textAlign: 'center',
        marginTop: '10px',
        fontSize: '12px',
        color: '#1A294D',
    };

    const menuStyle = {
        marginTop: '20px',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '320px',
        gap: '16px',
        borderRadius: '16px',
        padding: '16px',
        backgroundColor: '#FFFFFF',
        paddingRight: '10px',
        boxSizing: 'border-box'
    };

    const menuItemStyle = {
        marginTop: '9px',
        display: 'flex',
        backgroundColor: '#EFF1F4',
        borderRadius: '16px',
        padding: '12px',
        justifyContent: 'space-between',
        marginBottom: '17px',
        textAlign: 'left',
        paddingLeft: '15px',
        color: '#1A294D',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '22px',
        cursor: 'pointer',
        alignItems: 'center',  // Ensure items are centered vertically
    };

    const detailcon = {
        display: 'flex',
        alignItems: 'center', // Vertically align the text and image
        gap: '8px',  // Add space between text and image
    };

    const detailtxt = {
        fontSize: '12px',
        color: 'red',
        fontWeight: 400,
        marginRight: '8px',  // Space between the text and the image
        lineHeight: 'normal',  // Adjust the line height
    };

    const detailimg = {
        alignSelf: 'center',  // Ensure image is vertically centered
        justifyContent: 'center',
    };

    const equiptxt = {
        marginTop: '0px',
        textAlign: 'left',
        color: '#181C21',
        fontWeight: 600,
        fontSize: '16px',
        marginBottom: '15px'
    };

    const itemImageStyle = {
        width: '30px', // Adjust the size as needed
        height: '30px',
        marginRight: '15px', // Space between image and text
    };

    const itemTextContainer = {
        display: 'flex',
        alignItems: 'center', // This will align the image and text vertically
        flex: 1, // This makes sure the text container takes up the rest of the space
    };

    if (showCloud1) {
        return <Cloud1 />; // Render Cloud1 component when the state is true
    }

    return (
        <div style={containerStyle}>
            <div style={headercontainer}>
                <button style={buttonStyle} onClick={() => setShowCloud1(true)}>
                    <img src="/images/leftarrow.png" alt="Back" />
                </button>
                <div style={substext}>Elderly Care</div>
            </div>
            <div style={maincon}>
                <img src="/images/elderlybg.png" alt="Elderly Care" style={elderlyimage} />
                <div style={elderlytxt}>Track daily record of elderly in your home</div>
                {/* Add the grid layout here */}
                <div style={gridContainer}>
                    <div style={gridItem}>
                        <img src="/images/fall.png" alt="Fall Detection" style={iconStyle} />
                        <div style={labelStyle}>Fall Detection</div>
                    </div>
                    <div style={gridItem}>
                        <img src="/images/behaviour.png" alt="Behaviour Recognition" style={iconStyle} />
                        <div style={labelStyle}>Behaviour Recognition</div>
                    </div>
                    <div style={gridItem}>
                        <img src="/images/voice.png" alt="Voice Calls" style={iconStyle} />
                        <div style={labelStyle}>Voice Calls</div>
                    </div>
                    <div style={gridItem}>
                        <img src="/images/care.png" alt="24-hour Care" style={iconStyle} />
                        <div style={labelStyle}>24-hour Care</div>
                    </div>
                    <div style={gridItem}>
                        <img src="/images/activity.png" alt="Activity Record" style={iconStyle} />
                        <div style={labelStyle}>Activity Record</div>
                    </div>
                    <div style={gridItem}>
                        <img src="/images/cloud.png" alt="Cloud Storage" style={iconStyle} />
                        <div style={labelStyle}>Cloud Storage</div>
                    </div>
                </div>
            </div>
            <div style={menuStyle}>
                <div style={equiptxt}>Equipped Device</div>
                <div style={menuItemStyle}>
                    <div style={itemTextContainer}>
                        <img src="/images/houseimg.png" alt="Drawer Camera" style={itemImageStyle} />
                        <div>Drawer Camera</div>
                    </div>
                    <div style={detailcon}>
                        <div style={detailtxt}>Detail</div>
                        <img src="/images/right.png" alt="Icon" style={detailimg} />
                    </div>
                </div>
                <div style={menuItemStyle}>
                    <div style={itemTextContainer}>
                        <img src="/images/houseimg.png" alt="Garage" style={itemImageStyle} />
                        <div>Garage</div>
                    </div>
                    <div style={detailcon}>
                        <div style={detailtxt}>Detail</div>
                        <img src="/images/right.png" alt="Icon" style={detailimg} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cloud;

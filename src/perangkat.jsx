// HelpCenter.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Perangkat = () => {
    const navigate = useNavigate();
    const container = {
        backgroundColor: '#EFF1F4',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: '100vh',
        fontFamily: 'poppins, sans-serif',
    };

    const header = {
        backgroundColor: '#FFFFFF80',
        display: 'flex',
        flexDirection: 'column',
        height: '158px',
    }

    const headercontainer = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        marginLeft: '12px',
        height: '56px'
    }

    const buttonStyle = {
        position: 'absolute',
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '20px',
        color: '#1A294D',
        cursor: 'pointer',
    }

    const substext = {
        textAlign: 'center',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px'
    }

    const loccontainer = {
        padding: '0px 16px 0px 16px',
        gap: '8px',
        height: '70px',
        width: '215px'
    }

    const location = {
        marginTop: '15px',
        fontSize: '12px',
        height: '18px',
        paddingBottom: '7px',
        fontWeight: 400,
        color: '#757F90'
    }

    const house = {
        fontSize: '12px',
        display: 'flex',
        alignItems: 'center',
        justifycontent: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        width: '183px',
        height: '44px',
        padding: '13px 16px 13px 16px',
        boxSizing: 'border-box',
        border: '1px solid #DAE0E9'
    }

    const menuSection = {
        display: 'flex',
        flexDirection: 'column'
    }

    const menuStyle = {
        marginTop: '20px',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '300px',
        height: '290px',
        gap: '16px',
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        padding: '16px',
    };

    const cameracon = {
        display: 'flex',
        justifycontent: 'space-between',
        alignItems: 'center',
        paddingBottom: '17px',
    }

    const cameratxt = {
        fontSize: '16px',
        color: '#181C21',
        fontWeight: 600,
    }

    const houseimg = {
        paddingRight: '10px'
    }

    const menuItemStyle = {
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
    };

    const buttonStyle2 = {
        marginLeft: '90px',
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '20px',
        color: '#1A294D',
        cursor: 'pointer',
    };

    const detailcon = {
        display: 'flex',
    }

    const detailtxt = {
        fontSize: '12px',
        color: 'red',
        fontWeight: 400,
        paddingRight: '12px',
    }

    const detailimg = {
        alignSelf: 'center',
        justifyContent: 'center',
    }


    const addDevice = {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontFamily: 'poppins',
        fontWeight: 400,
        textAlign: 'center',
        backgroundColor: '#ED0226',
        borderRadius: '40px',
        padding: '12px 24px 12px 24px',
        width: '296px',
        height: '48px',
        fontSize: '16px',
        cursor: 'pointer',
        boxSizing: 'border-box',
        marginBottom: '20px',
    };


    return (
        <div style={container}>
            <div style={header}>
                <div style={headercontainer}>
                    <button style={buttonStyle} onClick={() => navigate(-1)}>
                        <img src="/images/leftarrow.png" alt="Back" />
                        </button>
                        <div style={substext}>Subscription Devices</div>
                </div>
                <div style={loccontainer}>
                    <div style={location}>Location</div>
                    <div style={house}>
                        House
                        <button style={buttonStyle2}><img src="/images/vectorhouse.png" alt="Icon" /></button>
                    </div>
                </div>
            </div>
            <div style={menuSection}>
                <div style={menuStyle}>
                    <div style={cameracon}>
                        <img src="/images/houseimg.png" alt="Icon" style={houseimg} />
                        <div style={cameratxt}>Indoor IP Camera</div>

                    </div>
                    <div style={menuItemStyle}>
                        <div style={{ flex: 1 }}>Drawer Camera</div>
                        <div style={detailcon}>
                            <div style={detailtxt}>Detail</div>
                            <img src="/images/right.png" alt="Icon" style={detailimg} />
                        </div>
                    </div>
                    <div style={menuItemStyle}>
                        <div style={{ flex: 1 }}>Car Garage</div>
                        <div style={detailcon}>
                            <div style={detailtxt}>Detail</div>
                            <img src="/images/right.png" alt="Icon" style={detailimg} />
                        </div>
                    </div>
                    <div style={menuItemStyle}>
                        <div style={{ flex: 1 }}>Balcony</div>
                        <div style={detailcon}>
                            <div style={detailtxt}>Detail</div>
                            <img src="/images/right.png" alt="Icon" style={detailimg} />
                        </div>
                    </div>
                    <div style={addDevice}>Add a Device</div>
                </div>
            </div>
        </div>
    );
};

export default Perangkat;

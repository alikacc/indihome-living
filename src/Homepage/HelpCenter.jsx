import React from 'react';
import { useNavigate } from 'react-router-dom';

const HelpCenter = () => {
    const navigate = useNavigate();

    const mainContainer = {
        top: 0,
        right: 0,
        left: 0,
        position: 'fixed',
        height: '100vh',
        backgroundColor: '#EFF1F4',
        fontFamily: 'Poppins, sans-serif', // Ensure Poppins is included
    };

    const headerContainer = {
        position: 'relative', // Allows positioning of background image and input separately
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Center the content vertically
        alignItems: 'center',
        height: '154px',
        background: 'linear-gradient(76.81deg, #B90024 15.71%, #FF0025 68.97%, #FD195E 94.61%)',
        borderRadius: '0px 0px 32px 0px',
        overflow: 'hidden',
    };

    const pusat = {
        alignSelf: 'flex-start',
        paddingBottom: '80px',
        height: '30px',
        paddingLeft: '16px',
        fontWeight: 700,
        fontSize: '22px',
        lineHeight: '30px',
        color: '#FFFFFF',
    };

    const inputWrapper = {
        marginTop: '94px',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '80%',
        border: '1px solid #BFC9D0',
        borderRadius: '12px',
        zIndex: 1, // Ensures input is on top of the background image
    };

    const bgimage = {
        position: 'absolute',
        bottom: '0',
        right: '0',
        height: '154px',
        zIndex: 0, // Ensures the image is behind the input
    };

    const searchIcon = {
        margin: '0 10px',
        width: '14.71px',
        height: '14.71px',
    };

    const kendalatxt = {
        textAlign: 'left',
        fontSize: '12px',
        borderRadius: '12px',
        fontFamily: 'Poppins, sans-serif',
        border: 'none',
        padding: '10px',
        width: '100%',
        boxSizing: 'border-box',
    };

    const topik = {
        marginTop: '20px',
        paddingLeft: '16px',
        fontWeight: 700,
        fontSize: '18px',
        lineHeight: '26px',
        color: '#2C2E33',
    };

    const menu = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '16px',
        padding: '16px',
    };

    const menuItem = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80px',
        backgroundColor: '#FFF',
        borderRadius: '8px',
        textAlign: 'center',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        position: 'relative',
    };

    const darkpink = {
        boxSizing: 'border-box',
        zIndex: 1,
        top: 0,
        position: 'absolute'
    }

    const pink = {
        boxSizing: 'border-box',
        zIndex: 0,
        top: 0,
        position: 'absolute'
    }

    const perangkatIcon = {
        marginBottom: '4px',
        width: '31px',
        height: '32.27px',
        zIndex: 2
    };

    const akunIcon = {
        marginBottom: '4px',
        width: '19px',
        height: '34px',
        zIndex: 2
    };

    const transakicon = {
        marginBottom: '4px',
        width: '27.9px',
        height: '34.5px',
        zIndex: 2
    }

    const kirimicon = {
        marginBottom: '4px',
        width: '35px',
        height: '35.92px',
        zIndex: 2
    }

    const appicon = {
        marginBottom: '4px',
        width: '23px',
        height: '31.89px',
        zIndex: 2
    }
    const menuText = {
        fontWeight: 600,
        fontSize: '14px',
        color: '#2C2E33',
    };


    const faqContainer = {
        padding: '16px',
        paddingTop: '8px',
        borderRadius: '8px',
        marginBottom: '10px',
    };

    const faqItem = {
        borderBottom: '1px solid #E0E0E0',
        padding: '12px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontWeight: 500,
        fontSize: '14px',
        color: '#2C2E33',
    };

    const customerService = {
        marginTop: '12px',
        textAlign: 'center',
        fontWeight: 400,
        fontSize: '14px',
        color: '#0050AE',
    };

    const handlePerangkatClick = () => {
        navigate('/jenis');
    };

    return (
        <div style={mainContainer}>
            <div style={headerContainer}>
                <img src="/images/Vector.png" alt="background" style={bgimage} />
                <div style={pusat}>Pusat Bantuan</div>
                <div style={inputWrapper}>
                    <input type="text" placeholder="Ketik kata kunci kendala" style={kendalatxt} />
                    <img src="/images/search.png" alt="search" style={searchIcon} />
                </div>
            </div>

            <div style={topik}>Pilih Topik Kendala</div>

            <div style={menu}>
                <div style={menuItem} onClick={handlePerangkatClick}>
                    <img src="/images/darkpink.png" alt="darkpink" style={darkpink} />
                    <img src="/images/pink.png" alt="pink" style={pink} />
                    <img src="/images/frameperangkat.png" alt="Perangkat" style={perangkatIcon} />
                    <span style={menuText}>Perangkat</span>
                </div>
                <div style={menuItem}>
                    <img src="/images/darkpink.png" alt="darkpink" style={darkpink} />
                    <img src="/images/pink.png" alt="pink" style={pink} />
                    <img src="/images/frameakun.png" alt="Akun" style={akunIcon} />
                    <span style={menuText}>Akun</span>
                </div>
                <div style={menuItem}>
                    <img src="/images/darkpink.png" alt="darkpink" style={darkpink} />
                    <img src="/images/pink.png" alt="pink" style={pink} />
                    <img src="/images/transakicon.png" alt="Transaksi" style={transakicon} />
                    <span style={menuText}>Transaksi</span>
                </div>
                <div style={menuItem}>
                    <img src="/images/darkpink.png" alt="darkpink" style={darkpink} />
                    <img src="/images/pink.png" alt="pink" style={pink} />
                    <img src="/images/kirimicon.png" alt="Pengiriman" style={kirimicon} />
                    <span style={menuText}>Pengiriman</span>
                </div>
                <div style={menuItem}>
                    <img src="/images/darkpink.png" alt="darkpink" style={darkpink} />
                    <img src="/images/pink.png" alt="pink" style={pink} />
                    <img src="/images/appicon.png" alt="Aplikasi" style={appicon} />
                    <span style={menuText}>Aplikasi</span>
                </div>
            </div>

            <div style={topik}>Pertanyaan yang Sering Diajukan</div>

            <div style={faqContainer}>
                <div style={faqItem}>
                    Apa itu T-Home? <span>&#x276F;</span>
                </div>
                <div style={faqItem}>
                    Cara Langganan T-Home? <span>&#x276F;</span>
                </div>
                <div style={faqItem}>
                    Cara Membayar Tagihan T-Home? <span>&#x276F;</span>
                </div>
                <div style={faqItem}>
                    Cara Berhenti Berlangganan? <span>&#x276F;</span>
                </div>

                <div style={customerService}>
                    <span style={{ color: '#000000' }}>Masih mengalami kendala?</span> <br />
                    <span style={{ color: '#0050AE', fontWeight: 600 }}>Hubungi Customer Service</span>
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;

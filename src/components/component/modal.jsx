import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const LogOut = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const modalRef = useRef(null);

    if (!isOpen) return null;

    const handleBackdropClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose(); // Close modal when clicking outside the modal content
        }
    };

    const handleLogout = () => {
        navigate('/');
    };


    return (
        <div style={modalStyle} onClick={handleBackdropClick}>
            <div style={modalContentStyle} ref={modalRef}>
                <div style={graycon}></div>
                <img src="/images/warning.png" alt="warning" style={img} />
                <div style={keluartxt}>Keluar dari Aplikasi?</div>
                <div style={capt}>Ketika keluar, kamu tidak mendapat notifikasi terkait alarm dan info penting terkait perangkatmu</div>
                <div style={redButton} onClick={handleLogout}>Keluar</div>
                <div style={whiteButton} onClick={onClose}>Batalkan</div>
            </div>
        </div>
    );
};
const modalStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const modalContentStyle = {
    fontFamily: 'poppins',
    backgroundColor: 'white',
    padding: '18px',
    width: '360px',
    textAlign: 'center',
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    borderRadius: '20px 20px 0px 0px',
    boxSizing: 'border-box'
};

const graycon = {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '44px',
    height: '6px',
    backgroundColor: '#E9E8ED',
    borderRadius: '50px',
}

const img = {
    marginTop: '20px',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '88px',
    height: '108px',
    marginBottom: '20px',
}

const keluartxt = {
    fontWeight: 600,
    fontSize: '16px',
    color: '#181C21',
    marginBottom: '3.5px'
}

const capt = {
    color: '#757F90',
    fontWeight: 400,
    fontSize: '12px',
    marginBottom: '20px'
}

const redButton = {
    backgroundColor: '#ED0226',
    height: '48px',
    width: '328px',
    borderRadius: '40px',
    padding: '12px 24px 12px 24px',
    gap: '4px',
    alignItems: 'center',
    marginBottom: '8px',
    color: '#FFFFFF',
    justifyContent: 'center',
    boxSizing: 'border-box'

}

const whiteButton = {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: '48px',
    width: '328px',
    color: '#ED0226',
    border: '1px solid #ED0226',
    borderRadius: '40px',
    padding: '12px 24px 12px 24px',
    gap: '4px',
    alignItems: 'center',
    boxSizing: 'border-box'

}

export default LogOut;

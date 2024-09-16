import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Undangan.css'; // Import the CSS file

const VerificationLink = ({ contact, onBack }) => {
    const [seconds, setSeconds] = useState(5); // Set timer to 5 seconds
    const isEmail = contact.includes('@');
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        if (seconds > 0) {
            const timer = setInterval(() => setSeconds(seconds - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [seconds]);

    const handleResend = () => {
        if (seconds === 0) {
            // Redirect to /home when the button is clicked after the timer runs out
            navigate('/home');
        } else {
            // Logic to resend the verification link if the timer hasn't run out
            setSeconds(5); // Reset timer to 5 seconds after resend
        }
    };

    return (
        <div className="undangan-container">
            <div className="icon-left">
                <img src={require('../assets/icon left.png')} className="nav-icon-all" onClick={onBack} />
            </div>
            <div className="large-submit">
                <img
                    src={require(`../assets/${isEmail ? 'undangan.png' : 'phonenumber.png'}`)}
                    alt={isEmail ? 'Envelope' : 'Phone'}
                    className="envelope-icon"
                />
            </div>
            <div className="verification-title">
                {isEmail ? 'Undangan Telah Dikirim' : 'Verifikasi Nomor HP Kamu'}
            </div>
            <div className="verification-text">
                Tautan verifikasi telah dikirim ke <strong>{contact}</strong>
                <br />
                {isEmail
                    ? 'Periksa email dan klik tautan verifikasi untuk melanjutkan registrasi.'
                    : 'Periksa SMS kamu dan klik tautan verifikasi untuk melanjutkan registrasi.'}
            </div>
            <button
                className={`resend-button ${seconds === 0 ? 'redirect-button' : 'disabled-button'}`}
                onClick={handleResend}
                disabled={seconds > 0} // Disable button while counting
            >
                {seconds > 0 ? `Kirim ulang (${seconds}s)` : 'Ke Aplikasi Rumpi'}
            </button>
        </div>
    );
};

export default VerificationLink;

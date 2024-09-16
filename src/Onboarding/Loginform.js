import React, { useState } from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM for portals
import './Loginform.css';

const LoginForm = () => {
    // State for login form email
    const [loginEmail, setLoginEmail] = useState('');
    const [error, setError] = useState('');

    // State for signup form email and validity
    const [signupEmail, setSignupEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false); // Add state for signup email validity
    const [showSignup, setShowSignup] = useState(false);

    // Handle login email change
    const handleLoginEmailChange = (event) => {
        setLoginEmail(event.target.value);
    };

    // Handle signup email change
    const handleSignupEmailChange = (event) => {
        const value = event.target.value;
        setSignupEmail(value);

        // Simple email validation using regex for signup
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsEmailValid(emailRegex.test(value)); // Update signup email validity
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!loginEmail) {
            setError('Email is required');
            return;
        }

        console.log('Logging in with email:', loginEmail);

        setError('');
        setLoginEmail('');
    };

    const handleSignupClick = () => {
        setShowSignup(true);
    };

    // Handle close of the signup container
    const handleCloseSignup = () => {
        setShowSignup(false); // Set showSignup to false to close the signup modal
    };

    // Render the signup form using a portal directly into the body to avoid confinement by any parent
    const signupForm = showSignup ? ReactDOM.createPortal((
        <div className="signup-overlay">
            <div className="signup-container">
                <div className="drag-indicator" onClick={handleCloseSignup}></div>
                {/* Drag indicator for closing the modal */}
                <p className="signup-title">Daftar Baru Akun RumPi</p>
                <input
                    type="email"
                    placeholder="Ketik email"
                    className="signup-email-input"
                    value={signupEmail}
                    onChange={handleSignupEmailChange} // Signup email change handler
                />
                <button
                    type="submit"
                    className={`signup-button ${isEmailValid ? 'active' : 'inactive'}`} // Toggle button class based on email validity
                    disabled={!isEmailValid} // Disable button if email is invalid
                >
                    <p className="signup-button-text">Selanjutnya</p>
                </button>
            </div>
        </div>
    ), document.body) : null;

    return (
        <div className={`login-container ${showSignup ? 'dimmed' : ''}`}>
            <form onSubmit={handleSubmit} className="login-container1">
                <div className="login-container2">
                    <p className="login-instruction">Masuk dengan email</p>
                    <input
                        type="email"
                        placeholder="Email"
                        className="email-input"
                        value={loginEmail} // Login email state
                        onChange={handleLoginEmailChange} // Login email change handler
                    />
                    {error && <p className="error-message">{error}</p>}
                </div>
                <button type="submit" className="login-button">
                    <p className="login-button-text">Masuk</p>
                </button>
            </form>
            <div className="signup">
                <div className="signup-frame">
                    <p className="signup-link">
                        Belum punya akun? <span onClick={handleSignupClick}>Daftar</span>
                    </p>
                </div>
            </div>
            {signupForm}
        </div>
    );
};

export default LoginForm;

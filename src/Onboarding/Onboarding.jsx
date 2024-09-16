import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TermsAndConditions from './TermsAndCondition'; // Import the Terms and Conditions component

const Onboarding = () => {
  const [isDraggedUp, setIsDraggedUp] = useState(false); // Track drag state
  const [showRegister, setShowRegister] = useState(false); // Track register bottom sheet state
  const [email, setEmail] = useState(''); // Track email input
  const [emailError, setEmailError] = useState(''); // Track email error state
  const [showTerms, setShowTerms] = useState(false); // Track terms and conditions page
  const [currentImage, setCurrentImage] = useState('/images/image1.png'); // Image switcher state
  const whiteconRef = useRef(null);
  const startYRef = useRef(0);

  const navigate = useNavigate();
  const handleLogin = () => {
    // Redirect to the /home route
    navigate('/home');
  };

  // Function to handle image switching
  useEffect(() => {
    const images = ['/images/image1.png', '/images/banner.png', '/images/banner_2.png'];
    let currentIndex = 0;

    const imageInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length; // Loop through the images
      setCurrentImage(images[currentIndex]);
    }, 2000);

    return () => clearInterval(imageInterval); // Cleanup the interval on unmount
  }, []);

  const handleTouchStart = (e) => {
    startYRef.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    const moveY = e.touches[0].clientY;
    const diffY = moveY - startYRef.current;

    if (diffY < -10 && !isDraggedUp) {
      setIsDraggedUp(true);
      whiteconRef.current.style.height = '150px'; // Extend height when dragged up
      whiteconRef.current.style.transform = 'translateY(-30%)'; // Move halfway up
    } else if (diffY > 10 && isDraggedUp) {
      setIsDraggedUp(false);
      whiteconRef.current.style.height = '150px'; // Reset height when dragged down
      whiteconRef.current.style.transform = 'translateY(0px)'; // Move back down
    }
  };

  const handleDaftarClick = () => {
    setShowRegister(true);
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
      setEmailError('Format email salah. Periksa lagi.');
    } else {
      setEmailError('');
    }
  };

  const handleSelanjutnyaClick = () => {
    if (email && !emailError) {
      setShowTerms(true); // Show terms and conditions
      setShowRegister(false); // Hide the register bottom sheet
    }
  };

  const handleBackFromTerms = () => {
    setShowTerms(false);
    setShowRegister(true);
  };

  return (
    <>
      {showTerms ? (
        <TermsAndConditions handleBackClick={handleBackFromTerms} />
      ) : (
        <div style={styles.container}>
          <div style={styles.header}>
            <img src={currentImage} alt="Telkomsel RumPi" style={styles.image} />
          </div>
          <div style={styles.content}>
            <div style={styles.title}>Indihome Living</div>
            <div style={styles.subtitle}>Rumah Pintar, Keluarga <br />Aman, Hidup Lebih Praktis.</div>
            <div style={styles.form}>
              <div style={styles.inputLabel}>Masuk dengan email IndiHome</div>
              <input type="email" placeholder="Email" style={styles.input} />
              <button style={styles.button} onClick={handleLogin}>Masuk</button>
              <p style={styles.registerLink}>
                Belum punya akun? <span style={styles.link} onClick={handleDaftarClick}>Daftar</span>
              </p>
            </div>
          </div>

          {/* Register Bottom Sheet */}
          {showRegister && (
            <div style={styles.registerSheet}>
              <div style={styles.bottomSheetHandle}></div>
              <div style={styles.registerHeader}>Daftar Baru Akun RumPi</div>
              <div style={styles.inputLabel}>Email</div>
              <input
                type="email"
                placeholder="Ketik email"
                value={email}
                onChange={handleEmailChange}
                style={emailError ? styles.inputError : styles.input}
              />
              {emailError && <div style={styles.errorText}>{emailError}</div>}
              <button
                style={email && !emailError ? styles.buttonEnabled : styles.buttonDisabled}
                disabled={!email || !!emailError}
                onClick={handleSelanjutnyaClick}
              >
                Selanjutnya
              </button>
            </div>
          )}

          {/* Draggable Bottom Sheet */}
          <div
            style={styles.whitecon(isDraggedUp)}
            ref={whiteconRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <div style={styles.graycon}></div>
            <div style={styles.rumahaman}>Rumah lebih aman dengan perangkat ini</div>
            <img src="/images/image11.png" alt="Telkomsel RumPi" style={styles.bttmimage} />
            <div style={styles.camera}>Indoor Camera</div>
            <div style={styles.captcamera}>Sudah termasuk penyimpanan cloud & AI</div>
            <div style={styles.captmulai}>Mulai dari</div>
            <div style={styles.captuang}>Rp 30.000/bulan</div>
          </div>
        </div>
      )}
    </>
  );
};

// Styling
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'url(/images/image3.png)',
    backgroundSize: 'cover',
    fontFamily: 'poppins',
    top: 0,
    position: 'fixed',
    width: '100%',
    height: '100vh',
    transition: 'transform 0.3s ease-in-out',
    zIndex: 10,
  },
  header: {
    top: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: '5',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    marginTop: '-13px',
    marginBottom: '5px',
    color: '#d71a23',
    fontSize: '16px',
    fontWeight: 700,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '25px',
    fontWeight: 700,
    color: '#333333',
    marginBottom: '12px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid white',
    borderRadius: '16px',
    width: '328px',
    height: '200px',
    background: 'linear-gradient(0deg, rgba(239, 241, 244, 0.5), rgba(239, 241, 244, 0.5)), linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
  },
  inputLabel: {
    alignSelf: 'flex-start',
    paddingLeft: '17px',
    marginTop: '15px',
    fontSize: '12px',
    fontWeight: 400,
    color: '#757F90',
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    paddingLeft: '16px',
    width: '276px',
    height: '37px',
    border: '1px solid #ddd',
    borderRadius: '12px',
    fontSize: '12px',
    fontFamily: 'poppins',
    marginBottom: '0px',
  },
  inputError: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    paddingLeft: '16px',
    width: '276px',
    height: '37px',
    border: '1px solid red',
    borderRadius: '12px',
    fontSize: '12px',
    fontFamily: 'poppins',
    marginBottom: '0px',
  },
  errorText: {
    color: 'red',
    fontSize: '12px',
    marginTop: '4px',
    marginBottom: '8px',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d71a23',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    gap: '4px',
    borderRadius: '40px',
    width: '296px',
    height: 'auto',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 400,
    fontFamily: 'poppins',
  },
  buttonDisabled: {
    backgroundColor: '#DAE0E9',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    gap: '4px',
    borderRadius: '40px',
    width: '296px',
    height: 'auto',
    cursor: 'not-allowed',
    fontSize: '16px',
    fontWeight: 400,
    fontFamily: 'poppins',
  },
  buttonEnabled: {
    backgroundColor: '#d71a23',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    gap: '4px',
    borderRadius: '40px',
    width: '296px',
    height: 'auto',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 400,
    fontFamily: 'poppins',
  },
  registerLink: {
    fontSize: '14px',
    marginTop: '16px',
    color: '#666',
  },
  link: {
    color: '#d71a23',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  registerSheet: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 'auto',
    background: 'white',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
    boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
    padding: '16px',
    zIndex: 4, // Higher z-index than draggable bottom sheet
  },
  bottomSheetHandle: {
    width: '40px',
    height: '4px',
    background: '#D3D3D3',
    borderRadius: '2px',
    margin: '0 auto 16px',
  },
  registerHeader: {
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '24px',
    color: 'black',
    marginBottom: '16px',
  },
  whitecon: (isDraggedUp) => ({
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '23px',
    paddingTop: '12px',
    marginTop: '30px',
    backgroundColor: '#EFF1F4',
    height: isDraggedUp ? '350px' : '170px',
    width: '360px',
    bottom: 0,
    position: 'relative',
    zIndex: 2, // Lower z-index than register bottom sheet
    transition: 'height 0.3s ease-in-out', // Smooth height transition
  }),
  graycon: {
    display: 'flex',
    alignSelf: 'center',
    zIndex: 20,
    width: '40px',
    height: '2px',
    backgroundColor: 'gray',
    alignSelf: 'center',
    position: 'fixed',
  },
  rumahaman: {
    marginTop: '25px',
    textAlign: 'left',
    fontSize: '14px',
    fontWeight: 700,
    paddingLeft: '25px',
  },
  camera: {
    textAlign: 'left',
    fontSize: '14px',
    fontWeight: 700,
    paddingTop: '10px',
    paddingLeft: '30px',
  },
  captcamera: {
    paddingLeft: '30px',
    textAlign: 'left',
    fontSize: '12px',
    fontWeight: 300,
  },
  captmulai: {
    paddingTop: '10px',
    textAlign: 'left',
    paddingLeft: '30px',
    fontSize: '12px',
  },
  captuang: {
    textAlign: 'left',
    paddingLeft: '30px',
    color: 'red',
    fontSize: '17px',
    fontWeight: 900,
  },
  bttmimage: {
    alignSelf: 'center',
    marginTop: '8.5px',
    width: '310px',
  },
};

export default Onboarding;

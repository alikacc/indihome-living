import React, { useEffect, useState } from 'react';

const Terimakasih = ({ isVisible, onClose }) => {
    const [visible, setVisible] = useState(isVisible);

    useEffect(() => {
        if (isVisible) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
                const fadeOutTimer = setTimeout(() => {
                    onClose(); // Close the modal after the fade-out transition
                }, 1000); // Match this with the fade-out duration
                return () => clearTimeout(fadeOutTimer);
            }, 3000); // Display time before fade-out
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    return (
        <div style={{ ...modalOverlay, opacity: visible ? 1 : 0, transition: 'opacity 1s' }}>
            <div style={modalContent}>
                <img src="/images/checklist.png" alt="checklist" style={checklistStyle} />
                <div style={modaltxt}>Terima kasih atas penilaiannya</div>
            </div>
        </div>
    );
};

// Styles
const modalOverlay = {
    position: 'fixed',
    top: '3px', // Adjust as needed
    left: '50%',
    transform: 'translate(-50%, 0)',
    padding: '10px',
    zIndex: 1000,
    transition: 'opacity 1s', // Fade transition
};

const modalContent = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items to the start
    height: '30px',
    width: '328px',
    backgroundColor: '#FFFFFF',
    padding: '10px',
    borderRadius: '50px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Optional: adds a slight shadow for better visibility
};

const modaltxt = {
    marginLeft: '8px', // Space between the checklist icon and the text
    flex: 1, // Ensures text takes up remaining space
    textAlign: 'center', // Centers text within its allocated space
};

const checklistStyle = {
    width: '20px',
    height: '20px',
};

export default Terimakasih;

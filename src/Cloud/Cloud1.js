import React, { useState } from 'react';
import './Cloud1.css'; // Import the CSS file
import NavBar from '../NavBar';
import aiImage from '../assets/ai.png'; // Adjust the path as necessary
import backgroundAI from '../assets/BackgroundDashboard.png'; // Adjust the path as necessary
import elderlyCareImage from '../assets/ai.png'; // Adjust the path as necessary
import Cloud2 from './Cloud2.jsx'; // Import Cloud2 component

const AIPage = () => {
    const [isCloudClick, setIsCloudClick] = useState(false); // State to handle navigation

    const handleCloudClick = () => {
        setIsCloudClick(true); // Set the state to true when the card is clicked
    };

    // If isCloudClick is true, navigate to Cloud2
    if (isCloudClick) {
        return <Cloud2 />;
    }

    return (
        <div className="ai-page-container">
            <div className="ai-decor" style={{ backgroundImage: `url(${backgroundAI})` }}></div>
            <div className="ai-header" style={{ backgroundImage: `url(${aiImage})` }}>
                <div className="ai-title">
                    <div className="ai-title-title">Always Ready, Always Secure with Cloud + AI</div>
                    <div className="ai-title-sub">Automatic cloud storage and event detection powered by AI technology.</div>
                </div>
            </div>
            <div className="ai-features-container">
                <div className="ai-feature-container-title">AI Features</div>
                <div className="ai-feature-card" onClick={handleCloudClick}> {/* Add onClick event */}
                    <img src={elderlyCareImage} alt="Elderly Care" className="ai-feature-image" />
                    <div className="ai-feature-description">
                        <div className="ai-feature-title">Elderly Care</div>
                        <div className="ai-feature-sub">Daily record of elderly life</div>
                    </div>
                </div>
            </div>
            <NavBar />
        </div>
    );
};

export default AIPage;

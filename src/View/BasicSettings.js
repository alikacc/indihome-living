import React, { useState } from 'react';
import { FaArrowLeft, FaChevronRight } from 'react-icons/fa';
import './BasicSettings.css';

const BasicSettings = ({ onBack }) => {
    const [promptVoice, setPromptVoice] = useState(true);
    const [imageMirror, setImageMirror] = useState(true);
    const [imageFlip, setImageFlip] = useState(true);
    const [ptzFlip, setPtzFlip] = useState(false);
    const [panTilt, setPanTilt] = useState(false);

    return (
        <div className="container-basicsetting">
            <div className="top-header-basicsetting">
                <div className="top-navigation-basicsetting">
                    <img src={require('../assets/icon left.png')} className="nav-icon-all" onClick={onBack} />
                    <span className="navigation-title-basicsetting">Pengaturan Dasar</span>
                </div>
            </div>
            <div className="settings-list">
                <div className="settings-item">
                    <span className="settings-text">Prompt Voice</span>
                    <button
                        className={`toggle-button ${promptVoice ? 'active' : ''}`}
                        onClick={() => setPromptVoice(!promptVoice)}
                    >
                        <div className="toggle-circle"></div>
                    </button>
                </div>
                <a href="/device-name" className="settings-item">
                    <span className="settings-text">Nama Perangkat</span>
                    <span className="settings-value">Outdoor Camera</span>
                    <FaChevronRight className="settings-arrow" />
                </a>
                <div className="settings-item">
                    <span className="settings-text">Image Mirror</span>
                    <button
                        className={`toggle-button ${imageMirror ? 'active' : ''}`}
                        onClick={() => setImageMirror(!imageMirror)}
                    >
                        <div className="toggle-circle"></div>
                    </button>
                </div>
                <div className="settings-item">
                    <span className="settings-text">Image Flip</span>
                    <button
                        className={`toggle-button ${imageFlip ? 'active' : ''}`}
                        onClick={() => setImageFlip(!imageFlip)}
                    >
                        <div className="toggle-circle"></div>
                    </button>
                </div>
                <a href="/language" className="settings-item">
                    <span className="settings-text">Bahasa Perangkat</span>
                    <span className="settings-value">English</span>
                    <FaChevronRight className="settings-arrow" />
                </a>
                <a href="/shaking-speed" className="settings-item">
                    <span className="settings-text">Shaking Speed</span>
                    <span className="settings-value">Normal</span>
                    <FaChevronRight className="settings-arrow" />
                </a>
                <div className="settings-item">
                    <span className="settings-text">PTZ flip left & right</span>
                    <button
                        className={`toggle-button ${ptzFlip ? 'active' : ''}`}
                        onClick={() => setPtzFlip(!ptzFlip)}
                    >
                        <div className="toggle-circle"></div>
                    </button>
                </div>
                <div className="settings-item">
                    <span className="settings-text">Pan tilt up & down</span>
                    <button
                        className={`toggle-button ${panTilt ? 'active' : ''}`}
                        onClick={() => setPanTilt(!panTilt)}
                    >
                        <div className="toggle-circle"></div>
                    </button>
                </div>
                <a href="/day-night-sensitivity" className="settings-item">
                    <span className="settings-text">Day & night switching sensitivity</span>
                    <span className="settings-value">5</span>
                    <FaChevronRight className="settings-arrow" />
                </a>
                <a href="/volume-speaker" className="settings-item">
                    <span className="settings-text">Volume Speaker</span>
                    <span className="settings-value">50</span>
                    <FaChevronRight className="settings-arrow" />
                </a>
                <a href="/volume-microphone" className="settings-item">
                    <span className="settings-text">Volume Microphone</span>
                    <span className="settings-value">50</span>
                    <FaChevronRight className="settings-arrow" />
                </a>
            </div>
        </div>
    );
};

export default BasicSettings;
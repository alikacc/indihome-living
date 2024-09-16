import React, { useState, useEffect } from "react";
import { FaCogs, FaMapMarkerAlt, FaEye, FaCamera, FaVideo, FaMicrophone, FaCog, FaCheckCircle, FaCloud, FaPlay, FaTimes, FaVolumeUp, FaExpand, FaArrowLeft, FaShareAlt, FaSave, FaArrowUp, FaArrowDown, FaArrowRight, FaAngleRight, FaList, FaTh, FaSdCard } from "react-icons/fa";
import './View.css';
import Setting from './Setting';
import { useNavigate } from 'react-router-dom';

// Components for each Preferensi item
import DeteksiGerakan from './DeteksiGerakan';
import PosisiYangSeringDipantau from './PosisiYangSeringDipantau';
import KelilingiArea from './KelilingiArea';

const View = ({ onBack }) => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [fullScreen, setFullScreen] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const [recordingTime, setRecordingTime] = useState(0);
    const [showShare, setShowShare] = useState(false);
    const [isPTZMode, setIsPTZMode] = useState(false);
    const [ptzMode, setPtzMode] = useState('manual');
    const [activePreferensiItem, setActivePreferensiItem] = useState(null);
    const [isTalkMode, setIsTalkMode] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [setting, setSettingClick] = useState(false);
    const [isHDQuality, setIsHDQuality] = useState(false); // New state for quality
    const [activeSaveCloud, setActiveSaveCloud] = useState("save");
    const [activeGridList, setActiveGridList] = useState("list");
    const [isSave, setIsSave] = useState(false); // Add this state for cloud

    // Handle clicks for Save/Cloud toggle
    const handleSaveCloudClick = (type) => {
        setActiveSaveCloud(type);
        if (type === "save") {
            setIsSave(true); // Set isCloud to true when cloud is clicked
        } else {
            setIsSave(false); // Set isCloud to false when save is clicked
        }
    };

    // Handle clicks for Grid/List toggle
    const handleGridListClick = (type) => {
        setActiveGridList(type);
    };

    const handleSettingClick = () => {
        setSettingClick(true)
    }

    const handleSettingClickBack = () => {
        setSettingClick(false)
    }

    // Toggle calendar view
    const handleCalendarClick = () => {
        setShowCalendar(!showCalendar);
    };

    const handleShareClick = () => {
        setShowShare(!showShare);
    };

    const handleSnapshotClick = () => {
        setNotificationMessage('Berhasil mengambil snapshot');
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    // Toggle full-screen mode
    const handleFullScreenClick = () => {
        setFullScreen(!fullScreen);
    };

    useEffect(() => {
        let interval;
        if (isRecording) {
            interval = setInterval(() => {
                setRecordingTime((prevTime) => prevTime + 1);
            }, 1000);
        } else if (!isRecording && recordingTime !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRecording]);

    // Handle recording button click
    const handleRecordClick = () => {
        if (isRecording) {
            setIsRecording(false);
            setActiveButton("");
            setNotificationMessage('Berhasil menghentikan rekaman');
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 3000);
        } else {
            setIsRecording(true);
            setRecordingTime(0);
            setActiveButton("record");
        }
    };

    // Format recording time as MM:SS
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    const [activeButton, setActiveButton] = useState("list");

    // Toggle button state
    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };

    // Toggle PTZ mode
    const handlePTZClick = () => {
        setIsPTZMode(!isPTZMode);
    };

    // Switch between Manual and Preferensi modes
    const handlePtzModeSwitch = (mode) => {
        setPtzMode(mode);
        setActivePreferensiItem(null);
    };

    // Click handler for preferensi items
    const handlePreferensiItemClick = (item) => {
        setActivePreferensiItem(item);
    };

    const handleTalkClick = () => {
        setIsTalkMode(!isTalkMode);
        setIsSpeaking(false); // Reset speaking state when toggling talk mode
    };

    const handleMicrophoneClick = () => {
        setIsSpeaking(!isSpeaking);
    };

    // Handle Quality change
    const handleQualityChange = () => {
        setIsHDQuality(!isHDQuality);
        setNotificationMessage(isHDQuality ? 'Berhasil mengubah ke SD' : 'Berhasil mengubah ke HD');
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    return (
        <div className="container-view full-screen">
            {setting ? (
                <Setting onBack={handleSettingClickBack} />
            ) : (
                <>
                    {/* Top Navigation Section */}
                    <div className="top-navigation">
                        <FaArrowLeft className="nav-icon" onClick={onBack} />
                        <div className="camera-name">Kamera Laci</div>
                        <div className="right-icons">
                            <FaShareAlt className="nav-icon" onClick={handleShareClick} />
                            <FaCog className="nav-icon" onClick={handleSettingClick} />
                        </div>
                    </div>

                    {/* Snapshot Notification */}
                    {showNotification && (
                        <div className="snapshot-notification">
                            <div className="snapshot-notification-icon">
                                <FaCheckCircle />
                            </div>
                            <div className="snapshot-notification-text">{notificationMessage}</div>
                        </div>
                    )}

                    {/* Camera View Section */}
                    <div className="camera-view">
                        <img src={require('../assets/image 373.png')} alt="No Device Icon" className="camera-image" />
                        <div className="live-indicator">LIVE</div>

                        {isRecording && (
                            <div className="recording-popup">
                                <FaVideo className="recording-icon" />
                                <span className="recording-time">{formatTime(recordingTime)}</span>
                            </div>
                        )}

                        {/* Bottom Left and Right Icons */}
                        <div className="bottom-left-icons">
                            <FaPlay className="control-icon" />
                            <FaVolumeUp className="control-icon" />
                        </div>
                        <div className="bottom-right-icons" onClick={handleFullScreenClick}>
                            <FaExpand className="control-icon" />
                        </div>
                    </div>

                    {/* Controls Section */}
                    <div className="controls">
                        <button className="control-button" onClick={handleSnapshotClick}>
                            <FaCamera className="icon" />
                            Snapshot
                        </button>
                        <button
                            className={`control-button ${isRecording ? "active" : ""}`}
                            onClick={handleRecordClick}
                        >
                            <FaVideo className="icon" />
                            {isRecording ? "Stop" : "Record"}
                        </button>
                        <button className="control-button" onClick={handlePTZClick}>
                            <FaCog className="icon" />
                            PTZ
                        </button>
                        <button className="control-button" onClick={handleTalkClick}>
                            <FaMicrophone className="icon" />
                            Talk
                        </button>

                        <button className="control-button" onClick={handleQualityChange}>
                            <img
                                src={require(isHDQuality ? '../assets/hd-quality.png' : '../assets/sd-quality.png')}
                                alt="Quality Icon"
                                className="icon"
                            />
                            Quality
                        </button>
                        <button className="control-button">
                            <FaVolumeUp className="icon" />
                            Sound
                        </button>
                    </div>

                    {/* Recordings Section */}
                    <div className="recordings-section">
                        {isTalkMode ? (
                            <div className="talk-section">
                                <div className="talk-header">
                                    <FaArrowLeft className="nav-icon" onClick={handleTalkClick} />
                                    <span>Talk</span>
                                </div>
                                <div className="microphone-container" onClick={handleMicrophoneClick}>
                                    <div className={`microphone-button ${isSpeaking ? 'speaking' : ''}`}>
                                        <FaMicrophone />
                                    </div>
                                    <p>{isSpeaking ? "Silahkan bicara.." : "Tekan & tahan untuk berbicara"}</p>
                                </div>
                            </div>
                        ) : isSave ? (
                            <div className="cloud-container">
                                <div className="recording-header">
                                    <div className="button-container">
                                        {/* First button: Save/Cloud */}
                                        <button className="dual-button">
                                            <div
                                                className={`icon-container ${activeSaveCloud === "cloud" ? "active" : ""}`}
                                                onClick={() => handleSaveCloudClick("cloud")}
                                                style={{ borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px" }}
                                            >
                                                <FaCloud className="icon-toggle" />
                                            </div>
                                            <div
                                                className={`icon-container ${activeSaveCloud === "save" ? "active" : ""}`}
                                                onClick={() => handleSaveCloudClick("save")}
                                                style={{ borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }}
                                            >
                                                <FaSdCard className="icon-toggle" />
                                            </div>

                                        </button>
                                        <button className="dual-button">
                                            <div
                                                className={`icon-container ${activeGridList === "list" ? "active" : ""}`}
                                                onClick={() => handleGridListClick("list")}
                                                style={{ borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px" }}
                                            >
                                                <FaList className="icon-toggle" />
                                            </div>
                                            <div
                                                className={`icon-container ${activeGridList === "grid" ? "active" : ""}`}
                                                onClick={() => handleGridListClick("grid")}
                                                style={{ borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }}
                                            >
                                                <FaTh className="icon-toggle" />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div className="recordings-subheader">
                                    <h3>Rekaman SD Card</h3>
                                </div>
                                <div className="cloud-container-content">
                                    <div className="cloud-image-container">
                                        <img src={require('../assets/sdcard.png')} alt="Cloud" />
                                    </div>
                                    <div className="cloud-container-text">
                                        <div className="cloud-container-title">SD Card Tidak Terpasang</div>
                                        <div className="cloud-container-subtitle">Pasang untuk simpan rekaman pada SD Card</div>
                                    </div>
                                </div>
                            </div>
                        ) : isPTZMode ? (
                            <div className="ptz-section">
                                {/* Only show 'Manual' and 'Preferensi' when activePreferensiItem is null */}
                                {activePreferensiItem === null && (
                                    <div className="ptz-header">
                                        <div className="ptz-tabs">
                                            <div className={`ptz-tab ${ptzMode === 'manual' ? 'active' : 'inactive'}`} onClick={() => handlePtzModeSwitch('manual')}>Manual</div>
                                            <div className={`ptz-tab ${ptzMode === 'preferensi' ? 'active' : 'inactive'}`} onClick={() => handlePtzModeSwitch('preferensi')}>Preferensi</div>
                                        </div>
                                        <FaTimes className="close-icon" onClick={handlePTZClick} />
                                    </div>
                                )}

                                {ptzMode === 'manual' && activePreferensiItem === null ? (
                                    <div className="ptz-controls">
                                        <div className="ptz-arrow up"><FaArrowUp /></div>
                                        <div className="ptz-arrow left"><FaArrowLeft /></div>
                                        <div className="ptz-center"></div>
                                        <div className="ptz-arrow right"><FaArrowRight /></div>
                                        <div className="ptz-arrow down"><FaArrowDown /></div>
                                    </div>
                                ) : activePreferensiItem === null ? (
                                    <div className="preferensi-content">
                                        {/* Main Preferensi Menu */}
                                        <div className="preferensi-item" onClick={() => handlePreferensiItemClick('deteksi-gerakan')}>
                                            <FaCogs className="preferensi-icon" />
                                            <div className="preferensi-text">
                                                <div className="preferensi-title">Deteksi Gerakan</div>
                                                <div className="preferensi-description">Lacak gerakan secara otomatis</div>
                                            </div>
                                            <FaAngleRight className="preferensi-arrow" />
                                        </div>
                                        <div className="preferensi-item" onClick={() => handlePreferensiItemClick('posisi-sering-dipantau')}>
                                            <FaMapMarkerAlt className="preferensi-icon" />
                                            <div className="preferensi-text">
                                                <div className="preferensi-title">Posisi Yang Sering Dipantau</div>
                                                <div className="preferensi-description">Akses posisi tertentu yang sering dipantau</div>
                                            </div>
                                            <FaAngleRight className="preferensi-arrow" />
                                        </div>
                                        <div className="preferensi-item" onClick={() => handlePreferensiItemClick('kelilingi-area')}>
                                            <FaEye className="preferensi-icon" />
                                            <div className="preferensi-text">
                                                <div className="preferensi-title">Kelilingi Area</div>
                                                <div className="preferensi-description">Gerakan kamera otomatis di sepanjang posisi yang telah ditentukan</div>
                                            </div>
                                            <FaAngleRight className="preferensi-arrow" />
                                        </div>
                                    </div>
                                ) : (
                                    // Preferensi Items
                                    activePreferensiItem === 'deteksi-gerakan' ? (
                                        <DeteksiGerakan onBack={() => setActivePreferensiItem(null)} />
                                    ) : activePreferensiItem === 'posisi-sering-dipantau' ? (
                                        <PosisiYangSeringDipantau onBack={() => setActivePreferensiItem(null)} />
                                    ) : activePreferensiItem === 'kelilingi-area' ? (
                                        <KelilingiArea onBack={() => setActivePreferensiItem(null)} />
                                    ) : null
                                )}
                            </div>
                        ) : (
                            // Original Recordings Content
                            <>
                                <div className="recordings-header">
                                    <div className="button-container">
                                        {/* First button: Save/Cloud */}
                                        <button className="dual-button">
                                            <div
                                                className={`icon-container ${activeSaveCloud === "cloud" ? "active" : ""}`}
                                                onClick={() => handleSaveCloudClick("cloud")}
                                                style={{ borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px" }}
                                            >
                                                <FaCloud className="icon-toggle" />
                                            </div>
                                            <div
                                                className={`icon-container ${activeSaveCloud === "save" ? "active" : ""}`}
                                                onClick={() => handleSaveCloudClick("save")}
                                                style={{ borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }}
                                            >
                                                <FaSdCard className="icon-toggle" />
                                            </div>

                                        </button>

                                        {/* Second button: Grid/List */}
                                        <button className="dual-button">
                                            <div
                                                className={`icon-container ${activeGridList === "list" ? "active" : ""}`}
                                                onClick={() => handleGridListClick("list")}
                                                style={{ borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px" }}
                                            >
                                                <FaList className="icon-toggle" />
                                            </div>
                                            <div
                                                className={`icon-container ${activeGridList === "grid" ? "active" : ""}`}
                                                onClick={() => handleGridListClick("grid")}
                                                style={{ borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }}
                                            >
                                                <FaTh className="icon-toggle" />
                                            </div>
                                        </button>
                                    </div>

                                </div>

                                <div className="recordings-subheader">
                                    <h3>Rekaman Cloud</h3>
                                    <button className="hari-ini-button" onClick={handleCalendarClick}>Hari Ini</button>
                                </div>

                                <div className="timeline">
                                    <div className="timeline-item">
                                        <span className="time">14:29</span>
                                        <div className="colored-pole"></div>
                                        <img src={require('../assets/image 373.png')} alt="Recording" className="recording-thumbnail" />
                                    </div>
                                    <div className="timeline-item">
                                        <span className="time">14:29</span>
                                        <div className="colored-pole"></div>
                                        <img src={require('../assets/image 373.png')} alt="Recording" className="recording-thumbnail" />
                                    </div>
                                    <div className="timeline-item">
                                        <span className="time">14:29</span>
                                        <div className="colored-pole"></div>
                                        <img src={require('../assets/image 373.png')} alt="Recording" className="recording-thumbnail" />
                                    </div>
                                    <div className="timeline-item">
                                        <span className="time">14:29</span>
                                        <div className="colored-pole"></div>
                                        <img src={require('../assets/image 373.png')} alt="Recording" className="recording-thumbnail" />
                                    </div>
                                    <div className="timeline-item">
                                        <span className="time">14:29</span>
                                        <div className="colored-pole"></div>
                                        <img src={require('../assets/image 373.png')} alt="Recording" className="recording-thumbnail" />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Calendar Popup */}
                    {showCalendar && (
                        <div className="calendar-popup">
                            <div className="calendar-header">
                                <h3>Pilih Tanggal</h3>
                                <button className="close-button" onClick={handleCalendarClick}>X</button>
                            </div>
                            <div className="calendar-body">
                                <div className="month-year-container">
                                    <select className="month-dropdown">
                                        <option value="January">Januari</option>
                                    </select>
                                    <select className="year-dropdown">
                                        <option value="2024">2024</option>
                                    </select>
                                </div>
                                <div className="week-names">
                                    <span>Min</span><span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span><span>Sab</span>
                                </div>
                                <div className="calendar-grid">
                                    {[...Array(31)].map((_, index) => (
                                        <button className={`calendar-day ${index === 15 ? 'highlight-day' : 'lighter-day'}`} key={index}>
                                            {index + 1}
                                        </button>
                                    ))}
                                </div>
                                <button className="select-button">Pilih</button>
                            </div>
                        </div>
                    )}

                    {/* Share Popup */}
                    {showShare && (
                        <div className="calendar-popup">
                            <div className="calendar-header">
                                <h3>Pilih Tanggal</h3>
                                <button className="close-button" onClick={handleShareClick}>X</button>
                            </div>
                            {/* Add the share functionality UI here */}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default View;

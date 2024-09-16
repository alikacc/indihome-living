import React, { useState } from 'react';
import { FaArrowLeft, FaChevronRight, FaCog, FaHdd, FaVideo, FaBell, FaInfoCircle } from 'react-icons/fa';
import './Setting.css';
import BasicSettings from './BasicSettings';
import StorageRecording from './StorageRecording'; // Correctly import AnotherPage component


const SettingsPage = ({ onBack }) => {
    const [basicSetting, setBasicSetting] = useState(false);
    const [storageRecording, setStorageRecording] = useState(false);
    const [videoSetting, setVideoSetting] = useState(false);
    const [aboutDevice, setAboutDevice] = useState(false);

    const handleBasicSettingClick = () => {
        setBasicSetting(true);
    };

    const handleBasicSettingBack = () => {
        setBasicSetting(false);
    };

    const handleStorageRecordingBack = () => {
        setStorageRecording(false);
    };

    const handleStorageRecordingClick = () => {
        setStorageRecording(true);
    };
    const handleVideoSettingClick = () => {
        setVideoSetting(true);
    };
    const handleAboutDeviceClick = () => {
        setAboutDevice(true);
    };

    return (
        <div className="container-setting">
            {basicSetting ? (
                <BasicSettings onBack={handleBasicSettingBack} />
            ) : storageRecording ? (
                <StorageRecording onBack={handleStorageRecordingBack} />
            ) : (
                <>
                    <div className="top-header-setting">
                        <div className="top-navigation-setting">
                            <img src={require('../assets/icon left.png')} className="nav-icon-all" onClick={onBack} />
                            <span className="navigation-title-setting">Pengaturan</span>
                        </div>
                    </div>
                    <div className="settings-list">
                        <div className="settings-item">
                            <FaCog className="settings-icon" />
                            <span className="settings-text">Pengaturan Dasar</span>
                            <FaChevronRight className="settings-arrow" onClick={handleBasicSettingClick} />
                        </div>
                        <div className="settings-item">
                            <FaHdd className="settings-icon" />
                            <span className="settings-text">Penyimpanan Rekaman</span>
                            <FaChevronRight className="settings-arrow" onClick={handleStorageRecordingClick} />
                        </div>
                        <a href="/video-settings" className="settings-item">
                            <FaVideo className="settings-icon" />
                            <span className="settings-text">Pengaturan Video</span>
                            <FaChevronRight className="settings-arrow" />
                        </a>
                        <a href="/notification-settings" className="settings-item">
                            <FaBell className="settings-icon" />
                            <span className="settings-text">Notifikasi Smart Alarm</span>
                            <FaChevronRight className="settings-arrow" />
                        </a>
                        <a href="/device-info" className="settings-item">
                            <FaInfoCircle className="settings-icon" />
                            <span className="settings-text">Tentang Perangkat</span>
                            <FaChevronRight className="settings-arrow" />
                        </a>
                    </div>

                </>
            )}
        </div>
    );

};

export default SettingsPage;
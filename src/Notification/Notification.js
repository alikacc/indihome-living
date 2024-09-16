import React, { useState } from 'react';
import { FaArrowLeft, FaCogs } from "react-icons/fa";
import './Notification.css';
import NotificationDetails from './NotificationDetails';

const Notification = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState('alarm');
    const [notificationDetails, setNotificationDetails] = useState(false);
    const [alarms, setAlarms] = useState([
        { id: 1, title: 'Teras Depan', subtitle: 'Deteksi Manusia', time: '14:30:27' },
        { id: 2, title: 'Teras Depan', subtitle: 'Deteksi Manusia', time: '14:30:27' },
        { id: 3, title: 'Teras Depan', subtitle: 'Deteksi Manusia', time: '14:30:27' },
        { id: 4, title: 'Teras Depan', subtitle: 'Deteksi Manusia', time: '14:30:27' },
    ]);


    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleNotificationDetailsClick = () => {
        setNotificationDetails(true);
    };

    const handleBackFromNotificationDetails = () => {
        setNotificationDetails(false);
    };

    return (
        <div className="notification-container">
            {notificationDetails ? (
                <NotificationDetails onBack={handleBackFromNotificationDetails} />
            ) : (
                <>
                    <div className="top-headers-notification">
                        <div className="top-navigations-notification">
                            <img src={require('../assets/icon left.png')} className="nav-icon-all" onClick={onBack} />
                            <div className="navigation-title">Notifikasi</div>
                            <FaCogs alt="Settings" className="nav-icon-rightnotif" />
                        </div>
                        <div className="tab-menu">
                            <div className={`tab ${activeTab === 'alarm' ? 'active' : ''}`} onClick={() => handleTabClick('alarm')}>
                                Alarm <span>{alarms.length}</span>
                            </div>
                            <div className={`tab ${activeTab === 'informasi' ? 'active' : ''}`} onClick={() => handleTabClick('informasi')}>
                                Informasi <span>2</span>
                            </div>
                        </div>
                    </div>
                    <div className="notification-content-container">
                        {activeTab === 'alarm' ? (
                            <>
                                <div className="dropdown-menu">
                                    <div className="dropdown">
                                        <button className="dropdown-btn">Hari Ini <span>▼</span></button>
                                        <div className="dropdown-content">
                                            <a href="#hari-ini">Hari Ini</a>
                                            <a href="#kemarin">Kemarin</a>
                                            <a href="#minggu-ini">Minggu Ini</a>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <button className="dropdown-btn">Semua Kamera <span>▼</span></button>
                                        <div className="dropdown-content">
                                            <a href="#kamera-1">Kamera 1</a>
                                            <a href="#kamera-2">Kamera 2</a>
                                            <a href="#kamera-3">Kamera 3</a>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <button className="dropdown-btn">Semua <span>▼</span></button>
                                        <div className="dropdown-content">
                                            <a href="#semua">Semua</a>
                                            <a href="#deteksi-manusia">Deteksi Manusia</a>
                                            <a href="#deteksi-gerakan">Deteksi Gerakan</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="alarm-details-container">
                                    <div className="alarm-item" onClick={handleNotificationDetailsClick}>
                                        <div className="alarm-details">
                                            <div className="alarm-details-text">
                                                <div className="alarm-title">Teras Depan</div>
                                                <div className="alarm-subtitle">Deteksi Manusia</div>
                                                <div className="alarm-details-time">14:30:27</div>
                                            </div>
                                            <img src={require('../assets/image 373.png')} alt="Garasi" className="notif-image" />
                                        </div>
                                    </div>
                                    <div className="alarm-item">
                                        <div className="alarm-details">
                                            <div className="alarm-details-text">
                                                <div className="alarm-title">Teras Depan</div>
                                                <div className="alarm-subtitle">Deteksi Manusia</div>
                                                <div className="alarm-details-time">14:30:27</div>
                                            </div>
                                            <img src={require('../assets/image 373.png')} alt="Garasi" className="notif-image" />
                                        </div>
                                    </div>
                                    <div className="alarm-item">
                                        <div className="alarm-details">
                                            <div className="alarm-details-text">
                                                <div className="alarm-title">Teras Depan</div>
                                                <div className="alarm-subtitle">Deteksi Manusia</div>
                                                <div className="alarm-details-time">14:30:27</div>
                                            </div>
                                            <img src={require('../assets/image 373.png')} alt="Garasi" className="notif-image" />
                                        </div>
                                    </div>
                                    <div className="alarm-item">
                                        <div className="alarm-details">
                                            <div className="alarm-details-text">
                                                <div className="alarm-title">Teras Depan</div>
                                                <div className="alarm-subtitle">Deteksi Manusia</div>
                                                <div className="alarm-details-time">14:30:27</div>
                                            </div>
                                            <img src={require('../assets/image 373.png')} alt="Garasi" className="notif-image" />
                                        </div>
                                    </div>
                                    <div className="alarm-item">
                                        <div className="alarm-details">
                                            <div className="alarm-details-text">
                                                <div className="alarm-title">Teras Depan</div>
                                                <div className="alarm-subtitle">Deteksi Manusia</div>
                                                <div className="alarm-details-time">14:30:27</div>
                                            </div>
                                            <img src={require('../assets/image 373.png')} alt="Garasi" className="notif-image" />
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="informasi-container">
                                <div className="informasi-item">
                                    <div className="informasi-details">
                                        <div className="informasi-title">Beli IP Camera dengan Promo 17 Agustusan! 🎉</div>
                                        <div className="informasi-subtitle">Yuk, dapatkan promonya!</div>
                                        <div className="informasi-subtitle">10 Agustus 2024</div>
                                    </div>
                                    <img src={require('../assets/promo.png')} alt="Promo 1" className="informasi-image" />
                                </div>
                                <div className="informasi-item">
                                    <div className="informasi-details">
                                        <div className="informasi-title">Dapatkan Cloud 1 Minggu dengan Beli IP Camera Baru!</div>
                                        <div className="informasi-subtitle">Yuk, dapatkan promonya!</div>
                                        <div className="informasi-subtitle">7 Agustus 2024</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Notification;

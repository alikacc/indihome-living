import React, { useState } from 'react';
import { FaArrowLeft, FaUserCircle, FaArrowRight } from 'react-icons/fa';
import './Home1.css';
import { useNavigate } from 'react-router-dom';

const Page2 = ({ onBack }) => {
    const navigate = useNavigate();
    const handleLocationNameClick = () => {
        navigate('/home2');
    };

    const handlePerangkatClick = () => {
        navigate('/deet');
    };
    return (
        <div className="page2-container">
            <div className="top-headers">
                <div className="top-navigations">
                    <img src={require('../assets/icon left.png')} className="nav-icon-all" onClick={onBack} />
                    <span className="navigation-title">Detail Lokasi</span>
                </div>
            </div>

            <div className="detail-section">
                <div className="info-box">
                    <div className="info-text">
                        <span className="info-title">Nama Lokasi</span>
                        <span className="info-value">Rumah</span>
                    </div>
                    <FaArrowRight className="info-arrow" onClick={handleLocationNameClick} />
                </div>
                <div className="info-box">
                    <div className="info-text">
                        <span className="info-title">Ruangan</span>
                        <span className="info-value">5 ruangan</span>
                    </div>
                    <FaArrowRight className="info-arrow" />
                </div>
                <div className="info-box">
                    <div className="info-text">
                        <span className="info-title">Perangkat</span>
                        <span className="info-value">3 perangkat</span>
                    </div>
                    <FaArrowRight className="info-arrow" onClick={handlePerangkatClick} />
                </div>
            </div>

            <div className="member-section">
                <div className="member-title">Anggota yang Memiliki Akses</div>
                <div className="member">
                    <div className="member-container">
                        <img src={require('../assets/dashboard.png')} className="avatar-placeholder" />
                        <div className="member-name">vanessa06@gmail.com</div>
                        <FaArrowRight className="info-arrow" />
                    </div>
                </div>
                <div className="member">
                    <div className="member-container">
                        <img src={require('../assets/dashboard.png')} className="avatar-placeholder" />
                        <div className="member-name">vanessa06@gmail.com</div>
                        <FaArrowRight className="info-arrow" />
                    </div>
                </div>
                <div className="member">
                    <div className="member-container">
                        <img src={require('../assets/dashboard.png')} className="avatar-placeholder" />
                        <div className="member-name">vanessa06@gmail.com</div>
                        <FaArrowRight className="info-arrow" />
                    </div>
                </div>
                <button className="add-member">Tambah Anggota +</button>
            </div>

        </div>
    );
};

export default Page2;

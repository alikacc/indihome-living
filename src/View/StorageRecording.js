import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import './StorageRecording.css';

const StorageSettings = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState('cloud');

    return (
        <div className="container-storagesetting">
            <div className="top-header-storagesetting">
                <div className="top-navigation-storagesetting">
                    <FaArrowLeft className="nav-icon-all" onClick={onBack} />
                    <span className="navigation-title-storagesetting">Penyimpanan Rekaman</span>
                </div>
            </div>
            <div className="tab-menu">
                <div
                    className={`tab-item ${activeTab === 'cloud' ? 'active' : ''}`}
                    onClick={() => setActiveTab('cloud')}
                >
                    Cloud
                </div>
                <div
                    className={`tab-item ${activeTab === 'memory' ? 'active' : ''}`}
                    onClick={() => setActiveTab('memory')}
                >
                    Memory Card
                </div>
            </div>
            <div className="tab-content">
                {activeTab === 'cloud' && (
                    <div>
                        <div className="recording-mode">
                            <span>Mode Rekaman</span>
                            <div className="recording-option">
                                <input type="radio" name="recording" id="record24" />
                                <label htmlFor="record24">Rekaman 24 jam</label>
                            </div>
                            <div className="recording-option">
                                <input type="radio" name="recording" id="recordDetect" />
                                <label htmlFor="recordDetect">Rekam jika terdeteksi sesuatu</label>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === 'memory' && (
                    <div>
                        <div className="recording-mode">
                            <span>Mode Rekaman</span>
                            <div className="recording-option">
                                <input type="radio" name="recording" id="record24" />
                                <label htmlFor="record24">Rekaman 24 jam</label>
                            </div>
                            <div className="recording-option">
                                <input type="radio" name="recording" id="recordDetect" />
                                <label htmlFor="recordDetect">Rekam jika terdeteksi sesuatu</label>
                            </div>
                        </div>
                        <div className="storage-details">
                            <span>Terpakai: 29.4%</span>
                            <div className="storage-bar">
                                <div className="used"></div>
                                <div className="free"></div>
                            </div>
                            <div>
                                <span>Kapasitas Penyimpanan</span>
                                <span>7.40 GB</span>
                            </div>
                            <div>
                                <span>Partisi Penyimpanan</span>
                                <span>6.40 GB</span>
                            </div>
                            <div>
                                <span>Partisi Gambar</span>
                                <span>1.00 GB</span>
                            </div>
                            <div>
                                <span>Terpakai</span>
                                <span>1.40 GB</span>
                            </div>
                            <div>
                                <span>Sisa</span>
                                <span>6.00 GB</span>
                            </div>
                        </div>
                        <button className="format-button">Format</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StorageSettings;
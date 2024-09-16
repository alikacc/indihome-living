import React, { useState } from 'react';
import { FaArrowLeft, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Cam from '../Cam/Cam';
import './Details.css';
import View from '../View/View';

const Details = ({ onBack }) => {
    const [addDevice, setAddDevice] = useState(false);
    const [viewDevice, setViewDevice] = useState(false);
    const [selectedDevice, setSelectedDevice] = useState(null);
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [isAturSheetVisible, setAturSheetVisible] = useState(false);
    const [isUbahNameVisible, setUbahNameVisible] = useState(false);
    const [isPilihRuanganVisible, setPilihRuanganVisible] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState('Rumah');

    const handleViewDeviceClick = () => {
        setViewDevice(true);
        // Reset the state to hide the bottom sheet and other sheets
        setBottomSheetVisible(false);
        setAturSheetVisible(false);
        setUbahNameVisible(false);
        setPilihRuanganVisible(false);
    };

    // Function to handle "Tambah Perangkat" button click
    const handleAddDeviceClick = () => {
        setAddDevice(true)
    };

    // Function to handle individual device detail click
    const handleArrowClick = () => {
        setShowDetails(!showDetails);
    };

    // Function to handle individual device detail click
    const handleDetailClick = (deviceName) => {
        setSelectedDevice(deviceName);
        setBottomSheetVisible(true);
    };

    // Function to close the bottom sheet
    const closeBottomSheet = () => {
        setBottomSheetVisible(false);
        setAturSheetVisible(false);
        setUbahNameVisible(false);
        setPilihRuanganVisible(false);
    };

    // Function to show "Atur Perangkat" sheet
    const handleConfigureDeviceClick = () => {
        setBottomSheetVisible(false);
        setAturSheetVisible(true);
    };

    const handleChangeNameClick = () => {
        setBottomSheetVisible(false);
        setUbahNameVisible(true);
    };

    const handlePilihRuanganClick = () => {
        setBottomSheetVisible(false);
        setPilihRuanganVisible(true);
    };

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleBackFromView = () => {
        setViewDevice(false); // Set viewDevice to false to return to the original content
    };

    const handleLocationChange = (location) => {
        setSelectedLocation(location);
        setShowDropdown(false);
    };


    return (
        <div className="details-wrapper">
            {viewDevice ? (
                <View onBack={handleBackFromView} />
            ) : addDevice ? (
                <Cam />
            ) : (
                <>
                    {(isBottomSheetVisible || isAturSheetVisible || isUbahNameVisible || isPilihRuanganVisible) && (
                        <div className="overlay-details"></div>
                    )}

                    <div className={`details-container ${isBottomSheetVisible || isAturSheetVisible || isUbahNameVisible || isPilihRuanganVisible ? 'dimmed' : ''}`}>
                        <div className="top-headers-details">
                            <div className="top-navigations-details">
                                <img src={require('../assets/icon left.png')} className="nav-icon-all" onClick={onBack} />
                                <span className="navigation-title">Perangkat Langganan</span>
                            </div>
                            <div className="dropdown-all">
                                <span>Lokasi</span>
                                <div className="dropdown-box" onClick={toggleDropdown}>
                                    <span>{selectedLocation}</span>
                                    <FaChevronDown className="dropdown-arrow" />
                                </div>
                            </div>
                            {showDropdown && (
                                <div className="location-dropdown">
                                    <div className="location-item" onClick={() => handleLocationChange('Rumah')}>Rumah</div>
                                    <div className="location-item" onClick={() => handleLocationChange('Kantor')}>Kantor</div>
                                    <div className="location-item" onClick={() => handleLocationChange('Apartemen')}>Apartemen</div>
                                </div>
                            )}
                        </div>

                        <div className="device-list-detail">
                            <div className="device-category-detail" onClick={handleArrowClick}>
                                <img src={require('../assets/indoor-camera.png')} alt="Camera Icon" className="device-icon" />
                                <span>Indoor IP Camera</span>
                                {showDetails ? <FaChevronUp className="arrow-icon" /> : <FaChevronDown className="arrow-icon" />}
                            </div>
                            {showDetails && (
                                <div className="detail-info-detail">
                                    <div className="detail-item-detail">
                                        <span>Jumlah</span>
                                        <span className="detail-value-detail">3 perangkat</span>
                                    </div>
                                    <div className="detail-item-detail">
                                        <span>Biaya</span>
                                        <span className="detail-value-detail">Rp 140.000/ bulan</span>
                                    </div>
                                    <div className="detail-item-detail">
                                        <span>Metode Pembayaran</span>
                                        <span className="detail-value-detail">Tagihan IndiHome</span>
                                    </div>
                                </div>
                            )}
                            <div className={`device-item-detail ${selectedDevice === 'Kamera Laci' ? 'selected' : ''}`}>
                                <div style={{ flex: 1 }}>Kamera Laci</div>
                                <div className="detailcon">
                                    <div className="detailtxt">Detail</div>
                                    <img src="/images/right.png" alt="Icon" onClick={() => handleDetailClick('Kamera Laci')} />
                                </div>
                                {/*  <button className="detail-links-detail" onClick={() => handleDetailClick('Kamera Laci')}>Detail</button> */}
                            </div>
                            <div className={`device-item-detail ${selectedDevice === 'Garasi Mobil' ? 'selected' : ''}`}>
                                <div style={{ flex: 1 }}>Garasi Mobil</div>
                                <div className="detailcon">
                                    <div className="detailtxt">Detail</div>
                                    <img src="/images/right.png" alt="Icon" onClick={() => handleDetailClick('Garasi Mobil')} />
                                </div>
                                {/* <button className="detail-links-detail" onClick={() => handleDetailClick('Garasi Mobil')}>Detail</button> */}
                            </div>
                            <div className={`device-item-detail ${selectedDevice === 'Balkon' ? 'selected' : ''}`}>
                                <div style={{ flex: 1 }}>Balkon</div>
                                <div className="detailcon">
                                    <div className="detailtxt">Detail</div>
                                    <img src="/images/right.png" alt="Icon" onClick={() => handleDetailClick('Balkon')} />
                                </div>
                                {/* <button className="detail-links-detail" onClick={() => handleDetailClick('Balkon')}>Detail</button> */}
                            </div>
                            <button className="add-device-detail" onClick={handleAddDeviceClick}>Tambah Perangkat</button>
                        </div>
                    </div>
                </>
            )}

            {isBottomSheetVisible && (
                <div className="bottom-sheet">
                    <div className="bottom-sheet-handle" onClick={closeBottomSheet}></div>
                    <div className="bottom-sheet-content">
                        <img src={require('../assets/indoor-camera.png')} alt="Camera" className="camera-ubahname-img" />
                        <h3>Kamera Laci</h3>
                        <p>Indoor IP Camera</p>
                        <p>Langganan sejak 1 April 2024</p>
                        <div className="detail-item">
                            <span>Biaya</span>
                            <span className="detail-value">Rp 50.000/ bulan</span>
                        </div>
                        <div className="detail-item">
                            <span>Metode Bayar</span>
                            <span className="detail-value">Tagihan IndiHome</span>
                        </div>
                        <button className="live-camera-btn" onClick={handleViewDeviceClick}>
                            Lihat Live Camera
                        </button>
                        <button className="configure-device-btn" onClick={handleConfigureDeviceClick}>Atur Perangkat</button>
                    </div>
                </div>
            )}

            {isAturSheetVisible && (
                <div className="bottom-sheet-atur">
                    <div className="bottom-sheet-name-handle" onClick={closeBottomSheet}></div>
                    <ul>
                        <li onClick={handleChangeNameClick}>Ubah Nama Perangkat</li>
                        <li onClick={handlePilihRuanganClick}>Pindahkan ke Ruangan Lain</li>
                        <li onClick={() => alert('Akhiri Langganan')}>Akhiri Langganan</li>
                    </ul>
                </div>
            )}

            {isUbahNameVisible && (
                <div className="bottom-sheet-ubah-name">
                    <div className="bottom-sheet-atur-handle" onClick={closeBottomSheet}></div>
                    <div className="bottom-sheet-name-content">
                        <h3>Ubah Nama Perangkat</h3>
                        <div className="input-container">
                            <label htmlFor="device-name">Nama Perangkat</label>
                            <input
                                type="text"
                                id="device-name"
                                className="device-name-input"
                                placeholder="Nama Perangkat"
                            />
                        </div>
                        <button className="ubah-button-detail" onClick={() => alert('Nama perangkat diubah')}>Ubah</button>
                    </div>
                </div>
            )}

            {isPilihRuanganVisible && (
                <div className="bottom-sheet-select-room">
                    <div className="bottom-sheet-atur-handle" onClick={closeBottomSheet}></div>
                    <div className="bottom-sheet-room-content">
                        <h3>Pilih Ruangan</h3>
                        <ul className="room-list">
                            {['R. Keluarga', 'R. Tamu', 'R. Makan', 'Dapur', 'Teras Depan', 'Halaman Belakang'].map((room, index) => (
                                <li key={index} className="room-item">
                                    <label className="room-label">
                                        <input type="radio" name="room" value={room} className="room-radio" />
                                        {room}
                                    </label>
                                </li>
                            ))}
                        </ul>
                        <button className="ubah-button-detail" onClick={() => alert('Ruangan telah diubah')}>Ubah ke Ruangan Ini</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Details;

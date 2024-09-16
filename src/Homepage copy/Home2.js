import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Home2.css';

const Page3 = ({ onBack }) => {
    const [isLocationNameVisible, setLocationNameVisible] = useState(false);
    const [isRoomVisible, setRoomVisible] = useState(false);
    const [simpanNotification, setSimpanNotification] = useState(false);
    const [inputValue, setInputValue] = useState(""); // State to track input value
    const [selectedRooms, setSelectedRooms] = useState([]); // State to track selected checkboxes

    const closeBottomSheet = () => {
        setLocationNameVisible(false);
        setRoomVisible(false);
    };

    const handleSimpanClick = () => {
        setSimpanNotification(true);
        setTimeout(() => {
            setSimpanNotification(false); // Hide notification after 3 seconds
        }, 3000);
    };

    const handleLocationNameClick = () => {
        setRoomVisible(false);
        setLocationNameVisible(true);
    };

    const handleRoomClick = () => {
        setLocationNameVisible(false);
        setRoomVisible(true);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        setSelectedRooms(prevSelectedRooms =>
            checked ? [...prevSelectedRooms, value] : prevSelectedRooms.filter(room => room !== value)
        );
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
                    <FaArrowRight className="info-arrow" onClick={handleRoomClick} />
                </div>
            </div>

            <div className="member-section">
                <div className="member-title">Anggota yang Memiliki Akses</div>
                <div className="member">
                    <div className="member-container">
                        <img src={require('../assets/dashboard.png')} className="avatar-placeholder" alt="avatar" />
                        <div className="member-name">vanessa06@gmail.com</div>
                        <FaArrowRight className="info-arrow" />
                    </div>
                </div>
                <div className="member">
                    <div className="member-container">
                        <img src={require('../assets/dashboard.png')} className="avatar-placeholder" alt="avatar" />
                        <div className="member-name">vanessa06@gmail.com</div>
                        <FaArrowRight className="info-arrow" />
                    </div>
                </div>
                <div className="member">
                    <div className="member-container">
                        <img src={require('../assets/dashboard.png')} className="avatar-placeholder" alt="avatar" />
                        <div className="member-name">vanessa06@gmail.com</div>
                        <FaArrowRight className="info-arrow" />
                    </div>
                </div>
                <button className="add-member">Tambah Anggota +</button>
            </div>

            {/* Bottom sheet for "Nama Lokasi" */}
            {isLocationNameVisible && (
                <div className="bottom-sheet-location">
                    <div className="sheet-header">
                        <div className="bottom-sheet-location-handle" onClick={closeBottomSheet}></div>
                        <div className="location-title">Nama Lokasi</div>
                    </div>
                    <div className="input-location-container">
                        <div className="location-name">Nama Lokasi</div>
                        <input
                            type="text"
                            id="device-name"
                            className="input-box"
                            placeholder="Nama Lokasi"
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button
                        className={`simpan-location-button ${inputValue.trim() ? '' : 'disabled'}`}
                        onClick={handleSimpanClick}
                        disabled={!inputValue.trim()} // Disable button if input is empty
                    >
                        Ubah
                    </button>
                </div>
            )}

            {/* Bottom sheet for "Ruangan" */}
            {isRoomVisible && (
                <div className="bottom-sheet-room">
                    <div className="sheet-header">
                        <div className="bottom-sheet-location-handle" onClick={closeBottomSheet}></div>
                        <div className="location-title">Daftar Ruangan</div>
                    </div>
                    <div className="room-list">
                        <div className="room-item">
                            <input
                                type="checkbox"
                                value="Ruangan 1"
                                onChange={handleCheckboxChange}
                                checked={selectedRooms.includes("Ruangan 1")}
                            /> Ruangan 1
                        </div>
                        <div className="room-item">
                            <input
                                type="checkbox"
                                value="Ruangan 2"
                                onChange={handleCheckboxChange}
                                checked={selectedRooms.includes("Ruangan 2")}
                            /> Ruangan 2
                        </div>
                        <div className="room-item">
                            <input
                                type="checkbox"
                                value="Ruangan 3"
                                onChange={handleCheckboxChange}
                                checked={selectedRooms.includes("Ruangan 3")}
                            /> Ruangan 3
                        </div>
                    </div>
                    <button
                        className={`simpan-location-button ${selectedRooms.length > 0 ? '' : 'disabled'}`}
                        onClick={handleSimpanClick}
                        disabled={selectedRooms.length === 0} // Disable button if no checkbox is checked
                    >
                        Simpan
                    </button>
                </div>
            )}

            {simpanNotification && (
                <div className="simpan-notification">
                    Perubahan berhasil disimpan
                </div>
            )}
        </div>
    );
};

export default Page3;

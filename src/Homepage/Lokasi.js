import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RoomManagement1 from './RoomManagement1'; // Assume Details component is in the same folder
import './Lokasi.css'; // Import the CSS file

const Lokasi = ({ onBack }) => {
    const [showDetails, setShowDetails] = useState(false); // State to toggle details view
    const [tambahLokasi, setTambahLokasi] = useState(false); // State to toggle details view

    const handleDetailsClick = () => {
        setShowDetails(true); // Show the Details component
    };

    const handleTambahLokasiClick = () => {
        setTambahLokasi(true); // Show the Details component
    };

    const closeBottomSheet = () => {
        setTambahLokasi(false);
    }
    const handleBackClick = () => {
        setShowDetails(false); // Go back to the main view
    };

    if (showDetails) {
        return <RoomManagement1 onBack={handleBackClick} />; // Render Details component with back functionality
    }

    return (
        <div className="lokasi-container">
            {(tambahLokasi) && (
                <div className="overlay-details" onClick={closeBottomSheet}></div>
            )}
            <div className="top-headers-location">
                <div className="top-navigations-location">
                    <img src={require('../assets/icon left.png')} className="nav-icon-all" onClick={onBack} />
                    <span className="navigation-title">Perangkat Langganan</span>
                </div>
            </div>
            <div className="menuSection">
                <div className="menuStyle">
                    <div className="rumahtxt">Rumah</div>
                    <div className="whitecon" onClick={handleDetailsClick}> {/* Click handler to show details */}
                        <div className="perangkatcon">
                            <img src="/images/perangkat.png" alt="Back" className="perangkatimg" />
                            <div className="perangkattxt">3 perangkat</div>
                        </div>
                        <div className="detailcon">
                            <div className="detailtxt">Detail</div>
                            <img src="/images/right.png" alt="Icon" className="detailimg" />
                        </div>
                    </div>
                    <img src="/images/iconprof.png" alt="Icon" className="iconprof" />
                </div>
            </div>
            <div className="addDevice" onClick={handleTambahLokasiClick}>Tambah Lokasi</div>

            {tambahLokasi && (
                <div className="bottom-sheet-ubah-name">
                    <div className="bottom-sheet-atur-handle" onClick={closeBottomSheet}></div>
                    <div className="bottom-sheet-name-content">
                        <h3>Beri Nama Lokasi</h3>
                        <div className="input-container">
                            <label htmlFor="device-name">Nama Lokasi</label>
                            <input
                                type="text"
                                id="device-name"
                                className="device-name-input"
                                placeholder="Contoh: Kantor, Toko"
                            />
                        </div>
                        <button className="ubah-button" onClick={() => alert('Nama perangkat diubah')}>Selanjutnya</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Lokasi;
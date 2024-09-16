import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './RoomManagement1.css';
import UserDetail from './DetailAnggota';
import { useNavigate } from 'react-router-dom';
import RoomManagement2 from './RoomManagement2';
import Undangan from './Undangan'; // Import the new component

const Page2 = ({ onBack }) => {
    const [roomNameClick, setRoomNameClick] = useState(false);
    const [locationNameClick, setLocationNameClick] = useState(false);
    const [showAddMemberSheet, setShowAddMemberSheet] = useState(false); // State for adding member
    const [contact, setContact] = useState(''); // State for email or phone number input
    const [showDeviceSelectionSheet, setShowDeviceSelectionSheet] = useState(false); // State for device selection sheet
    const [selectedDevices, setSelectedDevices] = useState([]); // Selected devices
    const [accessRights, setAccessRights] = useState({}); // Access rights
    const [showAccessOptions, setShowAccessOptions] = useState(false); // Show access options
    const [showUndangan, setShowUndangan] = useState(false); // Show Undangan component
    const navigate = useNavigate();

    const devices = [
        { id: 1, name: 'Kamera Loteng' },
        { id: 2, name: 'Kamera Kebun' },
        { id: 3, name: 'Teras Belakang' },
        { id: 4, name: 'Kamera Laci' },
        { id: 5, name: 'Garasi' }
    ];

    const handleLocationNameClick = () => {
        setLocationNameClick(true);
    };

    const handleRoomNameClick = () => {
        setRoomNameClick(true);
    };

    const handlePerangkatClick = () => {
        navigate('/deet');
    };

    const [userDetail, setUserDetail] = useState(false);

    const handleUserDetailClick = () => {
        setUserDetail(true);
    };

    const handleBackClick = () => {
        setRoomNameClick(false);
        setLocationNameClick(false);
    };

    const handleAddMemberClick = () => {
        setShowAddMemberSheet(true);
    };

    const handleCloseAddMemberSheet = () => {
        setShowAddMemberSheet(false);
        setContact(''); // Reset contact input on close
    };

    const handleContactChange = (e) => {
        setContact(e.target.value);
    };

    const handleKirimUndanganClick = () => {
        setShowAddMemberSheet(false); // Close the contact input bottom sheet
        setShowDeviceSelectionSheet(true); // Open the device selection sheet
    };

    const handleCheckboxChange = (id) => {
        setSelectedDevices(prevState =>
            prevState.includes(id)
                ? prevState.filter(deviceId => deviceId !== id)
                : [...prevState, id]
        );
    };

    const handleAccessRightChange = (deviceId, right) => {
        setAccessRights(prevState => ({
            ...prevState,
            [deviceId]: right
        }));
    };

    const handleSelanjutnyaClick = () => {
        setShowAccessOptions(true);
        setShowDeviceSelectionSheet(false);
    };

    const handleTerapkanClick = () => {
        setShowAccessOptions(false);
        setShowUndangan(true); // Redirect to the Undangan component
    };

    return (
        <div className="roommanagement1-container">
            {showUndangan ? (
                <Undangan contact={contact} />
            ) : userDetail ? (
                <UserDetail />
            ) : locationNameClick ? (
                <RoomManagement2 onClick={handleBackClick} />
            ) : roomNameClick ? (
                <RoomManagement2 onClick={handleBackClick} />
            ) : (
                <div>
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
                            <FaArrowRight className="info-arrow" onClick={handleRoomNameClick} />
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
                        <div className="member" onClick={handleUserDetailClick}>
                            <div className="member-container">
                                <img src={require('../assets/dashboard.png')} className="avatar-placeholder" alt="User Avatar" />
                                <div className="member-name">vanessa06@gmail.com</div>
                                <FaArrowRight className="info-arrow" />
                            </div>
                        </div>
                        <div className="member">
                            <div className="member-container">
                                <img src={require('../assets/dashboard.png')} className="avatar-placeholder" alt="User Avatar" />
                                <div className="member-name">vanessa06@gmail.com</div>
                                <FaArrowRight className="info-arrow" />
                            </div>
                        </div>
                        <div className="member">
                            <div className="member-container">
                                <img src={require('../assets/dashboard.png')} className="avatar-placeholder" alt="User Avatar" />
                                <div className="member-name">vanessa06@gmail.com</div>
                                <FaArrowRight className="info-arrow" />
                            </div>
                        </div>
                        <button className="add-member" onClick={handleAddMemberClick}>Tambah Anggota +</button>
                    </div>
                </div>
            )}

            {/* Bottom Sheet for Adding Member */}
            {showAddMemberSheet && (
                <div className="bottom-sheet-location">
                    <div className="bottom-sheet-location-handle" onClick={handleCloseAddMemberSheet}></div>
                    <div className="sheet-header">
                        <div className="location-title">Tambah Anggota</div>
                    </div>
                    <div className="input-location-container">
                        <label htmlFor="contact">Masukan Email atau Nomor HP</label>
                        <input
                            type="text"
                            id="contact"
                            value={contact}
                            onChange={handleContactChange}
                            placeholder="Email atau Nomor HP"
                            className="input-box"
                        />
                    </div>
                    <button
                        className={`simpan-location-button ${!contact ? 'disabled' : ''}`}
                        onClick={handleKirimUndanganClick}
                        disabled={!contact}
                    >
                        Kirim Undangan
                    </button>
                </div>
            )}

            {/* Device Selection Bottom Sheet */}
            {showDeviceSelectionSheet && (
                <div className="bottom-sheet-memdetail">
                    <div className="bottom-sheet-handle-memdetail"></div>
                    <h3>Pilih Perangkat yang Diberi Akses</h3>
                    <div className="devices-list-sheet-memdetail">
                        {devices.map(device => (
                            <div className="device-item-memdetail" key={device.id}>
                                <input
                                    type="checkbox"
                                    checked={selectedDevices.includes(device.id)}
                                    onChange={() => handleCheckboxChange(device.id)}
                                    className="device-checkbox-memdetail"
                                />
                                <span>{device.name}</span>
                            </div>
                        ))}
                    </div>
                    <button
                        className={`next-button-memdetail ${selectedDevices.length === 0 ? 'disabled' : ''}`}
                        disabled={selectedDevices.length === 0}
                        onClick={handleSelanjutnyaClick}
                    >
                        Selanjutnya
                    </button>
                </div>
            )}

            {/* Access Options Bottom Sheet */}
            {showAccessOptions && (
                <div className="bottom-sheet-memdetail">
                    <div className="bottom-sheet-handle-memdetail"></div>
                    <h3>Beri Hak Akses</h3>
                    <div className="devices-list-sheet-memdetail">
                        {selectedDevices.map(deviceId => {
                            const device = devices.find(d => d.id === deviceId);
                            return (
                                <div key={device.id} className="device-item-expanded-memdetail">
                                    <div className="device-item-memdetail">
                                        <span>{device.name}</span>
                                    </div>
                                    <div className="access-rights-memdetail">
                                        <div>
                                            <input
                                                type="radio"
                                                id={`atur-${device.id}`}
                                                name={`access-${device.id}`}
                                                value="atur"
                                                checked={accessRights[device.id] === 'atur'}
                                                onChange={() => handleAccessRightChange(device.id, 'atur')}
                                            />
                                            <label htmlFor={`atur-${device.id}`}>Bisa Atur Perangkat</label>
                                        </div>
                                        <div>
                                            <input
                                                type="radio"
                                                id={`lihat-${device.id}`}
                                                name={`access-${device.id}`}
                                                value="lihat"
                                                checked={accessRights[device.id] === 'lihat'}
                                                onChange={() => handleAccessRightChange(device.id, 'lihat')}
                                            />
                                            <label htmlFor={`lihat-${device.id}`}>Hanya Lihat Perangkat</label>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <button
                        className="next-button-memdetail"
                        onClick={handleTerapkanClick}
                    >
                        Terapkan
                    </button>
                </div>
            )}
        </div>
    );
};

export default Page2;

import React, { useState } from 'react';
import { FaCog, FaArrowRight, FaTrash } from 'react-icons/fa';
import './DetailAnggota.css'; // Import the CSS file

const UserDetail = ({ onBack }) => {
    const [isTambahPerangkat, setTambahPerangkat] = useState(false);
    const [hapusClick, setHapusClick] = useState(false);
    const [showSavePopup, setShowSavePopup] = useState(false);
    const [selectedDevices, setSelectedDevices] = useState([]);
    const [accessRights, setAccessRights] = useState({});
    const [showAccessOptions, setShowAccessOptions] = useState(false);
    const [addedDevices, setAddedDevices] = useState([]); // State to store added devices

    const devices = [
        { id: 1, name: 'Kamera Loteng' },
        { id: 2, name: 'Kamera Kebun' }
    ];

    const handleHapusClick = () => {
        setHapusClick(true);
    };

    const handleYaHapus = () => {
        // Show the success popup before navigating back
        setShowSavePopup(true);
        setTimeout(() => {
            setShowSavePopup(false);
            onBack(); // Execute the onBack function after showing the popup
        }, 3000); // Show the popup for 3 seconds before navigating back
    };

    const handleBatal = () => {
        setHapusClick(false); // Close the bottom sheet without action
    };

    const closeBottomSheet = () => {
        setHapusClick(false);
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
        setTambahPerangkat(false);
    };

    const handleTerapkanClick = () => {
        // Add selected devices to the added devices list
        const newAddedDevices = selectedDevices.map(deviceId => ({
            id: deviceId,
            name: devices.find(d => d.id === deviceId).name,
            access: accessRights[deviceId]
        }));
        setAddedDevices([...addedDevices, ...newAddedDevices]);
        setShowAccessOptions(false);
    };

    return (
        <div className="user-detail-container-memdetail">
            {/* Header */}
            <div className="user-detail-header-memdetail">
                <img src={require('../assets/icon left.png')} className="nav-icon-all" onClick={onBack} />
                <div className="header-title-memdetail">Detail Anggota</div>
                <FaTrash className="trash-icon-memdetail" onClick={handleHapusClick} />
            </div>

            {/* Profile Section */}
            <div className="profile-section-memdetail">
                <img src={require('../assets/image 373.png')} alt="Profile" className="profile-picture-memdetail" />
                <div className="profile-name-status">
                    <div className="profile-name-memdetail">Ayu Mustikawati</div>
                    <div className="profile-status-memdetail">Pakai<span> | 08127089201</span></div>
                </div>
            </div>

            {/* Devices List */}
            <div className="devices-list-memdetail">
                {/* Existing devices */}
                <div className="device-item-memdetail">
                    <div className="device-info-memdetail">
                        <div className="device-name-memdetail">Kamera Laci</div>
                        <div className="device-status-memdetail">Bisa Atur Perangkat</div>
                    </div>
                    <div className="edit-option-memdetail">Ubah <FaArrowRight className="arrow-icon-memdetail" /></div>
                </div>
                <div className="device-item-memdetail">
                    <div className="device-info-memdetail">
                        <div className="device-name-memdetail">Garasi</div>
                        <div className="device-status-memdetail blue">Hanya Lihat Perangkat</div>
                    </div>
                    <div className="edit-option-memdetail">Ubah <FaArrowRight className="arrow-icon-memdetail" /></div>
                </div>
                <div className="device-item-memdetail">
                    <div className="device-info-memdetail">
                        <div className="device-name-memdetail">Balkon</div>
                        <div className="device-status-memdetail">Bisa Atur Perangkat</div>
                    </div>
                    <div className="edit-option-memdetail">Ubah <FaArrowRight className="arrow-icon-memdetail" /></div>
                </div>

                {/* Newly added devices */}
                {addedDevices.map((device) => (
                    <div key={device.id} className="device-item-memdetail">
                        <div className="device-info-memdetail">
                            <div className="device-name-memdetail">{device.name}</div>
                            <div className={`device-status-memdetail ${device.access === 'atur' ? '' : 'blue'}`}>
                                {device.access === 'atur' ? 'Bisa Atur Perangkat' : 'Hanya Lihat Perangkat'}
                            </div>
                        </div>
                    </div>
                ))}

                <button className="add-member-user-memdetail" onClick={() => setTambahPerangkat(true)}>Tambah Anggota +</button>
            </div>

            {hapusClick && (
                <div className="bottom-sheet-notification-details">
                    <div className="bottom-sheet-notification-details-handle" onClick={closeBottomSheet}></div>
                    <img src={require('../assets/warning-icon.png')} alt="Warning Icon" className="warning-icon" />
                    <div className="warning-text-container">
                        <div className="warning-text-title">Keluarkan dari Anggota?</div>
                        <div className="warning-text-subtitle">Anggota berikut akan tidak memiliki akses ke perangkat di lokasi ini</div>
                    </div>

                    <div className="notification-delete-button-container">
                        <button className="confirm-delete-button" onClick={handleYaHapus}>Ya, Keluarkan</button>
                        <button className="cancel-button" onClick={handleBatal}>Batalkan</button>
                    </div>
                </div>
            )}

            {/* Bottom Sheet */}
            {isTambahPerangkat && (
                <div className="bottom-sheet-memdetail">
                    <div className="bottom-sheet-handle-memdetail"></div>
                    <h3>Tambah Perangkat</h3>
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

            {/* Access Options */}
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

export default UserDetail;

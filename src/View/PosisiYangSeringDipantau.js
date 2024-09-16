import React, { useState } from "react";
import { FaArrowLeft, FaArrowUp, FaArrowDown, FaArrowLeft as FaArrowLeftIcon, FaArrowRight } from "react-icons/fa";

const PosisiYangSeringDipantau = ({ onBack }) => {
    const [positionList, setPositionList] = useState([
        { label: 'Kiri', imageUrl: '../assets/image 373.png' }, // Replace with actual image paths
        { label: 'Kanan', imageUrl: '../assets/image 373.png' } // Replace with actual image paths
    ]);
    const [newPosition, setNewPosition] = useState('');
    const [isAddingPosition, setIsAddingPosition] = useState(false);

    // Handler for "Tambah Posisi"
    const handleTambahPosisi = () => {
        setIsAddingPosition(true);
    };

    // Handler for "Simpan" button
    const handleSimpan = () => {
        if (newPosition) {
            setPositionList([...positionList, { label: newPosition, imageUrl: '/images/default.png' }]);
            setNewPosition('');
            setIsAddingPosition(false);
        }
    };

    return (
        <div>
            {!isAddingPosition ? (
                <div className="posisi-content">
                    <div className="deteksi-gerakan-header">
                        <FaArrowLeft className="nav-icon" onClick={onBack} />
                        <span>Posisi Yang Sering Dipantau</span>
                    </div>
                    <div className="position-list">
                        {positionList.map((pos, index) => (
                            <div className="position-item" key={index}>
                                <img src={pos.imageUrl} alt={pos.label} className="position-image" />
                                <div className="position-item-label">{pos.label}</div>
                            </div>
                        ))}
                    </div>
                    <button className="tambah-posisi-btn" onClick={handleTambahPosisi}>Tambah Posisi</button>
                </div>
            ) : (
                <div className="add-position-content">
                    <div className="deteksi-gerakan-header">
                        <FaArrowLeft className="nav-icon" onClick={() => setIsAddingPosition(false)} />
                        <span>Posisi Yang Sering Dipantau</span>
                    </div>
                    <div className="camera-move-controls">
                        <div className="camera-image">
                            {/* Add the camera image or placeholder */}
                        </div>
                        <div className="arrow-controls">
                            <div className="ptz-arrow up"><FaArrowUp /></div>
                            <div className="ptz-arrow left"><FaArrowLeftIcon /></div>
                            <div className="ptz-arrow right"><FaArrowRight /></div>
                            <div className="ptz-arrow down"><FaArrowDown /></div>
                        </div>
                    </div>
                    <input
                        type="text"
                        value={newPosition}
                        onChange={(e) => setNewPosition(e.target.value)}
                        placeholder="Ketik nama"
                        className="position-input"
                    />
                    <button
                        className={`simpan-btn ${newPosition ? 'active' : 'inactive'}`}
                        onClick={handleSimpan}
                        disabled={!newPosition}
                    >
                        Simpan
                    </button>
                </div>
            )}
        </div>
    );
};

export default PosisiYangSeringDipantau;

import React, { useState } from "react";
import { FaArrowLeft, FaInfoCircle } from "react-icons/fa";

const KelilingiArea = ({ onBack }) => {
    const [selectedPositions, setSelectedPositions] = useState([]);

    const positions = [
        { id: 'kiri', name: 'Kiri', img: 'https://via.placeholder.com/150' },
        { id: 'kanan', name: 'Kanan', img: 'https://via.placeholder.com/150' },
        { id: 'kiri', name: 'Kiri', img: 'https://via.placeholder.com/150' },
        { id: 'kanan', name: 'Kanan', img: 'https://via.placeholder.com/150' },
        { id: 'kiri', name: 'Kiri', img: 'https://via.placeholder.com/150' },
        { id: 'kanan', name: 'Kanan', img: 'https://via.placeholder.com/150' },
        { id: 'kiri', name: 'Kiri', img: 'https://via.placeholder.com/150' },
        { id: 'kanan', name: 'Kanan', img: 'https://via.placeholder.com/150' },
    ];

    // Toggle selection of positions
    const togglePosition = (id) => {
        setSelectedPositions(prev =>
            prev.includes(id) ? prev.filter(pos => pos !== id) : [...prev, id]
        );
    };

    return (
        <div className="kelilingi-area-content">
            <div className="kelilingi-area-header">
                <FaArrowLeft className="nav-icon-keliling" onClick={onBack} />
                <span>Kelilingi Area</span>
            </div>
            <div className="info-box">
                <FaInfoCircle className="info-icon" />
                <span>Kamera akan bergerak kelilingi sesuai urutan pilihan posisi</span>
            </div>
            <div className="position-grid">
                {positions.map((pos) => (
                    <div key={pos.id} className={`position-card ${selectedPositions.includes(pos.id) ? 'selected' : ''}`} onClick={() => togglePosition(pos.id)}>
                        <img src={pos.img} alt={pos.name} className="position-image" />
                        <div className="position-overlay">
                            <span>{pos.name}</span>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" checked={selectedPositions.includes(pos.id)} readOnly />
                        </div>
                    </div>
                ))}
            </div>
            <button className={`terapkan-btn ${selectedPositions.length > 0 ? 'active' : 'inactive'}`} disabled={selectedPositions.length === 0}>Terapkan</button>
        </div>
    );
};

export default KelilingiArea;

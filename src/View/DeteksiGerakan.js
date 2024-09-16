import React from "react";
import { FaArrowLeft, FaToggleOn, FaAngleRight } from "react-icons/fa";

const DeteksiGerakan = ({ onBack }) => {
    return (
        <div className="deteksi-gerakan-content">
            <div className="deteksi-gerakan-header">
                <FaArrowLeft className="nav-icon" onClick={onBack} />
                <span>Deteksi Gerakan</span>
            </div>
            <div className="deteksi-gerakan-item">
                <span>Sistem Deteksi Gerakan</span>
                <FaToggleOn className="toggle-icon" />
            </div>
            <div className="deteksi-gerakan-item">
                <span>Sensitifitas</span>
                <FaAngleRight className="preferensi-arrow" />
            </div>
            <div className="deteksi-gerakan-item">
                <span>Durasi Pemantauan</span>
                <span>5 menit</span>
            </div>
        </div>
    );
};

export default DeteksiGerakan;

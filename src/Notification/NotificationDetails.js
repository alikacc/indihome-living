import React, { useState } from 'react';
import { FaShareAlt, FaSave, FaTimes, FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import './NotificationDetails.css'; // Make sure to import your CSS file

const ImageComponent = ({ onBack }) => {
    const [hapusClick, setHapusClick] = useState(false);
    const [showSavePopup, setShowSavePopup] = useState(false);
    const [showShareSheet, setShowShareSheet] = useState(false);

    const handleShare = () => {
        setShowShareSheet(true);
    };

    const handleSave = () => {
        setShowSavePopup(true);
        setTimeout(() => {
            setShowSavePopup(false);
        }, 3000); // Hide the popup after 3 seconds
    };

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
        setShowShareSheet(false);
    };

    return (
        <div className="notification-details-container">
            {(showSavePopup || hapusClick || showShareSheet) && (
                <div className="overlay-notification-detail"></div>
            )}

            <div className="notification-detail-decor"></div>
            <div className="notification-details-navigation">
                <img src={require('../assets/icon left.png')} className="nav-icon-all" onClick={onBack} />
            </div>
            <div className="notification-details-header">
                <div className="notification-detail-header">Garasi</div>
                <div className="notification-detail-sub-header">Deteksi Manusia</div>
                <div className="notification-detail-sub-header">14:30:27</div>
            </div>
            <img src={require('../assets/image 373.png')} alt="Garasi" className="notification-detail-image" />
            <div className="notification-detail-button">
                <div className="notification-detail-button-container">
                    <div className="notification-detail-button-item" onClick={handleShare}>
                        <FaShareAlt className="icon" />
                        <span>Bagikan</span>
                    </div>
                    <div className="notification-detail-button-item" onClick={handleSave}>
                        <FaSave className="icon" />
                        <span>Simpan</span>
                    </div>
                    <div className="notification-detail-button-item" onClick={handleHapusClick}>
                        <FaTimes className="icon" />
                        <span>Hapus</span>
                    </div>
                </div>
            </div>

            {showSavePopup && (
                <div className="save-success-popup">
                    <div className="save-success-popup-icon">
                        <FaCheckCircle />
                    </div>
                    <div className="save-success-popup-text">Berhasil menyimpan gambar</div>
                </div>
            )}

            {hapusClick && (
                <div className="bottom-sheet-notification-details">
                    <div className="bottom-sheet-notification-details-handle" onClick={closeBottomSheet}></div>
                    <img src={require('../assets/warning-icon.png')} alt="Warning Icon" className="warning-icon" />
                    <div className="warning-text-container">
                        <div className="warning-text-title">Hapus Alarm Ini?</div>
                        <div className="warning-text-subtitle">Alarm ini tidak dapat dilihat kembali setelah dihapus</div>
                    </div>

                    <div className="notification-delete-button-container">
                        <button className="confirm-delete-button" onClick={handleYaHapus}>Ya, Hapus</button>
                        <button className="cancel-button" onClick={handleBatal}>Batalkan</button>
                    </div>
                </div>
            )}

            {showShareSheet && (
                <div className="share-bottom-sheet">
                    <div className="share-bottom-sheet-handle" onClick={closeBottomSheet}></div>
                    <div className="share-sheet-header">Sharing image</div>
                    <img src={require('../assets/image 373.png')} alt="Image to Share" className="share-image-preview" />
                    <div className="share-options">
                        {/* Replace these with actual icons for each sharing option */}
                        <div className="share-option">Quick Share</div>
                        <div className="share-option">WhatsApp</div>
                        <div className="share-option">Maps</div>
                        <div className="share-option">Outlook</div>
                        <div className="share-option">Instagram</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageComponent;

import React, { useState } from 'react';
import { FaCogs, FaMapMarkerAlt, FaEye, FaCamera, FaVideo, FaMicrophone, FaCog, FaCloud, FaPlay, FaTimes, FaVolumeUp, FaExpand, FaArrowLeft, FaShareAlt, FaSave, FaArrowUp, FaArrowDown, FaArrowRight, FaAngleRight, FaList, FaTh, FaSdCard } from "react-icons/fa";

import './Home.css'; // Import the Body CSS file
import NavBar from '../NavBar';
import Details from './Details';
import View from '../View/View';
import Notification from '../Notification/Notification';
import headerImage from '../assets/image 373.png'; // Import the header image
import wholeheaderImage from '../assets/bg.png'; // Import the background image
import questionIcon from '../assets/Homepage - Question Icon.png';
import notificationIcon from '../assets/Homepage - Notification Icon.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const [showDetails, setShowDetails] = useState(false);
  const [viewDevice, setViewDevice] = useState(false);
  const [notification, setNotification] = useState(false);

  // State to track the selected tab, dropdown visibility, and details view
  const [selectedTab, setSelectedTab] = useState('Semua');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Rumah');
  const [activeSaveCloud, setActiveSaveCloud] = useState("save");
  const [activeGridList, setActiveGridList] = useState("list");

  // Handle clicks for Save/Cloud toggle
  const handleSaveCloudClick = (type) => {
    setActiveSaveCloud(type);
  };

  const handleViewDeviceClick = () => {
    setViewDevice(true);
  };

  const handleDetailHomeClick = () => {
    setShowDetails(true); // Show the Details component
  };

  const handleAddDeviceClick = () => {
    navigate('/cam');
  };

  // Function to handle tab change
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Handle location change
  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    setShowDropdown(false);
  };

  const handleBackFromDetails = () => {
    setShowDetails(false); // Set showDetails to false to return to the original content
  };

  const handleBackFromView = () => {
    setViewDevice(false); // Set viewDevice to false to return to the original content
  };

  const handleNotification = () => {
    setNotification(true); // Set viewDevice to false to return to the original content
  };

  const handleBackFromNotification = () => {
    setNotification(false); // Set viewDevice to false to return to the original content
  };

  return (
    <div className="combined-component">
      {showDetails ? (
        <Details onBack={handleBackFromDetails} />
      ) : viewDevice ? (
        <View onBack={handleBackFromView} />
      ) : notification ? (
        <Notification onBack={handleBackFromNotification} />
      ) : (
        <>
          <div className="whole-header" style={{ backgroundImage: `url(${wholeheaderImage})` }}>
            <div className="overlay">
              <header className="header" style={{ backgroundImage: `url(${headerImage})` }}>
                <span className="text">Hai,</span>
                <span className="text2">Selamat Pagi</span>
                <div className="question-icon" style={{ backgroundImage: `url(${questionIcon})` }}></div>
                <div className="notification-icon" style={{ backgroundImage: `url(${notificationIcon})` }} onClick={handleNotification}></div>
              </header>
            </div>
          </div>
          <div className="body-com">
            <div className="floatingbox">
              <div className="floatingbox-top">
                <div className="location-header">
                  <div className="location-select" onClick={toggleDropdown}>
                    <img src={require('../assets/ico_location.png')} className="top-button-icon" />
                    <div className="box-title">Lokasi</div>
                    <span>{selectedLocation}</span>
                    <span>▼</span>
                  </div>
                </div>
              </div>
              <div className="floatingbox-bottom">
                <div className="device-count">
                  <div className="box-title">Perangkat di Lokasi</div>
                  <span>3 perangkat</span>
                </div>
                <div onClick={handleDetailHomeClick} className="details-link">
                  Detail
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

            <div className="header-tabs">
              <div className="background-box">
                <div className="navigation-tab">
                  <div className={`label-tab ${selectedTab === 'Semua' ? 'active' : ''}`} onClick={() => handleTabClick('Semua')}>Semua</div>
                  <div className={`label-tab ${selectedTab === 'Garasi' ? 'active' : ''}`} onClick={() => handleTabClick('Garasi')}>Garasi</div>
                  <div className={`label-tab ${selectedTab === 'R. Tamu' ? 'active' : ''}`} onClick={() => handleTabClick('R. Tamu')}>R. Tamu</div>
                  <div className={`label-tab ${selectedTab === 'R. Keluarga' ? 'active' : ''}`} onClick={() => handleTabClick('R. Keluarga')}>R. Keluarga</div>
                </div>
              </div>

              {/* Conditionally render content based on selectedTab */}
              {selectedTab === 'Semua' ? (
                <div className="content-container">
                  <div className="button-container-home">
                    <button className="dual-button-home">
                      <div className={`icon-container-home ${activeSaveCloud === "cloud" ? "active" : ""}`} onClick={() => handleSaveCloudClick("cloud")} style={{ borderRadius: '8px 0 0 8px' }}>
                        <FaList className="icon-toggle-home" />
                      </div>
                      <div className={`icon-container-home ${activeSaveCloud === "save" ? "active" : ""}`} onClick={() => handleSaveCloudClick("save")} style={{ borderRadius: '0 8px 8px 0' }}>
                        <FaTh className="icon-toggle-home" />
                      </div>
                    </button>
                  </div>
                  {activeSaveCloud === "cloud" ? (
                    <div className="device-card-collection-vertical">
                      <div className="device-card">
                        <img src={require('../assets/image 373.png')} alt="Product 3" onClick={handleViewDeviceClick} />
                        <div className="device-card-title">Kamera Laci</div>
                        <div className="device-card-sub">R. Keluarga</div>
                      </div>
                      <div className="device-card">
                        <img src={require('../assets/balkon.png')} alt="Product 3" onClick={handleViewDeviceClick} />
                        <div className="device-card-title">Balkon</div>
                        <div className="device-card-sub">Taman</div>
                      </div>
                      <div className="device-card">
                        <img src={require('../assets/image 373.png')} alt="Product 3" onClick={handleViewDeviceClick} />
                        <div className="device-card-title">Kamera Laci</div>
                        <div className="device-card-sub">R. Keluarga</div>
                      </div>
                    </div>
                  ) : (
                    <div className="device-card-collection-horizontal">
                      <div className="device-card-horizontal">
                        <img src={require('../assets/image 373.png')} alt="Product 3" onClick={handleViewDeviceClick} />
                        <div className="device-card-title">Kamera Laci</div>
                        <div className="device-card-sub">R. Keluarga</div>
                      </div>
                      <div className="device-card-horizontal">
                        <img src={require('../assets/balkon.png')} alt="Product 3" onClick={handleViewDeviceClick} />
                        <div className="device-card-title">Balkon</div>
                        <div className="device-card-sub">Taman</div>
                      </div>
                      <div className="device-card-horizontal">
                        <img src={require('../assets/image 373.png')} alt="Product 3" onClick={handleViewDeviceClick} />
                        <div className="device-card-title">Kamera Laci</div>
                        <div className="device-card-sub">R. Keluarga</div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="no-device-section">
                  <img src={require('../assets/tap-to-run.png')} alt="No Device Icon" className="no-device-icon" />
                  <div className="no-device-frame">
                    <div className="no-device-message">Belum Ada Perangkat Yang Terhubung</div>
                    <div className="no-device-submessage">Tambah untuk pantau perangkat pintarmu</div>
                  </div>
                  <button className="add-device-button" onClick={handleAddDeviceClick}>Tambah Perangkat +</button>
                </div>
              )}
            </div>
          </div>
          <NavBar />
        </>
      )}
    </div>
  );

};

export default Home;
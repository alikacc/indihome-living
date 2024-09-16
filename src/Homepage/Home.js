import React, { useState } from 'react';
import { FaDesktop, FaUser, FaCheckCircle, FaList, FaTh } from "react-icons/fa";
import Notification from '../Notification/Notification';
import './Home.css'; // Import the Body CSS file
import NavBar from '../NavBar';
import Details from './Details';
import View from '../View/View';
import AturLokasi from './Lokasi';
import Cam from '../Cam/Cam';
import HelpCenter from './HelpCenter.jsx'; // Import the HelpCenter component
import headerImage from '../assets/image 373.png'; // Import the header image
import wholeheaderImage from '../assets/bg.png'; // Import the background image
import questionIcon from '../assets/Homepage - Question Icon.png';
import notificationIcon from '../assets/Homepage - Notification Icon.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const [showDetails, setShowDetails] = useState(false);
  const [viewDevice, setViewDevice] = useState(false);
  const [isHelpCenterClick, setIsHelpCenterClick] = useState(false); // State to check if HelpCenter is clicked
  const [addDevice, setAddDevice] = useState(false);
  // State to track the selected tab, dropdown visibility, and details view
  const [selectedTab, setSelectedTab] = useState('Semua');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Rumah');
  const [activeSaveCloud, setActiveSaveCloud] = useState("save");
  const [activeGridList, setActiveGridList] = useState("list");
  const [notification, setNotification] = useState(false);
  const [aturLokasi, setAturLokasi] = useState(false);

  const closeBottomSheet = () => {
    setShowDropdown(false);
  }
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
    setAddDevice(true);
  };

  const handleBackFromAddDeviceClick = () => {
    setAddDevice(false);
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
  const handleAturLokasiClick = () => {
    setAturLokasi(true);
  };

  const handleAturLokasiBackClick = () => {
    setAturLokasi(false);
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

  // Handle help center click
  const handleHelpCenterClick = () => {
    setIsHelpCenterClick(true);
  };

  const handleBackFromHelpCenter = () => {
    setIsHelpCenterClick(false);
  };

  return (
    <div className="combined-component">
      {showDetails ? (
        <Details onBack={handleBackFromDetails} />
      ) : viewDevice ? (
        <View onBack={handleBackFromView} />
      ) : notification ? (
        <Notification onBack={handleBackFromNotification} />
      ) : aturLokasi ? (
        <AturLokasi onBack={handleAturLokasiBackClick} />
      ) : isHelpCenterClick ? ( // Conditional rendering for HelpCenter
        <HelpCenter onBack={handleBackFromHelpCenter} />
      ) : addDevice ? ( // Conditional rendering for HelpCenter
        <Cam onBack={handleBackFromAddDeviceClick} />
      ) : (
        <>
          <div className="whole-header" style={{ backgroundImage: `url(${wholeheaderImage})` }}>
            <header className="header" style={{ backgroundImage: `url(${headerImage})` }}>
              <span className="text">Hai,</span>
              <span className="text2">Selamat Pagi</span>
              <a href="#" className="question-icon" style={{ backgroundImage: `url(${questionIcon})` }} onClick={handleHelpCenterClick}></a>
              <a href="#" className="notification-icon" style={{ backgroundImage: `url(${notificationIcon})` }} onClick={handleNotification}></a>
            </header>
          </div>
          <div className="body-com">
            <div className="floatingbox">
              <div className="floatingbox-top">
                <div className="location-header">
                  <div className="location-select">
                    <img src={require('../assets/ico_location.png')} className="top-button-icon" />
                    <div className="box-title">Lokasi</div>
                  </div>
                  <div className="rumah-select" onClick={toggleDropdown}>Rumah ▼</div>
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
                <div className="bottom-sheet-location-home">
                  <div className="bottom-sheet-location-home-handle" onClick={closeBottomSheet}></div>
                  <div className="sheet-header-home">
                    <div className="location-title-home">Pilih Lokasi</div>
                    <div className="location-item-home">
                      <div className="location-info-home">
                        <span className="location-name-home">Rumah</span>
                        <div className="location-details-home">
                          <div className="devices-info-home">
                            <FaDesktop className="location-icon-home" />
                            <span>3 perangkat</span>
                          </div>
                          <div className="members-info-home">
                            <FaUser className="location-icon-home" />
                            <span>3 anggota</span>
                          </div>
                        </div>
                      </div>
                      <FaCheckCircle className="location-selected-icon-home" />
                    </div>
                  </div>
                  <button
                    className="simpan-location-button-home" onClick={handleAturLokasiClick}
                  >
                    Atur Lokasi
                  </button>
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
                      <div className="device-card" onClick={handleViewDeviceClick}>
                        <div className="image-container" >
                          <img src={require('../assets/image 373.png')} alt="Product 3" />
                          <div className="gradient-overlay"></div>
                        </div>
                        <div className="device-card-title">Kamera Laci</div>
                        <div className="device-card-sub">R. Keluarga</div>
                      </div>
                      <div className="device-card" onClick={handleViewDeviceClick}>
                        <div className="image-container">
                          <img src={require('../assets/balkon.png')} alt="Product 3" />
                          <div className="gradient-overlay"></div>
                        </div>
                        <div className="device-card-title">Balkon</div>
                        <div className="device-card-sub">taman</div>
                      </div>
                      <div className="device-card" onClick={handleViewDeviceClick}>
                        <img src={require('../assets/image 373.png')} alt="Product 3" />
                        <div className="device-card-title">Kamera Laci</div>
                        <div className="device-card-sub">R. Keluarga</div>
                      </div>
                    </div>
                  ) : (
                    <div className="device-card-collection-horizontal">
                      <div className="device-card-horizontal" onClick={handleViewDeviceClick}>
                        <div className="image-container">
                          <img src={require('../assets/image 373.png')} alt="Product 3" />
                          <div className="gradient-overlay"></div>
                        </div>
                        <div className="device-card-title">Kamera Laci</div>
                        <div className="device-card-sub">R. Keluarga</div>
                      </div>
                      <div className="device-card-horizontal" onClick={handleViewDeviceClick}>
                        <img src={require('../assets/balkon.png')} alt="Product 3" />
                        <div className="device-card-title">Balkon</div>
                        <div className="device-card-sub">Taman</div>
                      </div>
                      <div className="device-card-horizontal" onClick={handleViewDeviceClick}>
                        <img src={require('../assets/image 373.png')} alt="Product 3" />
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

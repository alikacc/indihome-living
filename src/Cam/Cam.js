import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Cam.css"; // Assuming you will style using CSS here
import dashboard1Image from "../assets/dashboard1.png"; // First page background
import dashboardImage from "../assets/dashboard.png";  // Second page background
import webcamImage from "../assets/webcam.png";
import wifiIcon from "../assets/wifi.png"; // Wi-Fi icon with 2.4 GHz
import webcamCheckImage from "../assets/webcamcheck.png"; // The check image
import merahPutihImage from "../assets/merahputih.png"; // Background for success page

const Cam = () => {
    const [currentPage, setCurrentPage] = useState(1); // Page state: 1 = radar, 2 = Wi-Fi input, 3 = loading, 4 = device detail, 5 = success
    const [isChecked, setIsChecked] = useState(false); // Checkbox state
    const [wifiName, setWifiName] = useState(""); // State for Wi-Fi name input
    const [password, setPassword] = useState(""); // State for password input
    const [deviceName, setDeviceName] = useState(""); // State for device name input
    const [deviceLocation, setDeviceLocation] = useState(""); // State for device location input
    const [showPassword, setShowPassword] = useState(false); // Password visibility state
    const [timer, setTimer] = useState(3); // Countdown timer state
    const navigate = useNavigate();
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const getBackgroundImage = () => {
        if (currentPage === 7) {
            return merahPutihImage;
        }
        return currentPage === 1 ? dashboard1Image : dashboardImage;
    };

    // Effect for showing the radar loading page initially with countdown timer
    useEffect(() => {
        if (timer > 0) {
            const countdown = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);

            return () => clearInterval(countdown);
        } else {
            // After the timer reaches 0, change to the Wi-Fi input page (Page 2)
            setCurrentPage(2);
        }
    }, [timer]);


    // Handle the next button click on the Wi-Fi input page
    const handleWifiSubmit = () => {
        setCurrentPage(4); // Switch to the loading page
        setTimeout(() => {
            setCurrentPage(5); // After 3 seconds, go to the device detail page
        }, 3000);
    };

    // Handle the next button click on the device detail page
    const handleDeviceDetailSubmit = () => {
        setCurrentPage(6); // Switch to the success page
    };

    const handleBackClick = () => {
        navigate('/home'); // Go to the previous page
    };

    const handleNextClick = () => {
        setCurrentPage(3); // Switch to the next page
    };

    const handleGoToHome = () => {
        window.location.href = "http://localhost:3000"; // Redirect to localhost
    };

    return (
        <div className="container" style={{ backgroundImage: `url(${getBackgroundImage()})` }}>
            
            {currentPage === 1 && (
                <div className="radar-page">
                    {/* <div className="top-bar">
                        <button className="back-button">&#x2190;</button>
                        <span className="top-bar-title">Tambah Perangkat</span>
                    </div> */}
                    <div className="radar-container">
                        <div className="outer-circle">
                            <div className="middle-circle">
                                <div className="inner-circle">
                                    <div className="radar-sweep"></div>
                                </div>
                            </div>
                        </div>
                        <div className="center-number">{timer}</div>
                    </div>
                    <p className="radar-text">Mencari perangkat di sekitarmu...</p>
                </div>
            )}

            {currentPage === 2 && (
                <div className="camera-setup-page">
                    <div className="header-container">
                        <div className="top-bar">
                            <button className="back-button" style={{ color: "#181C21" }} onClick={handleBackClick}>&#x2190;</button>
                            <span className="top-bar-title" style={{ color: "#181C21" }}>Tambah Perangkat</span>
                        </div>
                        <div className="progress-circles">
                            <div className="circle active">1</div>
                            <div className="line"></div>
                            <div className="circle">2</div>
                            <div className="line"></div>
                            <div className="circle">3</div>
                        </div>
                    </div>
                    <img src={webcamImage} alt="Webcam" className="webcam-image" />
                    <div className="instruction-box">
                        <p className="instruction-text">Nyalakan & tunggu hingga lampu indikator berkedip</p>
                        <div className="checkbox-container">
                            <input
                                type="checkbox"
                                id="indicatorCheckbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="indicatorCheckbox" className="checkbox-container2">Konfirmasi indikator lampu berkedip</label>
                        </div>
                        <button
                            className={isChecked ? "selanjutnya-button active" : "selanjutnya-button"}
                            disabled={!isChecked}
                            onClick={handleNextClick}
                        >
                            Selanjutnya
                        </button>
                        <p className="indicator-warning">Indikator Tidak Berkedip</p>
                    </div>
                </div>
            )}
            {currentPage === 3 && (
                <div className="camera-setup-page">
                    <div className="header-container">
                        <div className="top-bar">
                            <button className="back-button" style={{ color: "#181C21" }} onClick={handleBackClick}>&#x2190;</button>
                            <span className="top-bar-title" style={{ color: "#181C21" }}>Tambah Perangkat</span>
                        </div>
                        <div className="progress-circles">
                            <div className="circle check">✔</div>
                            <div className="line-done"></div>
                            <div className="circle active">2</div>
                            <div className="line"></div>
                            <div className="circle">3</div>
                        </div>
                    </div>
                    <div className="wifi-setup-box">
                        <p className="instruction-text">Pilih Jaringan Wi-Fi</p>
                        <p className="sub-instruction-text">Gunakan Wi-Fi dengan frekuensi 2.4 GHz untuk menghubungkan</p>
                        <img src={wifiIcon} alt="Wi-Fi" className="wifi-icon" />
                        <label>
                            Nama Jaringan Wi-Fi:
                            <select
                                value={wifiName}
                                onChange={(e) => setWifiName(e.target.value)}
                                className="wifi-select"
                            >
                                <option value="">Pilih Jaringan</option>
                                <option value="Rumah Budi">Rumah Budi</option>
                                <option value="DZONE">DZONE</option>
                                <option value="TSO LT 10">TSO LT 10</option>
                                <option value="MODAL DONG">MODAL DONG</option>
                            </select>
                        </label>
                        <label>
                            Kata Sandi:
                            <div className="password-container">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Masukkan kata sandi Wi-Fi"
                                    className="password-input"
                                />
                                <button
                                    type="button"
                                    className="eye-button"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? '🙈' : '👁️'}
                                </button>
                            </div>
                        </label>
                        <button
                            className={wifiName && password ? "selanjutnya-button active" : "selanjutnya-button"}
                            onClick={handleWifiSubmit}
                            disabled={!wifiName || !password}
                        >
                            Selanjutnya
                        </button>
                    </div>
                </div>
            )}


            {currentPage === 4 && (
                // Third page - Loading state
                <div className="loading-page">
                    <div className="loading-circle"></div>
                    <p>Menghubungkan perangkat ke Wi-Fi...</p>
                </div>
            )}

            {currentPage === 5 && (
                <div className="camera-setup-page">
                    <div className="header-container">
                        <div className="top-bar">
                            <button className="back-button" style={{ color: "#181C21" }} onClick={handleBackClick}>&#x2190;</button>
                            <span className="top-bar-title" style={{ color: "#181C21" }}>Tambah Perangkat</span>
                        </div>
                        <div className="progress-circles">
                            <div className="circle check">✔</div>
                            <div className="line-done"></div>
                            <div className="circle check">✔</div>
                            <div className="line-done"></div>
                            <div className="circle active">3</div>
                        </div>
                    </div>
                    <div className="wifi-setup-box">
                        <p className="instruction-text">Isi Nama & Lokasi Perangkat</p>
                        <img src={webcamImage} alt="Webcam" className="webcam-icon" />
                        <label>
                            Nama Perangkat:
                            <input
                                type="text"
                                value={deviceName}
                                onChange={(e) => setDeviceName(e.target.value)}
                                placeholder="Masukkan nama perangkat"
                                className="wifi-select"
                            />
                        </label>
                        <label>
                            Lokasi Perangkat:
                            <select
                                value={deviceLocation}
                                onChange={(e) => setDeviceLocation(e.target.value)}
                                className="wifi-select"
                            >
                                <option value="">Pilih Lokasi</option>
                                <option value="R. Keluarga">R. Keluarga</option>
                                <option value="R. Tamu">R. Tamu</option>
                                <option value="R. Makan">R. Makan</option>
                                <option value="R. Tidur">R. Tidur</option>
                            </select>
                        </label>
                        <button
                            className={deviceName && deviceLocation ? "selanjutnya-button active" : "selanjutnya-button"}
                            onClick={handleDeviceDetailSubmit}
                            disabled={!deviceName || !deviceLocation}
                        >
                            Selanjutnya
                        </button>
                    </div>
                </div>
            )}

            {currentPage === 6 && (
                // Success page
                <div className="success-page">
                    <img src={webcamCheckImage} alt="Device Added" className="device-image2" />
                    <h2>Berhasil Menambahkan Perangkat Baru</h2>
                    <p>Mulai sekarang, rumahmu jadi lebih aman, nyaman, dan praktis!</p>
                    <button className="ke-beranda-button" onClick={handleGoToHome}>
                        Ke Beranda
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cam;

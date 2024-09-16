import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Poppins, sans-serif',
        padding: '20px',
        height: '100vh',
        boxSizing: 'border-box',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        marginBottom: '20px',
    },
    backButton: {
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer',
        marginRight: '16px',
    },
    title: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    termsBox: {
        width: '100%',
        height: '60vh',
        overflowY: 'auto',
        padding: '16px',
        border: '1px solid #DAE0E9',
        borderRadius: '12px',
        marginBottom: '20px',
        backgroundColor: '#F9F9F9',
        boxSizing: 'border-box',
    },
    termsText: {
        fontSize: '14px',
        lineHeight: '20px',
        color: '#333',
    },
    checkboxContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        width: '100%',
    },
    checkbox: {
        marginRight: '8px',
    },
    label: {
        fontSize: '14px',
        color: '#333',
    },
    button: (isChecked) => ({
        backgroundColor: isChecked ? '#d71a23' : '#DAE0E9',
        color: 'white',
        border: 'none',
        padding: '12px 24px',
        borderRadius: '40px',
        width: '100%',
        cursor: isChecked ? 'pointer' : 'not-allowed',
        fontSize: '16px',
        fontWeight: 'bold',
        fontFamily: 'Poppins, sans-serif',
        textAlign: 'center',
    }),
};

const TermsAndConditions = ({ handleBackClick }) => {
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleNextClick = () => {
        if (isChecked) {
            navigate('/home');
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <button style={styles.backButton} onClick={handleBackClick}>
                    ←
                </button>
                <div style={styles.title}>Syarat & Ketentuan</div>
            </div>
            <div style={styles.termsBox}>
                <div style={styles.termsText}>
                    1. Pengguna Terdaftar: Pengguna harus berusia minimal 18 tahun dan memiliki kartu identitas resmi untuk mendaftar akun IndiHome Living. Setiap akun harus didaftarkan dengan nomor telepon Telkomsel yang aktif.<br /><br />
                    2. Kerahasiaan Akun: Pengguna bertanggung jawab untuk menjaga kerahasiaan informasi akun mereka, termasuk username dan password. Segala aktivitas yang terjadi melalui akun pengguna dianggap dilakukan oleh pemilik akun tersebut.<br /><br />
                    3. Penggunaan Aplikasi: Aplikasi IndiHome Living hanya boleh digunakan untuk keperluan pribadi dan sesuai dengan hukum yang berlaku. Pengguna dilarang menggunakan aplikasi untuk tujuan ilegal atau tidak etis.<br /><br />
                    4. Kebijakan Privasi: Data pribadi pengguna yang dikumpulkan saat pendaftaran akan digunakan sesuai dengan kebijakan privasi IndiHome Living. Pengguna setuju bahwa data mereka dapat digunakan untuk peningkatan layanan dan penawaran produk terkait.<br /><br />
                    5. Penghentian Layanan: Telkomsel berhak untuk menghentikan atau menangguhkan akun pengguna yang melanggar syarat dan ketentuan ini atau jika ditemukan aktivitas mencurigakan pada akun tersebut.<br /><br />
                    Syarat dan ketentuan ini dirancang untuk melindungi pengguna serta memastikan penggunaan yang aman dan bertanggung jawab dari aplikasi IndiHome Living.
                </div>
            </div>
            <div style={styles.checkboxContainer}>
                <input
                    type="checkbox"
                    id="agree"
                    style={styles.checkbox}
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="agree" style={styles.label}>Saya setuju dengan syarat & ketentuan ini</label>
            </div>
            <button style={styles.button(isChecked)} onClick={handleNextClick} disabled={!isChecked}>
                Selanjutnya
            </button>
        </div>
    );
};

export default TermsAndConditions;

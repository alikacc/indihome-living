import React, { useState } from 'react';

const UserReview = ({ isVisible, onClose, onSubmit }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [customFeedback, setCustomFeedback] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleCustomFeedbackChange = (e) => {
        setCustomFeedback(e.target.value);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        if (!customFeedback) {
            setIsFocused(false);
        }
    };

    const handleSubmit = () => {
        const feedback = selectedOption === "3" ? customFeedback : selectedOption;
        console.log('Option selected:', feedback);
        onClose();
        onSubmit();
    };

    return (
        isVisible && (
            <div style={modalOverlay}>
                <div style={modalContent}>
                    <div style={modalHeader}>Apakah artikel ini membantu?</div>
                    <div style={optionList}>
                        <label style={radioContainer}>
                            <input
                                type="radio"
                                name="review"
                                value="1"
                                checked={selectedOption === "1"}
                                onChange={handleOptionChange}
                                style={radioInput}
                            />
                            <span style={radioLabel}>Terlalu rumit & tidak mudah dipahami</span>
                        </label>
                        <label style={radioContainer}>
                            <input
                                type="radio"
                                name="review"
                                value="2"
                                checked={selectedOption === "2"}
                                onChange={handleOptionChange}
                                style={radioInput}
                            />
                            <span style={radioLabel}>Informasi di artikel ini tidak relevan</span>
                        </label>
                        <label style={radioContainer}>
                            <input
                                type="radio"
                                name="review"
                                value="3"
                                checked={selectedOption === "3"}
                                onChange={handleOptionChange}
                                style={radioInput}
                            />
                            <span style={radioLabel}>Lainnya</span>
                        </label>

                        {selectedOption === "3" && (
                            <div style={customInputContainer}>
                                <textarea
                                    placeholder=" "
                                    value={customFeedback}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    onChange={handleCustomFeedbackChange}
                                    style={customInput}
                                />
                                {!isFocused && !customFeedback && (
                                    <span style={placeholderText}>
                                        <span>Ceritakan apa yang kurang dari</span>
                                        <br />
                                        <span>artikel ini</span>
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                    <div style={buttonContainer}>
                        <button style={cancelButton} onClick={onClose}>
                            Batal
                        </button>
                        <button
                            style={{
                                ...submitButton,
                                backgroundColor: selectedOption ? '#FF0000' : '#E0E0E0',
                            }}
                            disabled={!selectedOption}
                            onClick={handleSubmit}
                        >
                            Kirim
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};

// Styles
const modalOverlay = {
    position: 'fixed',
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%, 0%)',
    zIndex: 1000,
    padding: '20px',
    paddingBottom: '0px',
};

const modalContent = {
    backgroundColor: '#FFFFFF',
    padding: '20px',
    borderRadius: '16px 16px 0 0',
    width: '320px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Poppins, sans-serif',
};

const modalHeader = {
    fontSize: '16px',
    marginBottom: '10px',
};

const optionList = {
    marginBottom: '20px',
};

const radioContainer = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
};

const radioInput = {
    marginRight: '10px',
};

const radioLabel = {
    fontSize: '14px',
};

const customInputContainer = {
    position: 'relative',
    width: '100%',
};

const customInput = {
    fontFamily: 'Poppins, sans-serif',
    width: '100%',
    height: '76px',
    padding: '8px',
    marginTop: '10px',
    borderRadius: '8px',
    border: '1px solid #BFC9D0',
    boxSizing: 'border-box',
    fontSize: '14px',
    lineHeight: '20px',
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'transparent',
};

const placeholderText = {
    position: 'absolute',
    top: '25px', 
    left: '15px',
    fontSize: '14px',
    color: '#576775',
    pointerEvents: 'none', // Makes the placeholder text unclickable
    zIndex: 1,
    lineHeight: '20px',
};

const buttonContainer = {
    display: 'flex',
    justifyContent: 'space-between',
};

const cancelButton = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins, sans-serif',
    backgroundColor: '#FFFFFF',
    border: '2px solid #FF0025',
    width: '144px',
    height: '32px',
    color: '#FF0025',
    borderRadius: '16px',
    fontSize: '14px',
    cursor: 'pointer',
};

const submitButton = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins, sans-serif',
    backgroundColor: '#D1D3DB',
    width: '144px',
    height: '32px',
    border: 'none',
    color: '#FFFFFF',
    borderRadius: '16px',
    fontSize: '14px',
    cursor: 'pointer',
};

export default UserReview;

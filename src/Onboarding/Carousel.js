import React, { useRef, useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
    const carouselRef = useRef(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleCarousel = () => {
        setIsExpanded(!isExpanded); // Toggle expanded state
        carouselRef.current.style.bottom = isExpanded ? '-221px' : '0px'; // Move carousel
    };

    const handleProductClick = (productName) => {
        alert(`You clicked on ${productName}`);
        // Perform any other action when a product is clicked
    };

    return (
        <>
            {/* Show the dimmed background when the carousel is expanded */}
            {isExpanded && <div className="dimmed-background"></div>}

            {/* The carousel component */}
            <div
                className={`carousel ${isExpanded ? 'expanded' : ''}`}
                ref={carouselRef}
            >
                <div className="drag-indicator" onClick={toggleCarousel}></div>
                <div className="carousel-item">
                    <div className="recommendation">
                        <div
                            className="product-card"
                            onClick={() => handleProductClick('Indoor')}
                        >
                            <img src="https://via.placeholder.com/150" alt="Product 1" />
                            <div className="product-info">
                                <div className="product-details">
                                    <span className="product-name">Indoor</span>
                                    <span className="product-description">Sudah termasuk cloud 3, 6 atau 12 bulan</span>
                                </div>
                                <div className="product-price">
                                    <span className="price-label">Mulai dari</span>
                                    <span className="price-value">Rp350.000/bulan</span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="product-card"
                            onClick={() => handleProductClick('Outdoor')}
                        >
                            <img src="https://via.placeholder.com/150" alt="Product 2" />
                            <div className="product-info">
                                <div className="product-details">
                                    <span className="product-name">Outdoor</span>
                                    <span className="product-description">Sudah termasuk cloud 3, 6 atau 12 bulan</span>
                                </div>
                                <div className="product-price">
                                    <span className="price-label">Mulai dari</span>
                                    <span className="price-value">Rp450.000/bulan</span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="product-card"
                            onClick={() => handleProductClick('Smart Home')}
                        >
                            <img src="https://via.placeholder.com/150" alt="Product 3" />
                            <div className="product-info">
                                <div className="product-details">
                                    <span className="product-name">Smart Home</span>
                                    <span className="product-description">Sudah termasuk cloud 3, 6 atau 12 bulan</span>
                                </div>
                                <div className="product-price">
                                    <span className="price-label">Mulai dari</span>
                                    <span className="price-value">Rp550.000/bulan</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carousel;

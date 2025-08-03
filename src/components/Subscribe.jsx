import React, { useState } from 'react';
import './subscribe.css';

// Sample car images for each category
const carImages = {
  muscle: [
    { id: 1, src: '', alt: 'Dodge Charger', name: '1970 Dodge Charger', price: '$45,000' },
    { id: 2, src: '', alt: 'Ford Mustang', name: '1968 Ford Mustang', price: '$52,000' },
  ],
  economy: [
    { id: 1, src: '', alt: 'Toyota Corolla', name: '2023 Toyota Corolla', price: '$22,000' },
    { id: 2, src: '', alt: 'Honda Civic', name: '2023 Honda Civic', price: '$24,500' },
  ],
  hybrid: [
    { id: 1, src: '', alt: 'Tesla Model 3', name: '2023 Tesla Model 3', price: '$42,000' },
    { id: 2, src: '', alt: 'Toyota Prius', name: '2023 Toyota Prius', price: '$28,000' },
  ],
  vintage: [
    { id: 1, src: '', alt: 'Chevrolet Bel Air', name: '1957 Chevrolet Bel Air', price: '$65,000' },
    { id: 2, src: '', alt: 'Volkswagen Beetle', name: '1965 Volkswagen Beetle', price: '$25,000' },
  ],
  luxury: [
    { id: 1, src: '', alt: 'Mercedes S-Class', name: '2023 Mercedes S-Class', price: '$115,000' },
    { id: 2, src: 'https://example.com/luxury2.jpg', alt: 'BMW 7 Series', name: '2023 BMW 7 Series', price: '$95,000' },
  ],
  suv: [
    { id: 1, src: '', alt: 'Ford F-150', name: '2023 Ford F-150', price: '$42,000' },
    { id: 2, src: '', alt: 'Chevrolet Tahoe', name: '2023 Chevrolet Tahoe', price: '$55,000' },
  ],
  sports: [
    { id: 1, src: '', alt: 'Porsche 911', name: '2023 Porsche 911', price: '$110,000' },
    { id: 2, src: '', alt: 'Chevrolet Corvette', name: '2023 Chevrolet Corvette', price: '$68,000' },
  ]
};

const CarMenu = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [selectedCar, setSelectedCar] = useState(null);

  const carCategories = [
    { id: 'muscle', name: 'Muscle Cars', icon: '🚗' },
    { id: 'economy', name: 'Economy Cars', icon: '💰' },
    { id: 'hybrid', name: 'Hybrid/Electric', icon: '⚡' },
    { id: 'vintage', name: 'Old School/Vintage', icon: '🕰️' },
    { id: 'luxury', name: 'Luxury Vehicles', icon: '💎' },
    { id: 'suv', name: 'SUVs & Trucks', icon: '🚙' },
    { id: 'sports', name: 'Sports Cars', icon: '🏎️' }
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    setSelectedCar(null);
  };

  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  const closeGallery = () => {
    setSelectedCar(null);
  };

  return (
    <div className="car-menu-gallery-container">
      <div className={`car-menu-container ${isMenuOpen ? 'open' : 'closed'}`}>
        <button 
          className="menu-toggle-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '◄' : '►'} {isMenuOpen ? 'Hide Menu' : 'Show Menu'}
        </button>
        
        {isMenuOpen && (
          <div className="car-menu">
            <h3 className="menu-title">Select Car Type</h3>
            <ul className="category-list">
              {carCategories.map((category) => (
                <li
                  key={category.id}
                  className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-name">{category.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="gallery-section">
        {activeCategory && !selectedCar && (
          <div className="car-gallery">
            <h2>{carCategories.find(c => c.id === activeCategory).name}</h2>
            <div className="car-grid">
              {carImages[activeCategory].map((car) => (
                <div 
                  key={car.id} 
                  className="car-card"
                  onClick={() => handleCarSelect(car)}
                >
                  <div className="car-image-placeholder">
                    <img src={car.src} alt={car.alt} onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = 'https://via.placeholder.com/300x200?text=Car+Image';
                    }} />
                  </div>
                  <div className="car-info">
                    <h3>{car.name}</h3>
                    <p>{car.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedCar && (
          <div className="car-detail">
            <button className="back-button" onClick={closeGallery}>
              &larr; Back to Gallery
            </button>
            <div className="detail-container">
              <div className="detail-image">
                <img src={selectedCar.src} alt={selectedCar.alt} onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = 'https://via.placeholder.com/600x400?text=Car+Image';
                }} />
              </div>
              <div className="detail-info">
                <h2>{selectedCar.name}</h2>
                <p className="price">{selectedCar.price}</p>
                <div className="specs">
                  <p><strong>Year:</strong> 2023</p>
                  <p><strong>Mileage:</strong> 5,000 miles</p>
                  <p><strong>Engine:</strong> V8 5.0L</p>
                  <p><strong>Transmission:</strong> Automatic</p>
                </div>
                <button className="inquiry-btn">Make an Inquiry</button>
              </div>
            </div>
          </div>
        )}

        {!activeCategory && (
          <div className="welcome-message">
            <h2>Welcome to THE CAR Hub</h2>
            <p>Select a car category from the menu to browse our collection</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarMenu;
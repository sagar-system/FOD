import React from 'react';
import './imagegallery.css';
import image1 from './1970bg.jpg'
import image2 from './SRT hell cat.jpg'
import image3 from './SRT8.jpeg'

const ImageGallery = () => {
  const galleryItems = [
    {
      id: 1,
      src: image1,
      alt: '1970 Black-Ghost',
      title: '1970 Black-Ghost',
      description: 'PRICE:-$200000'
      
    },
    {
      id: 2,
      src: image2,
      alt: 'SRT HELLCAT',
      title: 'SRT HELLCAT',
      description: 'PRICE:-$60000'
    },
    {
      id: 3,
      src: image3,
      alt: 'SRT-2018',
      title: 'SRT 2018',
      description: 'PRICE:-$50000'
    }
  ];

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">STOCK AVAILABLE</h2>
      <div className="gallery">
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-item">
            <img 
              src={item.src} 
              alt={item.alt}
              className="gallery-image"
            />
            <div className="gallery-item-content">
              <h3 className="item-title">{item.title}</h3>
              <pre className="item-description">{item.description}</pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
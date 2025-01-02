import React, { useEffect, useState } from 'react';
import {
    TransformWrapper,
    TransformComponent
  } from "react-zoom-pan-pinch";
import './gallery.css'; // Assuming you have some basic styles
import axios from 'axios';
console.log('Gallery component loaded');
interface GalleryProps {
    folder:string;
}

const Gallery: React.FC<GalleryProps> = ({ folder }) => {
    const [images, setImages] = useState<string[]>([]);
    const [imagesHigh, setImagesHigh] = useState<string[]>([]);
    //const folder = 'icons/';
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(`/api/storage/v1/b/bliwiukassets/o?prefix=lowres/${folder}`);
                console.log('Response data:', response.data);
                const imageUrls = response.data.items.map((item: any) => `https://storage.googleapis.com/bliwiukassets/${item.name}`);
                setImages(imageUrls);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };
        const fetchHighres = async () => {
            try {
                const response = await axios.get(`/api/storage/v1/b/bliwiukassets/o?prefix=highres/${folder}`);
                console.log('Response data:', response.data);
                const imageUrls = response.data.items.map((item: any) => `https://storage.googleapis.com/bliwiukassets/${item.name}`);
                setImagesHigh(imageUrls);
                console.log(imageUrls)
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };
        fetchHighres();
        fetchImages();
    }, []);

    const handleImageClick = (i: number) => {
        setSelectedImage(imagesHigh[i]);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    const handleNext = (resetTransform: () => void) => {
        if (selectedImage) {
            const currentIndex = imagesHigh.indexOf(selectedImage);
            const nextIndex = (currentIndex + 1) % imagesHigh.length;
            setSelectedImage(imagesHigh[nextIndex]);
            resetTransform();
        }
    };

    const handlePrev = (resetTransform: () => void) => {
        if (selectedImage) {
            const currentIndex = imagesHigh.indexOf(selectedImage);
            const prevIndex = (currentIndex - 1 + imagesHigh.length) % imagesHigh.length;
            setSelectedImage(imagesHigh[prevIndex]);
            resetTransform();
        }
    };

    const handleKeyDown = (event: KeyboardEvent, resetTransform: () => void) => {
        if (selectedImage) {
            if (event.key === 'ArrowRight') {
                handleNext(resetTransform);
            } else if (event.key === 'ArrowLeft') {
                handlePrev(resetTransform);
            } else if (event.key === 'ArrowUp') {
                // zoomIn();
            } else if (event.key === 'ArrowDown') {
                // zoomOut();
            } else if (event.key === 'Escape') {
                handleClose();
            }
        }
    };

    return (
        <div className="gallery">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    onClick={() => handleImageClick(index)}
                    className="gallery-image"
                />
            ))}
            {selectedImage && (
                <div className="fullscreen-overlay">
                    
                    <TransformWrapper
                        initialScale={1}
                        minScale={0.5}
                        centerOnInit={true}
                    >
                        {({ zoomIn, zoomOut, resetTransform }) => {
                            useEffect(() => {
                                const keyDownHandler = (event: KeyboardEvent) => handleKeyDown(event, resetTransform);
                                window.addEventListener('keydown', keyDownHandler);
                                return () => {
                                    window.removeEventListener('keydown', keyDownHandler);
                                };
                            }, [selectedImage, images]);

                            return (
                                <>
                                    <div className="fullscreen-overlay-bg" onClick={handleClose}></div>
                                    <button className="nav-button close-nav" onClick={() => handleClose()}>x</button>
                                    <button className="nav-button zoom-in" onClick={() => zoomIn()}>+</button>
                                    <button className="nav-button zoom-out" onClick={() => zoomOut()}>-</button>
                                    <button className="nav-button zoom-reset" onClick={() => resetTransform()}>o</button>
                                    <button className="nav-button prev-button" onClick={(e) => { e.stopPropagation(); handlePrev(resetTransform); }}>‹</button>
                                    <button className="nav-button next-button" onClick={(e) => { e.stopPropagation(); handleNext(resetTransform); }}>›</button>
                                    <TransformComponent>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', pointerEvents: 'none' }}>
                                            <img src={selectedImage} alt="Full screen" className="fullscreen-image" style={{ maxWidth: '95vw', maxHeight: '90vh'}} />
                                        </div>
                                    </TransformComponent>
                                </>
                            );
                        }}
                    </TransformWrapper>
                </div>
            )}
        </div>
    );
};
// <img src={imageLarge || ''} alt="Full screen" className="fullscreen-image" style={{ transform: `scale(${zoom / 100})` }}/>

export default Gallery;

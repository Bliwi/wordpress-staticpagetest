import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot } from '@fortawesome/free-solid-svg-icons'

import { imageData } from './fetch';
import {
    TransformWrapper,
    TransformComponent
  } from "react-zoom-pan-pinch";
interface GalleryProps {
    folder:string;
}
const Gallery: React.FC<GalleryProps> = ({ folder }) => {
    const [images, setImages] = useState<string[]>([]);
    const [imagesHigh, setImagesHigh] = useState<string[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isLoadingGal, setIsLoadingGal] = useState<boolean>(true);
    
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const imageResponse = await imageData;
                const imageUrls = imageResponse?.data.items.filter((item: any) => item.name.includes(`lowres/${folder}`)).map((item: any) => `https://storage.googleapis.com/bliwiukassets/${item.name}`);
                const imageUrlsHigh = imageResponse?.data.items.filter((item: any) => item.name.includes(`highres/${folder}`)).map((item: any) => `https://storage.googleapis.com/bliwiukassets/${item.name}`);
                setImagesHigh(imageUrlsHigh)
                setImages(imageUrls)
                setIsLoadingGal(false)
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };
        fetchImages();
    }, []);

    const handleImageClick = (i: number) => {
        setIsLoading(true);
        setSelectedImage(imagesHigh[i]);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    const handleNext = (resetTransform: () => void) => {
        if (selectedImage) {
            setIsLoading(true);
            const currentIndex = imagesHigh.indexOf(selectedImage);
            const nextIndex = (currentIndex + 1) % imagesHigh.length;
            setSelectedImage(imagesHigh[nextIndex]);
            resetTransform();
        }
    };

    const handlePrev = (resetTransform: () => void) => {
        if (selectedImage) {
            setIsLoading(true);
            const currentIndex = imagesHigh.indexOf(selectedImage);
            const prevIndex = (currentIndex - 1 + imagesHigh.length) % imagesHigh.length;
            setSelectedImage(imagesHigh[prevIndex]);
            resetTransform();
        }
    };

    useEffect(() => {
        if (selectedImage) {
            const img = new Image();
            img.src = selectedImage;
            img.onload = () => setIsLoading(false);
        }
    }, [selectedImage]);

    const handleKeyDown = (event: KeyboardEvent, resetTransform: () => void) => {
        if (selectedImage) {
            if (event.key === 'ArrowRight') {
                handleNext(resetTransform);
            } else if (event.key === 'ArrowLeft') {
                handlePrev(resetTransform);
            } else if (event.key === 'Escape') {
                handleClose();
            }
        }
    };

    return (
        <div>
            
            {isLoadingGal ? (
                <FontAwesomeIcon icon={faCarrot} className="IconSpin carrotload" />
            ) : (
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
                </div>
            )}
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
                                            {isLoading ? (
                                                <FontAwesomeIcon icon={faCarrot} className="IconSpin carrotload"/>
                                            ) : (
                                                <img src={selectedImage} alt="Full screen" className="fullscreen-image" style={{ maxWidth: '95vw', maxHeight: '90vh'}} />
                                            )}
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

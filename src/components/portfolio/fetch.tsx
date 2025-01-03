import axios from 'axios';

const fetchImages = async () => {
    try {
        const imageData = await axios.get(`https://storage.googleapis.com/storage/v1/b/bliwiukassets/o`);
        return imageData;
    } catch (error) {
        console.error('Error fetching images:', error);
    }
};
export const imageData = fetchImages();


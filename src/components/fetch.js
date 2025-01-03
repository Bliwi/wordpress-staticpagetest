const fetchImages = async () => {
    try {
        const response = await axios.get(`/api/storage/v1/b/bliwiukassets/o?prefix=lowres/${folder}`);
        console.log('Response data:', response.data);
        const imageUrls = response.data.items.map((item) => `https://storage.googleapis.com/bliwiukassets/${item.name}`);
        setImages(imageUrls);
        setIsLoadingGal(false);
        console.log("images fetching complete.");
    } catch (error) {
        console.error('Error fetching images:', error);
    }
};
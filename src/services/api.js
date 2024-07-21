import axios from 'axios';

const API_URL = 'https://api-5d4y.onrender.com/app/v1/products?category=furniture'; // Replace with your actual API URL

export const getProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log("Loading Productas", response.data)
        return response.data["Data"];
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

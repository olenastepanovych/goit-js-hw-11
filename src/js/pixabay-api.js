import axios from "axios";

const API_KEY = '48850020-35b7e0c8bab00d4ebe2ae0444'; // Встав свій ключ
const BASE_URL = "https://pixabay.com/api/";

export async function fetchImages(query) {
try {
    const response = await axios.get(BASE_URL, {
    params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    },
    });

    return response.data.hits; // Повертаємо масив зображень
} catch (error) {
    console.error("Помилка запиту:", error);
    return [];
}
}


    
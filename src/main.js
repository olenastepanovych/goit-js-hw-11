import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const loader = document.querySelector('.loader');

form.addEventListener('submit', async (event) => {
event.preventDefault();

const query = input.value.trim();
if (!query) {
    iziToast.warning({
    title: 'Warning',
    message: 'Please enter a search query!',
    });
    return;
}

loader.style.display = 'block';

try {
    const images = await fetchImages(query);
    renderGallery(images);
} catch (error) {
    iziToast.error({
    title: 'Error',
    message: 'Sorry, there are no images matching your search query. Please try again!',
    });
} finally {
    loader.style.display = 'none';
    input.value = '';
}
});




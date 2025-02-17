import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

let lightbox = new SimpleLightbox('.gallery a');

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

gallery.innerHTML = '';
loader.style.display = 'block';

try {
    const images = await fetchImages(query);
    renderGallery(images);
    lightbox.refresh();
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




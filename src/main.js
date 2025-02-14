import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import iziToast from "izitoast";

const form = document.querySelector(".form");
const searchInput = document.getElementById("searchInput");
const loader = document.querySelector(".loader");

form.addEventListener("submit", async (event) => {
event.preventDefault();
const query = searchInput.value.trim();

if (!query) {
    iziToast.warning({
    title: "Warning",
    message: "Please enter a search term!",
    });
    return;
}

loader.style.display = "block"; // Показуємо завантажувач
const images = await fetchImages(query);
loader.style.display = "none"; // Ховаємо завантажувач

renderImages(images);
});


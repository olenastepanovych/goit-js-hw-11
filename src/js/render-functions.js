import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const gallery = document.getElementById("images");

export function renderImages(images) {
  gallery.innerHTML = ""; // Очищаємо перед додаванням нових зображень

if (images.length === 0) {
    iziToast.error({
    title: "Oops!",
    message: "Sorry, there are no images matching your search query. Please try again!",
    });
    return;
}

const markup = images
    .map(
    (image) => `
    <div class="card">
        <a href="${image.largeImageURL}" class="img-cont">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        </a>
        <div class="describtion-cont">
        <div class="block">
            <h4>Likes</h4>
            <p>${image.likes}</p>
        </div>
        <div class="block">
            <h4>Views</h4>
            <p>${image.views}</p>
        </div>
        <div class="block">
            <h4>Comments</h4>
            <p>${image.comments}</p>
        </div>
        <div class="block">
            <h4>Downloads</h4>
            <p>${image.downloads}</p>
        </div>
        </div>
    </div>
    `
    )
    .join("");

gallery.innerHTML = markup;

  // Оновлюємо галерею для роботи SimpleLightbox
const lightbox = new SimpleLightbox(".img-cont a");
lightbox.refresh();
}


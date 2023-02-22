import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const galleryCards = createGalleryMarkup(galleryItems);
const lightboxSettings = {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
};
galleryEl.insertAdjacentHTML("afterbegin", galleryCards);

function createGalleryMarkup(images) {
  return images
    .map(
      ({
        original,
        preview,
        description,
      }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", lightboxSettings);

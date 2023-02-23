import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

export const galleryEl = document.querySelector(".gallery");
export const galleryCards = createGalleryMarkup(galleryItems);
export const lightboxSettings = {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
};
export const galleryBuild = galleryEl.insertAdjacentHTML("afterbegin", galleryCards);

export function createGalleryMarkup(images) {
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

export const lightbox = new SimpleLightbox(".gallery a", lightboxSettings);

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const galleryCards = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML("afterbegin", galleryCards);

galleryEl.addEventListener("click", onOpenModalWindow);

function createGalleryMarkup(images) {
  return images
    .map(
      ({ original, preview, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}

function onOpenModalWindow(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  basicLightbox
    .create(
      `
		<img  src="${event.target.dataset.source}">
	`
    )
    .show();
}

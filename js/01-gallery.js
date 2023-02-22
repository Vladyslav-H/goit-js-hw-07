import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const imageEl = document.querySelector(".gallery__image");
const galleryCards = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML("afterbegin", galleryCards);

function createGalleryMarkup() {
  return galleryItems
    .map(
      (element) => `<div class="gallery__item">
  <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`
    )
    .join("");
}

galleryEl.addEventListener("click", onOpenModalWindow);

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

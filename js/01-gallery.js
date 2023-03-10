import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const galleryCards = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML("afterbegin", galleryCards);

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

galleryEl.addEventListener("click", onOpenModalWindow);

function onOpenModalWindow(event) {
  event.preventDefault();
  const instance = basicLightbox.create(
    `<img  src="${event.target.dataset.source}">`
  );

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  instance.show();

  galleryEl.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
  console.log(event.key === "Escape");
}

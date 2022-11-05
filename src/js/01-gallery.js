import SimpleLightbox from "simplelightbox";
console.log(SimpleLightbox);
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
console.log(galleryItems);

const listGalleryItems = document.querySelector(".gallery");

const markupGallery = createImagesCardsMarkup(galleryItems);
listGalleryItems.insertAdjacentHTML('beforeend', markupGallery) ;


function createImagesCardsMarkup(galleryItems){
  const markup = galleryItems.map(({preview,original,description}) =>        
  `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${original}" alt="${description}" />
</a>
</div>`
).join('');    
return markup;  
}

new SimpleLightbox('.gallery a', {captionsData: "alt",captionDelay: 250});
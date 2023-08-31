import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
 galleryEl: document.querySelector('.gallery'),  
}

function renderGalleryItem(galleryItems) {
    const itemsMarkup = galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
 </li>`;
    }).join(''); 
    
    refs.galleryEl.innerHTML = itemsMarkup;
    
}
renderGalleryItem(galleryItems);


var gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});

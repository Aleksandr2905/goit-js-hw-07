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
      data-source="${original}"
      alt="${description}"
    />
  </a>
 </li>`;
    }).join(''); 
    
    refs.galleryEl.innerHTML = itemsMarkup;
    
}
renderGalleryItem(galleryItems);

const onImgClick = event => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
} 

refs.galleryEl.addEventListener('click', onImgClick);



const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`)

instance.show()


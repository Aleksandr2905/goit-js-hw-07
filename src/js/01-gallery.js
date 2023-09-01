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
let instance;
const onImgClick = event => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const currentImg = event.target.dataset.source;

    instance = basicLightbox.create(`
    <img src="${currentImg}" width="800" height="600">
   `)

    document.addEventListener('keydown', closeEsc);
    
    instance.show()
        
    
} 

refs.galleryEl.addEventListener('click', onImgClick);

const closeEsc = event => {
    if (event.code === 'Escape') {
        document.removeEventListener('keydown', closeEsc);
        instance.close();
    }
    
};



(() => {
  const dialog = document.querySelector('.gallery-dialog');
  const image = document.querySelector('#gallery-dialog-image');
  const title = document.querySelector('#gallery-dialog-title');
  const caption = document.querySelector('#gallery-dialog-caption');
  const count = document.querySelector('#gallery-dialog-count');
  const previous = document.querySelector('.dialog-prev');
  const next = document.querySelector('.dialog-next');
  if (!dialog || !image || !title || !caption || !count || !previous || !next) return;

  let images = [];
  let activeIndex = 0;

  const render = () => {
    image.src = images[activeIndex];
    image.alt = `${title.textContent} · vista ${activeIndex + 1}`;
    count.textContent = `${activeIndex + 1} de ${images.length}`;
    previous.hidden = images.length < 2;
    next.hidden = images.length < 2;
  };

  const openGallery = (card) => {
    images = card.dataset.galleryImages ? card.dataset.galleryImages.split('|') : [card.dataset.galleryImage];
    activeIndex = 0;
    title.textContent = card.dataset.galleryTitle || '';
    caption.textContent = card.dataset.galleryCaption || '';
    render();
    dialog.showModal();
  };

  document.querySelectorAll('[data-gallery-image], [data-gallery-images]').forEach((card) => card.addEventListener('click', () => openGallery(card)));
  previous.addEventListener('click', () => { activeIndex = (activeIndex - 1 + images.length) % images.length; render(); });
  next.addEventListener('click', () => { activeIndex = (activeIndex + 1) % images.length; render(); });
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('keydown', (event) => {
    if (images.length < 2) return;
    if (event.key === 'ArrowLeft') previous.click();
    if (event.key === 'ArrowRight') next.click();
  });
})();

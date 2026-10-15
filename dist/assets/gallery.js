(() => {
  const dialog = document.querySelector('.gallery-dialog');
  const image = document.querySelector('#gallery-dialog-image');
  const title = document.querySelector('#gallery-dialog-title');
  const caption = document.querySelector('#gallery-dialog-caption');
  if (!dialog || !image || !title || !caption) return;

  document.querySelectorAll('[data-gallery-image]').forEach((card) => {
    card.addEventListener('click', () => {
      image.src = card.dataset.galleryImage;
      image.alt = card.querySelector('img')?.alt || '';
      title.textContent = card.dataset.galleryTitle || '';
      caption.textContent = card.dataset.galleryCaption || '';
      dialog.showModal();
    });
  });

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
})();

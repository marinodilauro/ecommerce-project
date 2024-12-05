document.addEventListener('DOMContentLoaded', function () {
  const products = [
    { frontImage: '1.webp', backImage: '1b.webp' },
    { frontImage: '2.webp', backImage: '2b.webp' },
    { frontImage: '3.webp', backImage: '3b.webp' },
    { frontImage: '4.webp', backImage: '4b.webp' },
    { frontImage: '5.webp', backImage: '5b.webp' },
    { frontImage: '6.webp', backImage: '6b.webp' },
  ];

  // Inizializza le immagini per ogni card
  products.forEach((product, index) => {
    const productId = index + 1;
    document.getElementById(`thumb_1_${productId}`).src = './assets/img/' + product.frontImage;
    document.getElementById(`thumb_2_${productId}`).src = './assets/img/' + product.backImage;
    setActiveImage(1, productId); // Setta l'immagine di default
  });

  // Event delegation per le miniature
  document.addEventListener('click', function (event) {
    const thumb = event.target.closest('.thumb');
    if (thumb) {
      const productId = thumb.dataset.productId;
      const imageNumber = thumb.dataset.imageNumber;

      setActiveImage(Number(imageNumber), Number(productId));
    }
  });

  // Funzione per settare l'immagine attiva
  function setActiveImage(imageNumber, productId) {
    const product = products[productId - 1];
    const frontImage = document.getElementById(`activeImage_1_${productId}`);
    const backImage = document.getElementById(`activeImage_2_${productId}`);
    const thumb1 = document.getElementById(`thumb_1_${productId}`);
    const thumb2 = document.getElementById(`thumb_2_${productId}`);

    if (imageNumber === 1) {
      frontImage.src = './assets/img/' + product.frontImage;
      backImage.style.display = 'none';
      frontImage.style.display = 'block';
      thumb1.classList.add('active');
      thumb2.classList.remove('active');
      console.log(thumb1);
    } else if (imageNumber === 2) {
      backImage.src = './assets/img/' + product.backImage;
      frontImage.style.display = 'none';
      backImage.style.display = 'block';
      thumb1.classList.remove('active');
      thumb2.classList.add('active');
    }
  }
});

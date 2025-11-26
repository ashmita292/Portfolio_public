// Image Lightbox Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Create lightbox element
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <img src="" alt="">
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  // Add click event to all content images
  const contentImages = document.querySelectorAll('.content img');
  contentImages.forEach(img => {
    img.addEventListener('click', function(e) {
      e.stopPropagation();
      lightboxImg.src = this.src;
      lightboxImg.alt = this.alt;
      lightbox.classList.add('active');
    });
  });

  // Close lightbox when clicking on background or close button
  lightbox.addEventListener('click', function() {
    lightbox.classList.remove('active');
  });

  closeBtn.addEventListener('click', function() {
    lightbox.classList.remove('active');
  });

  // Prevent closing when clicking on the image itself
  lightboxImg.addEventListener('click', function(e) {
    e.stopPropagation();
  });

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
    }
  });
});

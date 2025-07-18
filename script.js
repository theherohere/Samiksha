const video = document.getElementById('intro-video');
const intro = document.getElementById('intro');
const main = document.getElementById('main-content');

video.addEventListener('ended', () => {
  intro.style.transition = 'opacity 1s ease';
  intro.style.opacity = '0';

  setTimeout(() => {
    intro.style.display = 'none';
    main.style.display = 'block';
    document.body.style.overflow = 'auto';
  }, 1000);
});

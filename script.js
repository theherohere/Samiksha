const video = document.getElementById('intro-video');
const intro = document.getElementById('intro');

video.addEventListener('ended', () => {
  intro.style.transition = 'opacity 1s ease';
  intro.style.opacity = '0';

  setTimeout(() => {
    // 👇 Redirect instead of showing main
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = 'why-youre-special.html';
    }, 1000);
  }, 1000); // This delay matches the fade-out
});

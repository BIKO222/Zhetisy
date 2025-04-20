document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
window.addEventListener('scroll', () => {
    document.body.style.backgroundPositionY = `${window.scrollY * 0.3}px`;
});
document.querySelectorAll('.gallery-item').forEach(img => {
    img.addEventListener('click', () => {
      document.getElementById('popup-img').src = img.src;
      document.getElementById('popup').style.display = 'flex';
    });
  });
  
  document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
  });
  
document.addEventListener('DOMContentLoaded', function() {
    var wrapper = document.querySelector('.slides-wrapper');
    var prevBtn = document.querySelector('.prev');
    var nextBtn = document.querySelector('.next');
    var gap     = 10;          // doit correspondre au gap CSS
  
    if (!wrapper || !prevBtn || !nextBtn) {
      console.error('Carousel: éléments manquants');
      return;
    }
  
    // distance = largeur d’image + gap
    function getDist() {
      var img = wrapper.querySelector('img');
      return img ? (img.offsetWidth + gap) : 0;
    }
  
    prevBtn.addEventListener('click', function() {
      wrapper.scrollBy({ left: -getDist(), behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', function() {
      wrapper.scrollBy({ left:  getDist(), behavior: 'smooth' });
    });
  });
(() => {
  const nextSlideBtn = document.querySelector('[data-next-slide]');
  const prevSlideBtn = document.querySelector('[data-prev-slide]');
  const slideSwitcher = document.querySelector('[data-slide-switcher]');

    nextSlideBtn.addEventListener('click', nextSlide);
    prevSlideBtn.addEventListener('click', prevSlide);
    slideSwitcher.addEventListener('click', nextSlide);

    let slideIndex = 1;
    showSlides(slideIndex);

  function nextSlide() {
    showSlides(slideIndex += 1);
  }
    
  function prevSlide() {
    showSlides(slideIndex -= 1);
  }
    
    function showSlides(n) {
      let slides = document.getElementsByClassName("hero__slide");
      let activeSlideMarkers = document.getElementsByClassName("slide");
    
        if (n > slides.length) {
          slideIndex = 1;
        }
        if (n < 1) {
          slideIndex = slides.length;
        }
  
        for (let slide of slides) {
            slide.style.opacity = 0;
        }
        slides[slideIndex - 1].style.opacity = 1;
      
        for (let activeMarker of activeSlideMarkers) {
          activeMarker.classList.remove('active-slide');
        }
        activeSlideMarkers[slideIndex - 1].classList.add('active-slide');
    }

})();
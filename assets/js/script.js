document.querySelectorAll('.navbar-toggler').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('navControl').classList.toggle('opened');
    });
});

const videos = document.querySelectorAll('.VideoContent');
const playButtons = document.querySelectorAll('.VideoPlay');

playButtons.forEach((button, index) => {
  const video = videos[index]; 

  button.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      button.style.display = 'none'; 
    }
  });

  video.addEventListener('click', () => {
    if (!video.paused) {
      video.pause(); 
      button.style.display = 'block'; 
    }
  });

  video.addEventListener('ended', () => {
    button.style.display = 'block'; 
    video.currentTime = 0; 
  });
});

document.addEventListener('DOMContentLoaded', function() {
  function duplicateSlides(times) {
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  const slides = Array.from(swiperWrapper.children);
  
  for (let i = 0; i < times; i++) {
      slides.forEach(slide => {
      const clone = slide.cloneNode(true);
      swiperWrapper.appendChild(clone);
      });
  }
  }

  duplicateSlides(2);

  var swiper = new Swiper(".mySwiper", {
          slidesPerView: 'auto',           
          spaceBetween: 30,                
          loop: true,                       
          loopAdditionalSlides: 3,          
          preloadImages: false,             
          lazy: true,                       
          watchSlidesProgress: true,        
          watchSlidesVisibility: true,      
          centeredSlides: true,                  
      navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
      },
  });
});
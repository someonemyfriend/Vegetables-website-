//Swiper
let swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  let menu = document.querySelector('#burger');
  let navbar = document.querySelector('.navbar');

  menu.onclick = () => {
    navbar.classList.toggle('active');
  }

  window.onscroll = () => {
    navbar.classList.remove('active');
  }
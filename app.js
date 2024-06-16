// let slides=document.querySelectorAll(".slideshowimg");
// let dots=document.querySelectorAll(".dot");
// let slideanimaton=document.querySelector(".slideanimaton");
  

// dots.forEach((dot,idx)=>{
//   dot.addEventListener("click",()=>{
//     // console.log(dot,idx);
//      let tran=idx*slideanimaton.offsetWidth;
//     slides.forEach((slide)=>{
     
//       slide.style.translate= `-${tran}px`;
     
//     })
    
//   })
// })
// function automateClicks() {
//   const dots = document.querySelectorAll('.dot');
//   let currentIndex = 0;

//   function clickNextDot() {
//     const currentDot = dots[currentIndex];
//     currentDot.click();
//     currentIndex = (currentIndex + 1) % dots.length;
//   }

//   setInterval(clickNextDot, 3000);
// }

// document.addEventListener('DOMContentLoaded', () => {
//   automateClicks();
// });
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
AOS.init();
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
// const logo = document.getElementById('brand-logo');
// const logoText = '<p>Realtor.com predicts more sellers will enter the market as buyer competition “remains fierce,” which will fuel strong growth in home sales and price increases. The site is forecasting existing median sales prices to appreciate 2.9% and existing home sales to increase by 6.6%. That growth will mean 16-year highs for sales nationwide.</p>';
// function addingBrandLogos() {
//   for (var i = 0; i <= 1; i++) {
//     logo.innerHTML += logoText;
//   }
// }
// addingBrandLogos();
const affiliatePricing = document.getElementsByClassName('pricing-affiliate');
const pricing = document.getElementsByClassName('pricing-regular');
if (window.location.pathname.length > 1) {
  affiliatePricing[0].style.opacity = 'block';
  pricing[0].style.display = 'none';
} else {
  affiliatePricing[0].style.display = 'none';
  pricing[0].style.display = 'block';
}


  var winWidth = $(window).width();
  
  if(winWidth > 800){
      $('.slide').slick({
          dots: true,
          infinite: true,
          speed: 400,
          slidesToShow: 2,         // बड़े स्क्रीन पर दो स्लाइड दिखाएँ
          adaptiveHeight: true,
          autoplay: true,
          autoplaySpeed: 1100,
          fade: false,
          arrows: true
      });
  } else {
      $('.slide').slick({
          dots: true,
          infinite: true,
          speed: 400,
          slidesToShow: 1,         // छोटे स्क्रीन पर एक स्लाइड दिखाएँ
          adaptiveHeight: true,
          autoplay: true,
          autoplaySpeed: 1100,
          fade: false,
          arrows: true
      });
  }

var overlay = document.querySelector("#overlay");
var menuIcon = document.querySelector("#menuIcon");
var closeIcon = document.querySelector("#closeIcon");
var nav =document.querySelector("nav");
var body = document.querySelector("body");


// header start 

menuIcon.addEventListener("click", function () {
    overlay.style.display = "block";
    nav.classList.toggle("overlaylal");
    body.classList.toggle("overflow");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
});

overlay.addEventListener("click", function () {
    overlay.style.display = "none";
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    nav.classList.toggle("overlaylal");
    body.classList.toggle("overflow")
});

// header end 

// scroll start 
window.addEventListener('scroll', () => {
const header = document.querySelector('#headerMenu');
const topText = document.querySelector('#topp');
if (document.documentElement.scrollTop > 50) {
header.classList.add('sticky');
topText.style.backgroundColor ="white";
} else {
header.classList.remove('sticky');
topText.style.backgroundColor ="";
}
});
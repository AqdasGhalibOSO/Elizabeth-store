jQuery(document).ready(function () {
  jQuery('.slideshow-container').slick({
      dots: false,
      infinite: true, 
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: jQuery('.prev-arrow'),
      nextArrow: jQuery('.next-arrow'),
  });
});
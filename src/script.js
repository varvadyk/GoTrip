$(document).ready(function(){
  $('.your-class').slick({
    centerMode: true,
    arrows: true,
    centerPadding: '60px',
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 2
        }}]
  });
});
$(document).ready(function(){
  $('.banner').slick({
    dots: true,
    arrows: true,
    appendArrows:".banner-nav",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows:false,
        }
      },
      
    ]
  });
  
  
});
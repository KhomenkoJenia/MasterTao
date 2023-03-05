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

const btnBox = document.querySelectorAll('.input-checkbox');

btnBox.forEach(item => {
item.closest('.col-md-6').classList.add('button-group')
})

document.getElementById('fileInput').onchange = function () {
document.getElementById('file-name').innerHTML = this.files[0].name;
};
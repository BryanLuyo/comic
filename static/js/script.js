$('.owl-nuevo').owlCarousel({
  loop:true,
  margin:10, 
  nav:false,
  responsiveClass:true,
  responsive:{
      0:{
          items:2,          
      },
      600:{
          items:4,   
          dots:true       
      },
      1000:{
          items:5,          
          loop:false
      }
  }
})


$('.burger, .overlay').click(function(){
  $('.burger').toggleClass('clicked');
  $('.overlay').toggleClass('show');
  $('nav').toggleClass('show');
  $('body').toggleClass('overflow');
});

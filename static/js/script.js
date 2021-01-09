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



var $nav= $('header');
var $navTop = $nav.offset().top;

var pegarNav= function(){
  var $scrollTop = $(window).scrollTop();
  if($scrollTop >= $navTop){
    $nav.addClass('fixed');   
  }
  else{
    $nav.removeClass('fixed');      
  }
}


$(window).on('scroll',pegarNav);



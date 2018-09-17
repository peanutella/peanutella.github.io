$('body').addClass('loaded');

$(window).on("load", function() {
preloaderFadeOutTime = 500;
function hidePreloader() {
var preloader = $('.loader-wrapper');
preloader.fadeOut(preloaderFadeOutTime);
}
hidePreloader();


});

$(document).ready(function() {
//Preloader

new WOW().init();
$('.full-height').fullHeight();
$('.scrollspy').scrollSpy();
$('.collapse').collapse('hide');
$('#myModal').modal();
$('.js-tilt').tilt({
  glare: true,
  maxGlare: .5,
  scale: 1.2
});

  $('.portfolio-container').magnificPopup({
    delegate: '.portfolio-popup', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    }    
  });

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);


});



// Flexslider
$(function(){
  // Magnific Pop up for Portfolio section
  $('.portfolio-container').magnificPopup({
    delegate: '.portfolio-popup', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    }    
  });

});

jQuery(document).ready(function($){

  if ( $('.iso-box-wrapper').length > 0 ) { 

      var $container  = $('.iso-box-wrapper'), 
        $imgs     = $('.iso-box img');

      $container.imagesLoaded(function () {

        $container.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.iso-box'
        });

        $imgs.load(function(){
          $container.isotope('reLayout');
        })

      });

      //filter items on button click
      $('.filter-wrapper li a').click(function(){

          var $this = $(this), filterValue = $this.attr('data-filter');

      $container.isotope({ 
        filter: filterValue,
        animationOptions: { 
            duration: 750, 
            easing: 'linear', 
            queue: false, 
        }                
      });             

      // don't proceed if already selected 
      if ( $this.hasClass('selected') ) { 
        return false; 
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

        return false;
      }); 

  }

});

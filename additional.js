// Window load event used just in case window height is dependant upon images
$(document).ready(() => {

  $('#vid1').hide();
  $('#vid1').fadeIn(1500);

  $(window).on('scroll', function(){
    let win = $(window).scrollTop();
    if (win > 100) {
      $('.nav').addClass('onScroll');
    } else {
      $('.nav').removeClass('onScroll');
    }
  });

});

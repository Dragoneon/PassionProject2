$(document).ready(() => {

  $('.pres').hide();
  $('.pres').fadeIn(1500);

  $(window).on('scroll', function(){
    let win = $(window).scrollTop();
    if (win > 100) {
      $('.nav').addClass('onScroll');
    } else {
      $('.nav').removeClass('onScroll');
    }
  });

});

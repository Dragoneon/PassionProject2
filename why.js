$(document).ready(() => {

  $(window).on('scroll', function(){
    let win = $(window).scrollTop();
    if (win > 100) {
      $('.nav').addClass('onScroll');
    } else {
      $('.nav').removeClass('onScroll');
    }
  });

});

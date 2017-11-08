$(document).ready(() => {

  $(window).on('scroll', function(){
    let win = $(window).scrollTop();
    if (win > 80) {
      $('.nav').addClass('onScroll');
    } else {
      $('.nav').removeClass('onScroll');
    }
  });

});

$(document).ready(() => {
  $('.nav').hide();

  $('.nav').slideDown(800);

  $(window).on('scroll', function(){
    let win = $(window).scrollTop();
    if (win > 50) {
      $('.nav').addClass('onScroll1');
    } else {
      $('.nav').removeClass('onScroll1');
    }
  });


});

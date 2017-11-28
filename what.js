$(document).ready(() => {

  $('#pres').hide();
  $('.nav').hide();

  $('.nav').slideDown(800);
  $('#pres').fadeIn(2000);

  $(window).on('scroll', function(){
    let win = $(window).scrollTop();
    if (win > 20) {
      $('.nav').addClass('onScroll1');
    } else {
      $('.nav').removeClass('onScroll1');
    }
  });

});

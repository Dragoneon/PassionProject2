$(document).ready(() => {

  $('#pres').hide();
  $('.nav').hide();

  $('.nav').slideDown(1500);
  $('#pres').fadeIn(2000);

    $(window).on('scroll', function(){
      let win = $(window).scrollTop();
      if (win > 100) {
        $('.nav').addClass('onScroll1');
      }
    });

});

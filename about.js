$(document).ready(() => {

  $('.nav').hide();

  $('.nav').slideDown(1500);
  
    $(window).on('scroll', function(){
      let win = $(window).scrollTop();
      if (win > 100) {
        $('.nav').addClass('onScroll1');
      }
    });

});

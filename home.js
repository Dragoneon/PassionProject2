$(document).ready(() => {
  $('.mottoandsaying').hide();
  $('.nav').hide();

  $('.nav').slideDown(3500);
  $('.mottoandsaying').fadeIn(2500);

  $('video').on('ended',function(){
    $('video').fadeOut(1000);
});

  $(window).on('scroll', function(){
    let win = $(window).scrollTop();
    if (win > 100) {
      $('.nav').addClass('onScroll1');
    }
  });

});

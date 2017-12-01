$(document).ready(() => {
  $('.mottoandsaying').hide();
  $('.nav').hide();

  $('.nav').slideDown(2500);
  $('.mottoandsaying').fadeIn(2500);

  var vid = document.getElementById("video-background");
  vid.loop = true;

$(window).on('scroll', function(){
  let win = $(window).scrollTop();
  if (win > 100) {
    $('.nav').addClass('onScroll1');
  } else {
    $('.nav').removeClass('onScroll1');
  }
});

});

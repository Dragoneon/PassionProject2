$(document).ready(() => {
  var vid = document.getElementById("video-background");
  vid.loop = true;
  $('.mottoandsaying').hide();
  $('.nav').hide();

  $('.nav').slideDown(1500);
  $('.mottoandsaying').fadeIn(1500);

$(window).on('scroll', function(){
  let win = $(window).scrollTop();
  if (win > 100) {
    $('.nav').addClass('onScroll1');
  } else {
    $('.nav').removeClass('onScroll1');
  }
});

});

// Window load event used just in case window height is dependant upon images
$(document).ready(() => {
  $('.nav').hide();

  $('.nav').slideDown(1000);

  $(window).on('scroll', function(){
    let win = $(window).scrollTop();
    if (win > 50) {
      $('.nav').addClass('onScroll1');
    } else {
      $('.nav').removeClass('onScroll1');
    }
  });

  $('.secret').on('click', function(){
    alert('You have found a secret! Words of wisdom: BUY BITCOIN!');
  });
});

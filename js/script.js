$(document).ready(function() {
  $('.handle').on('click', function() {
    var sliderWidth = $('.slider').width();
    var handleWidth = $('.handle').outerWidth();
    var currentPosition = parseInt($('.handle').css('left'));
    var newPosition;


    if (currentPosition < sliderWidth - handleWidth) {
      newPosition = sliderWidth - handleWidth; 
      $('body').css('background-color', '#121212');
      $('#mode').text('Dark Mode').css('color', '#ffffff');
    } else {
      newPosition = 0;
      $('body').css('background-color', '#ffffff');
      $('#mode').text('Light Mode').css('color', '#000000');
    }
    
    $('.handle').animate({ left: newPosition }, 500);
  });
});

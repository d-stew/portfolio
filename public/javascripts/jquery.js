$(document).ready(function() {

  console.log('jquery ready');

  $('#projects').hide();
  $('h3').mouseenter(function() {
    $(this).animate({
      height: '+=15px',
      width: '+=15px'
    });
  }

});

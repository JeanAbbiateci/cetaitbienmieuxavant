$(document).ready(function(){
  
  //ajax
  function loadMe(){
    $.get( 'loadMe.html', function(data) {
    $('.content').html(data);});
    $('.load').hide();
  };
  
  //kicks things off
  $('.action').on('click', '.load', function(){
    //starts load animation
    $(this).find('p')
      .html('');
    $(this).addClass('bar');
    //sim load time and run ajax function
    setTimeout(loadMe, 1000);
  });
  
  //restarts demo
  $('.content').on('click', '.reset', function(){
    $('.content').html("");
    $('.load').removeClass('bar')
      .find('p')
      .html('Avant, c&apos;était mieux !');
    $('.load').fadeIn();
  });
  
});
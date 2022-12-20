(function($){
  $(function(){

    $('.sidenav').sidenav();
    // $('.parallax').parallax();
    console.log("Document REady");
    console.log($(window).scrollTop())
    $(window).scroll(function() {
      if($(window).scrollTop() > 100) {
        $('nav').addClass('custom');
        $('nav').removeClass('no-shadow');
        console.log("Ready");
      } else {
        $('nav').removeClass('custom');
        $('nav').addClass('no-shadow');
        console.log("Ready");
      }
    })
  }); // end of document ready
})(jQuery); // end of jQuery name space

function submitContactFrom() {
  console.log("Form Submitted");
}
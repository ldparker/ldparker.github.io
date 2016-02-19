$(document).ready(function () {
  $('nav-tabs').tabs();

  $('.sub-nav a').click(function () {
    $('.sub-nav li a').removeClass('subnav-active');
    $(this).addClass('subnav-active');
  });

});


$(document).ready(main);
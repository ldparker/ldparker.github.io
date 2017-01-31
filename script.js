/*global alert: false, console: false, jQuery: false */
/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint white: true*/
/*jshint strict: false*/


(function () {
    "use strict";

$(document).ready(function() {
    
    /*$('#h1header').fadeIn(500);*/
    
    $('#h1header').delay(900).fadeIn(800);
    $('.socialsa').delay(2000).fadeIn(800);
    $('.arrow').delay(2000).fadeIn(800);
    
    $('.socialsa').hover(function() {
        $(this).addClass('hovered');
    },
    function() {
        $(this).removeClass('hovered');
    });
    
    $('.arrowpos').hover(function() {
        $(this).addClass('hovered');
    },
    function() {
        $(this).removeClass('hovered');
    });
    
    $('.arrowpos').click(function() {
        $('html , body').animate( {
            scrollTop: $('.aboutoutter').offset().top
        }, 1500);
    });
    
    $('#button1, #button2, #button3').click(function() {
        $('html , body').animate( {
            scrollTop: $('.tourblurb').offset().top
        }, 500);
    });
    
    $('#button1').click(function() {
        $('.library').slideToggle(200);
        $('.youtube').hide(200);
        $('.hometown').hide(200);
        
    });
    
    $('#button2').click(function() {
        $('.youtube').slideToggle(200);
        $('.library').hide(200);
        $('.hometown').hide(200);
    });
    
    $('#button3').click(function() {
        $('.hometown').slideToggle(200);
        $('.library').hide(200);
        $('.youtube').hide(200);
    });
    
    $('.socialsaend').hover(function() {
        $(this).addClass('hoveredend');
    },
    function() {
        $(this).removeClass('hoveredend');
    });
    
    
  
});
        
}());




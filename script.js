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
    
    /*Cycling effects begin*/
    
    $('#cyclepic1, .cyclepictext').hover(function() {
        $('#cyclepic1').addClass('cyclehover');
    },
    function() {
        $('#cyclepic1').removeClass('cyclehover');
    });
    
    $('#cyclepic1, .cyclepictext').hover(function() {
        $('.cyclepictext').show();
    },
    function() {
        $('.cyclepictext').hide();
    });
    
    /*$('#cyclepic0, .cyclepictext2').hover(function() {
        $('#cyclepic0').addClass('cyclehover2');
    },
    function() {
        $('#cyclepic0').removeClass('cyclehover2');
    });*/
    
    /*currently dont think I want hover functionality on small 1st photo*/
    /*$('#cyclepic0, .cyclepictext2').hover(function() {
        $('.cyclepictext2').show();
    },
    function() {
        $('.cyclepictext2').hide();
    });*/
    /* end needs work*/
    
    $('.x').hover(function() {
        $('.x').toggleClass('xhover');
    });
    
    $('#cyclepic1, .cyclepictext').click(function() {
        $('.interestsclimbcontainer, .interestsskicontainer, .interestssurfcontainer, .interestscyclecontainer').hide(0);
        $('.morecyclepics, .x').show(0);
    });
    
    $('.x').click(function() {
        $('.morecyclepics, .x').hide(0);
        $('.interestsclimbcontainer, .interestsskicontainer, .interestssurfcontainer, .interestscyclecontainer').show(0);
    });
    
    $('.morecyclepics').hover(function() {
        (this).css({width: "200%", height: "200%"}, 'fast');
    });
    
    /* Cycling effects end*/
    
    
    
    
  
});
        
}());




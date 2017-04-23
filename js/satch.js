$(document).ready(function() {    
    $('header').delay(1200).fadeIn(1200);
    $('main, footer, .banner').delay(2400).fadeIn(1200);
});


$(window).resize(function(){   
    if($(window).width() < 950){
        $('.banner').hide();
    }else{
        $('.banner').fadeIn(1200);
        $('.banner').height($(document).height());   
    }
    
}).trigger("resize");
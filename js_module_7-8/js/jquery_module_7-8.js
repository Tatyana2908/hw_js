$(function(){
    $('.enter').hover(function(){
        $(this).next('.hint').stop().animate({opacity: 'show'},200);
    }, function(){
        $(this).next('.hint').stop().animate({opacity: "hide"}, "fast");
    });

    $('.button').click(function () {
        $('.enter').next('.hint').animate({opacity: 'show'},200);

    });

});





$(function(){
    $('li').click(function(){
        var number = $(this).index();
        $('.content').hide().eq(number).show();
        $(this).toggleClass('active');
        $('li').not(this).removeClass('active').addClass('tab');
    });
});
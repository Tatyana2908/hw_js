$(function(){
    $('.menu  li:has(ul)').hover(function(){
        $(this).find('ul:first').stop().slideDown(400);
    }, function(){
        $(this).find('ul:first').stop().slideUp(200);
    });
    $('.menu li').mouseenter(function () {
        $(this).stop().animate({backgroundColor:"#8ad130"}, 300 );

    });
    $('.menu li').mouseleave(function() {
        $(this).stop().animate({backgroundColor:"#729f15"}, 300 );
    });

        $('.js-select').fancySelect();

    $(".check").checkbox();

});



(function($) {
    $(function() {
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
})(jQuery);



(function($){
    $.fn.mySlider = function(option){
        var defaults = {
            sliderWidth : 306
        };

        var settings = $.extend(defaults, option);

        $('.sliderwrapper').width($('.sliderwrapper').children().size()*settings.sliderWidth);

        $('.next').on('click', function(){
            nextSlider();
        });

        $('.back').click(function(){
            prevSlider();
        });
        function nextSlider(){
            var currentSlider = parseInt($('.sliderwrapper').data('current'));
            currentSlider ++;
            if(currentSlider > $('.sliderwrapper').children().size()-3)
            {
                currentSlider = 0;
            }
            $('.sliderwrapper').animate({left: -currentSlider*settings.sliderWidth},500).data('current',currentSlider);
        }

        function prevSlider(){
            var currentSlider = parseInt($('.sliderwrapper').data('current'));
            currentSlider--;
            if(currentSlider = 0)
            {
                currentSlider = $('.sliderwrapper').children().size();
            }
            $('.sliderwrapper').animate({left: -currentSlider*settings.sliderWidth},500).data('current',currentSlider);
        };
        return this;
    };

 })(jQuery);



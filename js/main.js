//mslider & contents
$(document).ready(function(){
    $('.mslider .flexslider').flexslider({
        slideshowSpeed: 7000,
        directionNav: false,
    });
    $('.contents .flexslider').flexslider({
        slideshowSpeed: 5000,
        directionNav: false,
    });
});

//product
$(document).ready(function(){
    $(window).resize(function(){
        var w = $(window).innerWidth();
        var pw = $('.product a').width();
        
        if(w >= 1024){
            $('.product a').css('padding-top',pw-40);
        }else{
            $('.product a').css('padding-top',0);
        }
    });
    $(window).trigger('resize');
});

/* swiperevent */
$(document).ready(function(){
    var swiper = new Swiper('.swiperevent .swiper-container', {
        scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
            },
        });
});
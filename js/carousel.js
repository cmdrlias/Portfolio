$(document).ready(function() {
    $(".macbook .screen > img:gt(0)").hide();
    $(".imac .screen > img:gt(0)").hide();
    $(".iphone .screen > img:gt(0)").hide();
    $(".carousel .text-wrap > .text:gt(0)").hide();
    
    setInterval(function() { 
        $('.macbook .screen > img:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('.macbook .screen');

        $('.carousel .text-wrap > .text:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('.carousel .text-wrap');
    },  3000);

    setInterval(function() { 
        $('.imac .screen > img:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('.imac .screen');
    },  3000);

    setInterval(function() { 
        $('.iphone .screen > img:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('.iphone .screen');
    },  3000);
});
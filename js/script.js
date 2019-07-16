$(document).ready(function() {
    var back = $('.backend');
    var front = $('.frontend');

    back.css('z-index', '0');
    front.css('z-index', '0');

    var zIndexBack = back.css('z-index');
    var zIndexFront = front.css('z-index');

    // zIndexBack <= zIndexFront ? zIndexBack = zIndexFront + 1 : zIndexBack

    $('.left-half').hover(function() {
        back.css('left', '0');
        front.css('left', '100%');
        back.css('z-index', zIndexBack <= zIndexFront ? zIndexBack = zIndexFront + 1 : zIndexBack);
        $('.backend .desc').css('opacity', '1');
        $('.frontend .desc').css('opacity', '0'); 
    }, function() {
        front.css('left', '50%');
        back.css('left', '-50%');
        back.css('z-index', '0');
        $('.backend .desc').css('opacity', '0');
        zIndexBack = 0;
    });

    // zIndexFront <= zIndexBack ? zIndexFront = zIndexBack + 1 : zIndexFront
    
    $('.right-half').hover(function() {
        front.css('left', '0');
        back.css('left', '-100%');
        front.css('z-index', zIndexFront <= zIndexBack ? zIndexFront = zIndexBack + 1 : zIndexFront);
        $('.frontend .desc').css('opacity', '1');
        $('.backend .desc').css('opacity', '0');
        $('.arrow-down').css('opacity', '0');
    }, function() {
        front.css('left', '50%');
        back.css('left', '-50%');
        back.css('z-index', '0');
        $('.frontend .desc').css('opacity', '0');
        zIndexFront = 0;
    });    
});
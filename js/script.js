$(document).ready(function() {
    back = $('.backend');
    front = $('.frontend');

    back.css('z-index', '0');
    front.css('z-index', '0');

    $('.left-half').hover(function() {
        back.css('left', '0');
        front.css('left', '100%');
        back.css('z-index', '99900');
        $('.backend .desc').css('opacity', '1');
        $('.frontend .desc').css('opacity', '0');
    }, function() {
        front.css('left', '50%');
        back.css('left', '-50%');
        $('.backend .desc').css('opacity', '0');
    });
    
    $('.right-half').hover(function() {
        front.css('left', '0');
        back.css('left', '-100%');
        front.css('z-index', '9999900');
        $('.frontend .desc').css('opacity', '1');
        $('.backend .desc').css('opacity', '0');
    }, function() {
        front.css('left', '50%');
        back.css('left', '-50%');
        $('.frontend .desc').css('opacity', '0');
    });    
});
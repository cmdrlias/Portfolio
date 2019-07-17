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

let index = 0;

$(function() {
    $.scrollify({
        section : ".page",
        after:function(i,panels) {
            var ref = panels[i].attr("data-section-name");
        
            if(ref==="page2") {
                loadProgress(index);
                index++;
            }
            for(var j = 0;j < panels.length;j++) {
                if(j>i) {
        
                //panels[j].find(".moved").removeClass("moved");
                }
            }
        },
    });
});

function loadProgress(load) {
    $('.circle-wrap').css('display', 'block');
    if(load == 0) {
        loadCircle($('.html'), 1);
        loadCircle($('.css'), 1);
        loadCircle($('.javascript'), .9);
        loadCircle($('.mysql'), .7);
        loadCircle($('.java'), .9);
        loadCircle($('.sass'), 1);
        loadCircle($('.jquery'), .9);
        loadCircle($('.xd'), 1);
        loadCircle($('.spring'), .8);
        loadCircle($('.dart'), .4);
        loadCircle($('.typescript'), .7);
        loadCircle($('.csharp'), .5);
        loadCircle($('.angular'), .9);
        loadCircle($('.flutter'), .55);
        loadCircle($('.nodejs'), .66);
        loadCircle($('.dotnet'), .3);
        loadCircle($('.illustrator'), .9);
    }
}

function loadCircle(obj, val) {
    obj.circleProgress({
        value: val,
        size: 100,
        fill: "#8783D1",
        lineCap: 'round',
    });
}
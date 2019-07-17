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
    if(load == 0) {
        $('#html').goalProgress({
            goalAmount: 100,
            currentAmount: 100,
        });
        $('#css').goalProgress({
            goalAmount: 100,
            currentAmount: 100,
        });
        $('#javascript').goalProgress({
            goalAmount: 100,
            currentAmount: 100,
        });
        $('#java').goalProgress({
            goalAmount: 100,
            currentAmount: 100,
        });
        $('#typescript').goalProgress({
            goalAmount: 100,
            currentAmount: 70,
        });
        $('#dart').goalProgress({
            goalAmount: 100,
            currentAmount: 40,
        });
        $('#csharp').goalProgress({
            goalAmount: 100,
            currentAmount: 50,
        });
        $('#spring').goalProgress({
            goalAmount: 100,
            currentAmount: 90,
        });
        $('#sass').goalProgress({
            goalAmount: 100,
            currentAmount: 100,
        });
        $('#jquery').goalProgress({
            goalAmount: 100,
            currentAmount: 100,
        });
        $('#nodejs').goalProgress({
            goalAmount: 100,
            currentAmount: 60,
        });
        $('#angular').goalProgress({
            goalAmount: 100,
            currentAmount: 90,
        });
        $('#flutter').goalProgress({
            goalAmount: 100,
            currentAmount: 50,
        });
        $('#mysql').goalProgress({
            goalAmount: 100,
            currentAmount: 70,
        });
        $('#dotnet').goalProgress({
            goalAmount: 100,
            currentAmount: 50,
        });
        $('#xd').goalProgress({
            goalAmount: 100,
            currentAmount: 100,
        });
        $('#illustrator').goalProgress({
            goalAmount: 100,
            currentAmount: 90,
        });
        $('#photoshop').goalProgress({
            goalAmount: 100,
            currentAmount: 60,
        });
    }
}
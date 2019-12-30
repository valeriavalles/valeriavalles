$(document).ready(function() {
    $('.rote').on('transitionend webkitTransitionEnd MSTransitionEnd', function(e) {
        if (e.originalEvent.propertyName != 'transform') return;
    });


    //Al pasar sobre .gepic animamos la imágen dando un tamaño menor y mostramos el div .negro
    $('.gepic').mouseenter(function(e) {
        $(this).children('.cont-img').children('.item-img').animate({ height: '100%', left: '0', top: '0', width: '100%' }, 150);
        $(this).children('.cont-img').children('div').fadeIn(150);
        $(this).children('.cont-img').children('.negro').css({ "padding-top": "80px", "opacity": 1 });

    }).mouseleave(function(e) {
        $(this).children('.cont-img').children('.item-img').animate({ height: '100%', left: '-18', top: '-20', width: '100%' }, 150);
        $(this).children('.cont-img').children('div').fadeOut(150);
        $(this).children('.cont-img').children('.negro').css({ "padding-top": "150px", "opacity": 0 });

    });
    var thisLink;
    $('.page-scroll a').click(function() {
        thisLink = $(this).attr('href')
        $('html, body').animate({
            scrollTop: $(thisLink).offset().top - 30
        }, 1000);
    })


});
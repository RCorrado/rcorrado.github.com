import { setCSS, checkAnchor, checkScroll, getElements, getHeaders, getScrolling, setScrollTop, showPop, getAttr, getElem, checkWidth, hideElem, blockHTML, checkInterval, calcAge } from './functions.js';

$(document).ready(() => {
    let sc = checkScroll();
    let limits = getElements('section', sc);

    checkInterval();
    calcAge('12/14/1994', '#age');
    calcAge('9/1/2016', '#xp');

    $('a[href*="#"]').click(function (ev) {
        let el = $(this).parents('ul');
        checkAnchor(ev);
        checkWidth(limits, el);
    });
    
    $(window).scroll(() => {
        let sc = checkScroll();
        getHeaders(sc, limits[0]);
        getScrolling('section', sc, limits);
    });

    $('.fa-arrow-circle-up').click(() => setScrollTop('html', 0));

    $('.img-port').click((ev) => {
        let port = getElem('#portfolio');
        let at = getAttr('src', ev.target);
        showPop(at, port);
    });

    $('.close').click(() => {
        hideElem("#pop");
        blockHTML();
    });

    $('.menuBurger').click(function (){
        let displaying = $(this).siblings('ul').css("display");
        blockHTML();
        if (displaying == "flex") {
            $(this).siblings('ul').slideUp().css("display", "none");
        } else {
            sc = checkScroll();
            $(this).siblings('ul').slideDown().css({
                "display": "flex",
                "top": 0
                });
            setScrollTop('html', sc);
        }
    });

    $('ul .fa-arrow-circle-left').click(function () {
        let e = $(this).parents('ul');
        checkWidth(limits, e);
    });

    
});


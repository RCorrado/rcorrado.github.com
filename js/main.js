import { checkAnchor, checkScroll, getElements, getHeaders, getScrolling, setScrollTop, showPop, getAttr, getElem, checkWidth, hideElem, blockHTML, checkInterval } from './functions.js';

$(document).ready(() => {
    let sc = checkScroll();
    let limits = getElements('section', sc);

    checkInterval();

    $('a[href*="#"]').click((ev) => {
        checkAnchor(ev);
        checkWidth();
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

    $('.menuBurger').click(() => {
        $('header nav ul').slideDown().css("display", "flex");
        blockHTML();
        setScrollTop('html', 0);
    });

    $('ul .fa-arrow-circle-left').click(() => {
        checkWidth();
        blockHTML();
    });
});


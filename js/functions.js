function checkAnchor(ev) {
    let targ = ev.target.toString();
    let h;
    ev.preventDefault();
    targ = targ.substr(targ.indexOf('#'));
    if (targ != '#') {
        h = getOffset(targ);
    } else {
        h = 0;
    }
    $('html, body').animate({ scrollTop: h }, 1000);
}

function checkWidth(limits, e="") {
    let w = $(window).width();
    if (w <= 990) {
        if (e != "") {
            $(e).slideUp();
        }
        blockHTML();
        let sc = checkScroll();
        getHeaders(sc, limits[0]);
        getScrolling('section', sc, limits);
    }
}

function checkScroll() {
    let sc = $(window).scrollTop();
    return sc;
}

function getElem(str, e = "") {
    let ar;
    if (e != "") {
        ar = e.querySelectorAll(str);
    } else {
        ar = document.querySelectorAll(str);
    }
    return ar;
}

function getAttr(str, e) {
    let at = $(e).attr(str);
    return at;
}

function setCSS(str, e, at) {
    $(e).css(at, str);
}

function getOffset(e) {
    return $(e).offset().top;
}

function getElements(str) {
    let elem = getElem(str);
    let limits = [];
    elem.forEach(e => limits.push(getOffset(e)));
    return limits;
}

function getHeaders(h, limit) {
    limit = limit/2;
    if (h < (limit)) {
        hideElem('header + nav', 'header > nav');
    } else {
        hideElem('header > nav', 'header + nav');
    }
}

function getScrolling(str, h, limits) {
    let elem = getElem(str);
    for (let i = 0; i < elem.length - 1; i++) {
        if (h >= (limits[i] - 50) && h < limits[i+1]) {
            let e = getAttr('id', elem[i]);
            makeHappen(e);
        } else if (h >= limits[i + 1]) {
            let e = getAttr('id', elem[i + 1]);
            makeHappen(e);
        }
    }
}

function makeHappen(id) {
    switch (id) {
        case 'quiensoy':
            fadeIn(id, 'img');
            slideLeft(id, '#subtitle');
            slideRight(id, '#title');
            break;
        case 'portfolio':
        case 'clientes':
        case 'techs':
            fadeIn(id, 'img');
            break;
        case 'servicios':
            slideLeft(id, 'div');
            break;
    }
}

function fadeIn(id, sonElem = "") {
    if (sonElem != "") {
        $("#" + id).find(sonElem).animate({opacity: '1'}, 1500);
    } else {
        $("#" + id).animate({ opacity: '1' }, 1500);
    }
} 

function slideLeft(id, sonElem = "") {
    if (sonElem != "") {
        $("#" + id).find(sonElem).animate({ left: '0' }, 1500);
    } else {
        $("#" + id).animate({ left: '0' }, 1500);
    }
}

function slideRight(id, sonElem = "") {
    if (sonElem != "") {
        $("#" + id).find(sonElem).animate({ right: '0' }, 1500);
    } else {
        $("#" + id).animate({ right: '0' }, 1500);
    }
}

function hideElem(elemToHide, elemToShow = "") {
    $(elemToHide).hide();
    if (elemToShow != "") {
        $(elemToShow).slideDown();
    }
}

function setScrollTop(e, val) {
    $(e).animate({ scrollTop: val }, 1000);
}

function blockHTML() {
    let ov = $('html').css("overflow-y");
    if (ov == 'visible' || ov == 'scroll') {
        $('html').css("overflow-y", "hidden");
    } else {
        $('html').css("overflow-y", "scroll");
    }
    
}

function showPop(img, elem) {
    let off = getOffset(elem);
    setScrollTop('html', off);
    $('#pop').css("top", off);
    $('#pop img').attr('src', img);
    fadeIn('pop', 'img');
    $('#pop').fadeIn(500);
    blockHTML();
}

function checkInterval() {
    let c = 0;
    let interval = setInterval(() => {
        c++;
        if (c == 3) {
            $('#preCharge').animate({
                left: '-150%',
                opacity: '0'
            }, 1000);
            blockHTML();
            clearInterval(interval);
        }
    }, 1000);
}

function calcAge(d, e) {
    const now = new Date();
    const birth = new Date(d);
    let age = now.getFullYear() - birth.getFullYear();
    if (now.getMonth() - birth.getMonth() < 0 || now.getMonth() - birth.getMonth() == 0 && now.getMonth() < birth.getMonth()) {
        age--;
    }
    $(e).html(age);
}

export { setCSS, calcAge, checkAnchor, checkScroll, getElements, getHeaders, getScrolling, setScrollTop, showPop, getAttr, getElem, hideElem, blockHTML, checkInterval, checkWidth }
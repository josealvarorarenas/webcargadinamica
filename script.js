'use strict'

$(document).ready(() => {
    
    $(window).scroll(() => {

        //get altura total
        let docHeight = $(".text").height();

        //get altura ventana
        let winHeight = $(window).height();

        //calcula el viewport
        let viewport = docHeight - winHeight;

        //get scroll position
        let scrollPos = $(window).scrollTop();

        //get scroll percent
        let scrollPercent = (scrollPos / viewport) * 100;

        //añade el porcentaje a la barra de progreso
        $(".indicator").css("width", scrollPercent + "%");
    });
});
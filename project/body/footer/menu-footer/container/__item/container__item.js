$(document).ready(function() {
    
    $('.container__item').hover(function() {
        $(this).addClass('container__item_hover');
    }, function() {
        $(this).removeClass('container__item_hover');
    });
    
});
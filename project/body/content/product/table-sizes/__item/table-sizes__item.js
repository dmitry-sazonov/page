$(document).ready(function() {
    
    $('.table-sizes__item').hover(function() {
        if (!$(this).hasClass('table-sizes__item_active')) {
            $(this).addClass('table-sizes__item_hover');
        }
    }, function() {
        $(this).removeClass('table-sizes__item_hover');
    });
    
    $('.table-sizes__item').click(function() {
        $('.table-sizes__item').removeClass('table-sizes__item_active');
        $(this).addClass('table-sizes__item_active');  
        var shop = $('.select-shop').get(0);
        $(shop).removeClass('select-shop_hide');   
    });
    
});
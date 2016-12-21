$(document).ready(function() {
        
    $('.table-colors__item').click(function() {
        $('.table-colors__item').removeClass('table-colors__item_active');
        $(this).addClass('table-colors__item_active');
        
        var image = $('.product__image').get('0');
        $(image).attr('src', 'images/products/item-'+$(this).attr('data')+'.png');
        
    });
    
});
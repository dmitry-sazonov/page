$(document).ready(function() {
    
    $('.shop-list__item').click(function() {
        $('.shop-list__item').removeClass('shop-list__item_active');
        $(this).addClass('shop-list__item_active');
        
        var buyer = $('.buyer-data').get(0);
        $(buyer).removeClass('buyer-data_hide');
        
    });
    
    $('.shop-list__item').hover(function() {
    
        if (!$(this).hasClass('shop-list__item_active')) {
            $(this).addClass('shop-list__item_hover');
        }
        
    }, function() {
        
        $(this).removeClass('shop-list__item_hover');
        
    });
    
});
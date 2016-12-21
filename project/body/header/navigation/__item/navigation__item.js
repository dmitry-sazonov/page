$(document).ready(function() {
        
    $('.navigation__item').click(function() {
        $('.navigation__item').removeClass('navigation__item_active');
        $(this).addClass('navigation__item_active');        
    });
    
});
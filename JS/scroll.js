$(document).ready(function(){
    $('.contents__list-item').click(function(){
        var target = $(this).data('target');
        $('html, body').animate({
            scrollTop: $("." + target).offset().top
        }, 1000);
    });
});
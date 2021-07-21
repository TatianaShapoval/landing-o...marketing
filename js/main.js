$(function(){
    var mixer = mixitup('.portfolio__content');

    $('.slider-blog__inner').slick({
        dots: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="images/Shapeleft.svg" alt=""></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="images/Shaperight.svg" alt=""></button>'

    });

});
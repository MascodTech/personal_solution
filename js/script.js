$('.slider').slick({
    dots: true,
    nextArrow: $('.slick-next'),
    prevArrow: $('.slick-prev'),
    appendDots: $('.controls .dots'),
    autoplay:true,
    autoplaySpeed:3000
});

$('.burger').click(function (e) { 
    $(this).toggleClass('active')
    $(this).siblings('.navbar-links').toggleClass('active')
    
});
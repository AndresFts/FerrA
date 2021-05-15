window.addEventListener('load', function(){
    new Glider(document.querySelector('.destacados__lista'), {
        slidesToShow: 'auto',
        itemWidth: 280,
        slidesToScroll: 3,
        dots: '.destacados__indicadores',
        arrows: {
            prev: '.destacados__anterior',
            next: '.destacados__siguiente'
        }
    });
});
window.addEventListener('load', function(){
    new Glider(document.querySelector('.slider__lista'), {
        slidesToShow: 'auto',
        itemWidth: 325,
        slidesToScroll: 3,
        dots: '.slider__indicadores',
        arrows: {
            prev: '.slider__anterior',
            next: '.slider__siguiente'
        }
    });
});

window.onload = function(){
    
}

delPDC = ()=> {
    document.querySelector("body").removeChild(document.getElementById("pantallaDeCarga"));
}

window.onload = ()=>{
    document.getElementById("pantallaDeCarga").classList.add("desaparecer"),
    setTimeout(delPDC, 2000)
};
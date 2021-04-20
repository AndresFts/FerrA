const menu = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav__links");

window.addEventListener('load', function(){
    new Glider(document.querySelector('.destacados__lista'), {
        slidesToShow: 'auto',
        itemWidth: 325,
        slidesToScroll: 3,
        dots: '.destacados__indicadores',
        arrows: {
            prev: '.destacados__anterior',
            next: '.destacados__siguiente'
        }
    });
});

window.addEventListener("load", function(){
    menu.onclick = ()=>{
        links.classList.toggle("active");
        if(links.classList.contains("active")){
            menu.innerHTML = `<i class="far fa-window-close" style="solid" aria-hidden="true"></i>`;
        }
        else{
            menu.innerHTML = `<i class="fa fa-bars" aria-hidden="true"></i>`
        }
    }
});

// delPDC = ()=> {
//     document.querySelector("body").removeChild(document.getElementById("pantallaDeCarga"));
// }

// window.onload = ()=>{
//     document.getElementById("pantallaDeCarga").classList.add("desaparecer"),
//     setTimeout(delPDC, 2000)
// };
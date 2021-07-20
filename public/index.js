const menu = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav__links");

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
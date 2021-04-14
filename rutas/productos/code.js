const search = document.getElementById("search");
const productos = document.querySelectorAll(".producto");
const select = document.querySelector("select");
const opciones = document.querySelectorAll("option");

function filtrarPorTipo(){
    for(i of productos){
        if(select.value == "todos"){
            i.classList.remove("oculto");
        }
        else{
            if(i.classList.contains(select.value)){
                i.classList.remove("oculto");
            }else{
                i.classList.add("oculto");
            }
        }
    }
}
function updateColor(){
    switch (select.value){
        case "tornilleria":
            select.style.background = "#a00";
            break;
        case "pinturas":
            select.style.background = "#070";
            break;
        case "tuberia":
            select.style.background = "#00a";
            break;
        case "herramientas":
            select.style.background = "#608";
            break;
        default:
            select.style.background = "#880";
    }
}

//Filtrar elementos por el buscador

document.addEventListener("keyup", ()=>{
    for(i of productos){
        if(i.textContent.toUpperCase().includes(search.value.toUpperCase())){
            i.classList.remove("oculto2");
        }
        else{
            i.classList.add("oculto2");
        }
    }
});

//Filtrar elementos por el tipo

window.addEventListener("load", ()=>{
    let target = document.querySelector(":target");

    if(target){
        switch (target.id){
            case "tornilleria":
                document.getElementById("tornilleria").selected = "selected";
                select.style.background = "#a00"
                break;
            case "pinturas":
                document.getElementById("pinturas").selected = "selected";
                select.style.background = "#070"
                break;
            case "tuberia":
                document.getElementById("tuberia").selected = "selected";
                select.style.background = "#00a"
                break;
            case "herramientas":
                document.getElementById("herramientas").selected = "selected";
                select.style.background = "#608"
                break;
            default:
                document.getElementById("todos").selected = "selected";
                console.log("holaisos")
                select.style.background = "#880"
        }
    }else{
        select.style.background = "#880"
    }
    filtrarPorTipo()
});

select.onclick = ()=> {
    filtrarPorTipo();
    updateColor("ff0");
};
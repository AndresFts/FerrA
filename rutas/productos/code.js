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
    
    switch (target.id){

        case "tornilleria":
            document.getElementById("tornilleria").selected = "selected";
            break;
        case "pinturas":
            document.getElementById("pinturas").selected = "selected";
            break;
        case "tuberia":
            document.getElementById("tuberia").selected = "selected";
            break;
        case "herramientas":
            document.getElementById("herramientas").selected = "selected";
            break;
        default:
            document.getElementById("todos").selected = "selected";    }
    filtrarPorTipo()
});

select.onclick = ()=> filtrarPorTipo();
const listaImg = document.querySelector("#listaImg");
const container = document.querySelector(".container");
listaImg.addEventListener("click", (event)=>{
    const target = event.target;

    if(target.classList.contains("title")){
        const imagen=target.getAttribute("data-imagen");

        container.style.transition = "background-image 0.5s ease in out";
        container.style.backgroundImage = `url('./img/${imagen}')`;
    }
})

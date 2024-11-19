export default function MenuLogic(){
    const button = document.querySelector(".menu__icon");
    const menu = document.querySelector(".menu__body");
    button.addEventListener("click", function(ev) {
        document.body.classList.toggle("lock");
        button.classList.toggle("active");
        menu.classList.toggle("active");
    });
}

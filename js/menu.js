export default function MenuLogic(){
    var button = document.querySelector(".menu__icon");
    var menu = document.querySelector(".menu__body");
    button.addEventListener("click", function() {
        document.body.classList.toggle("lock");
        button.classList.toggle("active");
        menu.classList.toggle("active");
    });
}

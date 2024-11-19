import ImageAnimation from "./animation.js";
import MenuLogic from "./menu.js";
import LazyLoading from "./lazyloading.js";
/*const button = document.querySelector(".menu__icon");
const menu = document.querySelector(".menu__body");
button.addEventListener("click", function(ev){
  document.body.classList.toggle("lock");
  button.classList.toggle("active");
  menu.classList.toggle("active");
});

const animItems = document.querySelectorAll(".anim__item");
if(animItems.length > 0){
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 5;
      let animItemPoint = window.innerHeight - animItemHeight/animStart;
      if(animItemHeight > window.innerHeight){
        animItemPoint = window.innerHeight - window.innerHeight/animStart;
      }
      if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset+animItemHeight)){
          animItem.classList.add("active");
      }else{
          animItem.classList.remove("active");
      }
      
    }
    function offset(el){
      const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset ||document.documentElement.scrollTop;
      return{top:rect.top+scrollTop, left: rect.left + scrollLeft}
    }
  }
  animOnScroll();
}*/
//implement lazy loading
document.addEventListener("DOMContentLoaded", function () {
  LazyLoading();
});

MenuLogic();
ImageAnimation();

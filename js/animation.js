export default function ImageAnimation() {
  var animItems = document.querySelectorAll(".anim__item");
  if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);
    function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 5;
        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (index % 2) {
          if (
            pageYOffset > animItemOffset - animItemPoint &&
            pageYOffset < animItemOffset + animItemHeight
          ) {
            animItem.classList.add("active");
          } else {
            animItem.classList.remove("active");
          }
        } else {
          setTimeout(() => {
            if (
              pageYOffset > animItemOffset - animItemPoint &&
              pageYOffset < animItemOffset + animItemHeight
            ) {
              animItem.classList.add("active");
            } else {
              animItem.classList.remove("active");
            }
          }, 300);
        }
      }
      function offset(el) {
        const rect = el.getBoundingClientRect(),
          scrollLeft =
            window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
      }
    }
    animOnScroll();
  }
}

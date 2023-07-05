var images = [
  'img/30mai/Igor Bogaciov Photography-102.jpg',
  'img/30mai/Igor Bogaciov Photography-106.jpg',
  'img/30mai/Igor Bogaciov Photography-111.jpg',
  'img/30mai/Igor Bogaciov Photography-115.jpg',
  'img/30mai/Igor Bogaciov Photography-116.jpg',
  'img/30mai/Igor Bogaciov Photography-118.jpg',
  'img/30mai/Igor Bogaciov Photography-122.jpg',
  'img/30mai/Igor Bogaciov Photography-123.jpg',
  'img/30mai/Igor Bogaciov Photography-13.jpg',
  'img/30mai/Igor Bogaciov Photography-135.jpg',
  'img/30mai/Igor Bogaciov Photography-14.jpg',
  'img/30mai/Igor Bogaciov Photography-140.jpg',
  'img/30mai/Igor Bogaciov Photography-141.jpg',
  'img/30mai/Igor Bogaciov Photography-144.jpg',
  'img/30mai/Igor Bogaciov Photography-145.jpg',
  'img/30mai/Igor Bogaciov Photography-147.jpg',
  'img/30mai/Igor Bogaciov Photography-148.jpg',
  'img/30mai/Igor Bogaciov Photography-149.jpg',
  'img/30mai/Igor Bogaciov Photography-151.jpg',
  'img/30mai/Igor Bogaciov Photography-153.jpg',
  'img/30mai/Igor Bogaciov Photography-155.jpg',
  'img/30mai/Igor Bogaciov Photography-156.jpg',
  'img/30mai/Igor Bogaciov Photography-166.jpg',
  'img/30mai/Igor Bogaciov Photography-170.jpg',
  'img/30mai/Igor Bogaciov Photography-173.jpg',
  'img/30mai/Igor Bogaciov Photography-176.jpg',
  'img/30mai/Igor Bogaciov Photography-180.jpg',
  'img/30mai/Igor Bogaciov Photography-182.jpg',
  'img/30mai/Igor Bogaciov Photography-183.jpg',
  'img/30mai/Igor Bogaciov Photography-187.jpg',
  'img/30mai/Igor Bogaciov Photography-188.jpg',
  'img/30mai/Igor Bogaciov Photography-190.jpg',
  'img/30mai/Igor Bogaciov Photography-193.jpg',
  'img/30mai/Igor Bogaciov Photography-195.jpg',
  'img/30mai/Igor Bogaciov Photography-196.jpg',
  'img/30mai/Igor Bogaciov Photography-197.jpg',
  'img/30mai/Igor Bogaciov Photography-199.jpg',
  'img/30mai/Igor Bogaciov Photography-209.jpg',
  'img/30mai/Igor Bogaciov Photography-28.jpg',
  'img/30mai/Igor Bogaciov Photography-31.jpg',
  'img/30mai/Igor Bogaciov Photography-33.jpg',
  'img/30mai/Igor Bogaciov Photography-34.jpg',
  'img/30mai/Igor Bogaciov Photography-35.jpg',
  'img/30mai/Igor Bogaciov Photography-37.jpg',
  'img/30mai/Igor Bogaciov Photography-38.jpg',
  'img/30mai/Igor Bogaciov Photography-41.jpg',
  'img/30mai/Igor Bogaciov Photography-43.jpg',
  'img/30mai/Igor Bogaciov Photography-46.jpg',
  'img/30mai/Igor Bogaciov Photography-49.jpg',
  'img/30mai/Igor Bogaciov Photography-5.jpg',
  'img/30mai/Igor Bogaciov Photography-55.jpg',
  'img/30mai/Igor Bogaciov Photography-57.jpg',
  'img/30mai/Igor Bogaciov Photography-6.jpg',
  'img/30mai/Igor Bogaciov Photography-61.jpg',
  'img/30mai/Igor Bogaciov Photography-62.jpg',
  'img/30mai/Igor Bogaciov Photography-63.jpg',
  'img/30mai/Igor Bogaciov Photography-65.jpg',
  'img/30mai/Igor Bogaciov Photography-66.jpg',
  'img/30mai/Igor Bogaciov Photography-77.jpg',
  'img/30mai/Igor Bogaciov Photography-81.jpg',
  'img/30mai/Igor Bogaciov Photography-83.jpg',
  'img/30mai/Igor Bogaciov Photography-85.jpg',
  'img/30mai/Igor Bogaciov Photography-88.jpg',
  'img/30mai/Igor Bogaciov Photography-91.jpg',
  'img/30mai/Igor Bogaciov Photography-93.jpg',
  'img/30mai/Igor Bogaciov Photography-94.jpg',
  'img/30mai/Igor Bogaciov Photography-99.jpg',
  'img/30mai/Igor Bogaciov Photography.jpg',
      ]; 
    
    var imageGallery = document.querySelector('.gallery');
    
    function displayImages() {
      for (var i = 0; i < images.length; i++) {
        var image = document.createElement('img');
        image.classList.add("anim__item");
        image.src = images[i]; 
        image.alt = 'Изображение';
        imageGallery.appendChild(image);
      }
    }
    
    displayImages();
    const button = document.querySelector(".menu__icon");
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
    
          if(index%2){
            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset+animItemHeight)){
              animItem.classList.add("active");
            }else{
              animItem.classList.remove("active");
            }
          }else{
            setTimeout(() => {
              if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset+animItemHeight)){
                animItem.classList.add("active");
              }else{
                animItem.classList.remove("active");
              }
            }, 300);
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
    }
    
export default function LazyLoading() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  console.log("lazy loading called");
  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (entries, _) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry);
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }
}

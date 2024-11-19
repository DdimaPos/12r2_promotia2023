export default function InsertImages(image_arr) {
  var imageGallery = document.querySelector(".gallery");
    console.log("gallery tag selected");
  for (var i = 0; i < image_arr.length; i++) {
    var image = document.createElement("img");
    image.classList.add("anim__item");
    image.classList.add("lazy");
    image.src =
      "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg";
    image.setAttribute("data-src", image_arr[i]);
    image.alt = "Image";
    imageGallery.appendChild(image);
  }

    console.log("all images appended");
}

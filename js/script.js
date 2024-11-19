import ImageAnimation from "./animation.js";
import MenuLogic from "./menu.js";
import LazyLoading from "./lazyloading.js";
import InsertImages from "./insertimages.js";
var images = [
  "img/fotosesie/image-113.jpg",
  "img/fotosesie/image-7.jpg",
  "img/fotosesie/image-114.jpg",
  "img/fotosesie/image-124.jpg",
  "img/fotosesie/image-134.jpg",
  "img/fotosesie/image-56.jpg",
  "img/fotosesie/image-138.jpg",
  "img/fotosesie/image-139.jpg",
  "img/fotosesie/image-149.jpg",
  "img/fotosesie/image-151.jpg",
  "img/fotosesie/image-156.jpg",
  "img/fotosesie/image-159.jpg",
  "img/fotosesie/image-164.jpg",
  "img/fotosesie/image-168.jpg",
  "img/fotosesie/image-234.jpg",
  "img/fotosesie/image-238.jpg",
  "img/fotosesie/image-109.jpg",
  "img/fotosesie/image-25.jpg",
  "img/fotosesie/image-251.jpg",
  "img/fotosesie/image-259.jpg",
  "img/fotosesie/image-272.jpg",
  "img/fotosesie/image-274.jpg",
  "img/fotosesie/image-275.jpg",
  "img/fotosesie/image-281.jpg",
  "img/fotosesie/image-285.jpg",
  "img/fotosesie/image-286.jpg",
  "img/fotosesie/image-297.jpg",
  "img/fotosesie/image-300.jpg",
  "img/fotosesie/image-302.jpg",
  "img/fotosesie/image-304.jpg",
  "img/fotosesie/image-309.jpg",
  "img/fotosesie/image-323.jpg",
  "img/fotosesie/image-165.jpg",
  "img/fotosesie/image-178.jpg",
  "img/fotosesie/image-187.jpg",
  "img/fotosesie/image-190.jpg",
  "img/fotosesie/image-217.jpg",
  "img/fotosesie/image-329.jpg",
  "img/fotosesie/image-332.jpg",
  "img/fotosesie/image-350.jpg",
  "img/fotosesie/image-352-101.jpg",
  "img/fotosesie/image-352-108.jpg",
  "img/fotosesie/image-352-110.jpg",
  "img/fotosesie/image-352-111.jpg",
  "img/fotosesie/image-352-114.jpg",
  "img/fotosesie/image-352-120.jpg",
  "img/fotosesie/image-352-128.jpg",
  "img/fotosesie/image-352-14.jpg",
  "img/fotosesie/image-352-146.jpg",
  "img/fotosesie/image-352-147.jpg",
  "img/fotosesie/image-352-149.jpg",
  "img/fotosesie/image-352-150.jpg",
  "img/fotosesie/image-352-151.jpg",
  "img/fotosesie/image-352-153.jpg",
  "img/fotosesie/image-352-155.jpg",
  "img/fotosesie/image-352-156.jpg",
  "img/fotosesie/image-352-161.jpg",
  "img/fotosesie/IMG_1119.JPG",
  "img/fotosesie/image-352-163.jpg",
  "img/fotosesie/image-352-169.jpg",
  "img/fotosesie/image-352-170.jpg",
  "img/fotosesie/image-352-174.jpg",
  "img/fotosesie/image-352-177.jpg",
  "img/fotosesie/image-352-179.jpg",
  "img/fotosesie/image-352-183.jpg",
  "img/fotosesie/image-352-191.jpg",
  "img/fotosesie/image-352-203.jpg",
  "img/fotosesie/image-352-207.jpg",
  "img/fotosesie/image-352-209.jpg",
  "img/fotosesie/image-352-210.jpg",
  "img/fotosesie/image-352-214.jpg",
  "img/fotosesie/image-352-216.jpg",
  "img/fotosesie/image-352-217.jpg",
  "img/fotosesie/image-352-219.jpg",
  "img/fotosesie/image-352-227.jpg",
  "img/fotosesie/image-352-230.jpg",
  "img/fotosesie/image-352-233.jpg",
  "img/fotosesie/image-352-243.jpg",
  "img/fotosesie/image-352-246.jpg",
  "img/fotosesie/image-352-252.jpg",
  "img/fotosesie/image-352-259.jpg",
  "img/fotosesie/image-352-261.jpg",
  "img/fotosesie/image-352-266.jpg",
  "img/fotosesie/image-352-268.jpg",
  "img/fotosesie/image-352-270.jpg",
  "img/fotosesie/image-352-273.jpg",
  "img/fotosesie/image-352-276.jpg",
  "img/fotosesie/image-352-279.jpg",
  "img/fotosesie/image-352-28.jpg",
  "img/fotosesie/image-352-281.jpg",
  "img/fotosesie/image-352-292.jpg",
  "img/fotosesie/image-352-3.jpg",
  "img/fotosesie/image-352-4.jpg",
  "img/fotosesie/image-352-42.jpg",
  "img/fotosesie/image-352-46.jpg",
  "img/fotosesie/image-352-50.jpg",
  "img/fotosesie/image-352-51.jpg",
  "img/fotosesie/image-352-52.jpg",
  "img/fotosesie/image-352-6.jpg",
  "img/fotosesie/image-352-63.jpg",
  "img/fotosesie/image-352-71.jpg",
  "img/fotosesie/image-352-84.jpg",
  "img/fotosesie/image-352-87.jpg",
  "img/fotosesie/image-352-89.jpg",
  "img/fotosesie/image-352-97.jpg",
  "img/fotosesie/image-352.jpg",
  "img/fotosesie/image-58.jpg",
  "img/fotosesie/image-80.jpg",
  "img/fotosesie/image-89.jpg",
  "img/fotosesie/image-96.jpg",
];

//populate the dom with the images
//<img class="anim__item" src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg" data-src="actual.img" alt="Image">
//implement lazy loading
InsertImages(images)
document.addEventListener("DOMContentLoaded",  LazyLoading);

MenuLogic();
ImageAnimation();

import ImageAnimation from "./animation.js";
import MenuLogic from "./menu.js";
import LazyLoading from "./lazyloading.js";
import InsertImages from "./insertimages.js";
var images = [
  "img/bal/1.jpg",
  "img/bal/2.jpg",
  "img/bal/4.jpg",
  "img/bal/www.ionciorici.com-1052.jpg",
  "img/bal/www.ionciorici.com-1054.jpg",
  "img/bal/www.ionciorici.com-1207.jpg",
  "img/bal/www.ionciorici.com-1220.jpg",
  "img/bal/www.ionciorici.com-1221.jpg",
  "img/bal/www.ionciorici.com-1222.jpg",
  "img/bal/www.ionciorici.com-1227.jpg",
  "img/bal/www.ionciorici.com-1228.jpg",
  "img/bal/www.ionciorici.com-1244.jpg",
  "img/bal/www.ionciorici.com-1245.jpg",
  "img/bal/www.ionciorici.com-1255.jpg",
  "img/bal/www.ionciorici.com-1259.jpg",
  "img/bal/www.ionciorici.com-1260.jpg",
  "img/bal/www.ionciorici.com-1263.jpg",
  "img/bal/www.ionciorici.com-1265.jpg",
  "img/bal/www.ionciorici.com-1272.jpg",
  "img/bal/www.ionciorici.com-1292.jpg",
  "img/bal/www.ionciorici.com-1400.jpg",
  "img/bal/www.ionciorici.com-1403.jpg",
  "img/bal/www.ionciorici.com-1404.jpg",
  "img/bal/www.ionciorici.com-1406.jpg",
  "img/bal/www.ionciorici.com-1407.jpg",
  "img/bal/www.ionciorici.com-1408.jpg",
  "img/bal/www.ionciorici.com-388.jpg",
  "img/bal/www.ionciorici.com-389.jpg",
  "img/bal/www.ionciorici.com-392.jpg",
  "img/bal/www.ionciorici.com-394.jpg",
  "img/bal/www.ionciorici.com-398.jpg",
  "img/bal/www.ionciorici.com-401.jpg",
  "img/bal/www.ionciorici.com-403.jpg",
  "img/bal/www.ionciorici.com-428.jpg",
  "img/bal/www.ionciorici.com-433.jpg",
  "img/bal/www.ionciorici.com-438.jpg",
  "img/bal/www.ionciorici.com-452.jpg",
  "img/bal/www.ionciorici.com-459.jpg",
  "img/bal/www.ionciorici.com-493.jpg",
  "img/bal/www.ionciorici.com-500.jpg",
  "img/bal/www.ionciorici.com-508.jpg",
  "img/bal/www.ionciorici.com-531.jpg",
  "img/bal/www.ionciorici.com-56.jpg",
  "img/bal/www.ionciorici.com-586.jpg",
  "img/bal/www.ionciorici.com-608.jpg",
  "img/bal/www.ionciorici.com-619.jpg",
  "img/bal/www.ionciorici.com-622.jpg",
  "img/bal/www.ionciorici.com-625.jpg",
  "img/bal/www.ionciorici.com-627.jpg",
  "img/bal/www.ionciorici.com-639.jpg",
  "img/bal/www.ionciorici.com-641.jpg",
  "img/bal/www.ionciorici.com-654.jpg",
  "img/bal/www.ionciorici.com-655.jpg",
  "img/bal/www.ionciorici.com-664.jpg",
  "img/bal/www.ionciorici.com-667.jpg",
  "img/bal/www.ionciorici.com-668.jpg",
  "img/bal/www.ionciorici.com-675.jpg",
  "img/bal/www.ionciorici.com-678.jpg",
  "img/bal/www.ionciorici.com-681.jpg",
  "img/bal/www.ionciorici.com-696.jpg",
  "img/bal/www.ionciorici.com-698.jpg",
  "img/bal/www.ionciorici.com-701.jpg",
  "img/bal/www.ionciorici.com-705.jpg",
  "img/bal/www.ionciorici.com-708.jpg",
  "img/bal/www.ionciorici.com-709.jpg",
  "img/bal/www.ionciorici.com-767.jpg",
  "img/bal/www.ionciorici.com-770.jpg",
  "img/bal/www.ionciorici.com-773.jpg",
  "img/bal/www.ionciorici.com-784.jpg",
  "img/bal/www.ionciorici.com-786.jpg",
  "img/bal/www.ionciorici.com-858.jpg",
  "img/bal/www.ionciorici.com-861.jpg",
  "img/bal/www.ionciorici.com-867.jpg",
  "img/bal/www.ionciorici.com-884.jpg",
  "img/bal/www.ionciorici.com-908.jpg",
  "img/bal/www.ionciorici.com-909.jpg",
];
//populate DOM with images
InsertImages(images);
//implement lazy loading
document.addEventListener("DOMContentLoaded",LazyLoading);

MenuLogic();
ImageAnimation();

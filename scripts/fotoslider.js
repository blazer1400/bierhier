var image = document.getElementById("image");
var left = document.getElementById("arrowleft");
var right = document.getElementById("arrowright");
var array = ["img/slider1.jpg", "img/slider2.png", "img/slider3.jpg", "img/slider4.jpg"];
var count = 0;

left.addEventListener("click", function () {
    count--;
    if (count < 0) {
        count = array.length - 1;
    }
    image.src = array[count];
})
right.addEventListener("click", function () {
    count++;
    if (count >= array.length) {
        count = 0;
    }
    image.src = array[count];
})
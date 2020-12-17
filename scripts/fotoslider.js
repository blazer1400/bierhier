var image = document.getElementById("image");
var left = document.getElementById("arrowleft");
var right = document.getElementById("arrowright");
var array = ["img/slideshow1.png", "img/slideshow2.png", "img/slideshow3.png"];
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
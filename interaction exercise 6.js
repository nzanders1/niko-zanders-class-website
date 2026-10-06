const randomImage = document.querySelector("#random-image");
const randomizeButton = document.querySelector("#randomize-button");

const images = [
    "images/Darkstalkers-3.jpg",
    "images/Final-Fight.jpg",
    "images/Kof-94.webp",
    "images/mvc2.jpg",
    "images/tmnt.jpeg",
    "images/hokuto.jpg",
    "images/street-fighter-2.jpg",
    "images/jojo.webp",

];

function changeImage() {
    const randomNumber = Math.floor(Math.random() * images.length);
    randomImage.src = images[randomNumber];
}

randomizeButton.addEventListener("click", changeImage);
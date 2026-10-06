const randomImage = document.querySelector("#random-image");
const randomizeButton = document.querySelector("#randomize-button");

const images = [
    "images/darkstalkers-3.jpg",
    "images/Final-Fight.jpg",
    "images/Kof-94.webp",
    "images/mvc2.jpg",
    "images/tmnt.jpeg",
    "images/hokuto.jpg",
    "images/street-fighter-2.jpg",
    "images/jojo.webp",
    "images/castlevania-rob.jpg",
    "images/contra-3.webp",
    "images/cvs1.webp",
    "images/cvs2.avif",
    "images/cyberbots.webp",
    "images/killer-instinct.avif",
    "images/kof-00.jpg",
    "images/kof-xv.jpg",
    "images/mk3.webp",
    "images/parodius.png",
    "images/castlevania-sotn.jpg",
    "images/battletoads.webp",
    "images/captain-commando.webp",
    "images/mvc.jpg",
    "images/megaman-x.webp",
    "images/avg2.jpg",
    "images/Variable-Geo.webp",
    "images/tekken-3.avif",
    "images/tekken-7.jpg",
    "images/doa-3.jpg",


];

function changeImage() {
    const randomNumber = Math.floor(Math.random() * images.length);
    randomImage.src = images[randomNumber];
}

randomizeButton.addEventListener("click", changeImage);
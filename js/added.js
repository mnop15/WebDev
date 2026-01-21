const bg = document.querySelector(".parallax-bg");
const slideBgs = [
    "",                     
    "img/images.jpeg",
    "img/images.jpeg",
    "img/images.jpeg",
    "img/images.jpeg"
];
bg.style.backgroundImage = "url(img/images.jpeg)";
document.querySelectorAll("nav a").forEach((link, i) => {
    link.addEventListener("click", () => {
        if(slideBgs[i]){
            bg.style.backgroundImage = `url(${slideBgs[i]})`;
        }
    });
});
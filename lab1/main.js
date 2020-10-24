var images = [];
var nazwa = [];
images[0] = "https://img.icons8.com/color/144/000000/bootstrap.png";
images[1] = "https://img.icons8.com/color/144/000000/html-5.png";
images[2] = "https://img.icons8.com/color/144/000000/javascript.png";
images[3] = "https://img.icons8.com/color/144/000000/css3.png";
nazwa[0] = "Bootstrap";
nazwa[1] = "HTML5";
nazwa[2] = "JavaScript";
nazwa[3] = "CSS3";
for (var i = 0; i < 4; i++) {
    const el = document.createElement("span");
    const el2 = document.createElement("span");
    el2.style.setProperty("position", "absolute");
    el2.style.setProperty("left", "50%");
    el2.style.setProperty("color", "white")
    el2.style.setProperty("transform", "translate(-50%, -50%)");
    el2.style.setProperty("top", "0px");
    el2.innerText = nazwa[i];
    el.style.setProperty("position", "relative");
    const span = document.querySelector(".textContainer"); //do tego elementu wstawię nowy element
    el.innerHTML = '<img src="' + images[i] + '">';
    el.appendChild(el2);
    span.appendChild(el);
}
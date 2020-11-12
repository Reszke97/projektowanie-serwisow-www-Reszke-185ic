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
const div = document.createElement("div");
div.setAttribute("class", "spanDiv");
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
    el.setAttribute("class", "spanImg");
    el.innerHTML = '<img src="' + images[i] + '">';
    el.appendChild(el2);
    div.appendChild(el);
}
const span = document.querySelector(".textContainer"); //do tego elementu wstawię nowy element
span.appendChild(div);

/*po kliknięciu na div zmiana wyglądu czcionki oraz pogrubienie */
var aboutDiv = document.querySelector(".textContainer");
aboutDiv.onclick = function() {
    if (aboutDiv.style.fontStyle == '') {
        aboutDiv.style.fontStyle = "italic";
        aboutDiv.className = 'font-weight-bold textContainer'
    } else {
        aboutDiv.style.fontStyle = '';
        aboutDiv.className = 'textContainer';
    }
}

/*po najechaniu na span w divie zmienia się jego kolor */
document.querySelector(".spanDiv").addEventListener("mouseover",
    function(event) {
        if (!event.target.matches('span')) return;
        event.target.style.color = "orange";
    }
);

/*po odjecachniu ze spany myszka kolor wraca do poprzedniego stanu */
document.querySelector(".spanDiv").addEventListener("mouseout",
    function(event) {
        event.target.style.color = "";
    }
);
function reset() {
    var elements = document.getElementsByClassName("navbar-toggler");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].style.backgroundColor == "rgb(100, 100, 100)") {
            elements[i].style.backgroundColor = '';
        } else {
            elements[i].style.backgroundColor = 'rgb(100, 100, 100)';
        }
    }
}
var inputText = document.querySelector(".nadawca");

/*stworzenie nowego input boxa*/
var newInputText = document.createElement("input");
newInputText.setAttribute('type', 'text');
newInputText.setAttribute('value', 'Zmień imię nadawcy');
newInputText.setAttribute('class', 'inputSender')
newInputText.style.setProperty('padding', '2px 0px 2px 0')
inputText.appendChild(newInputText);

/* stworzenie nowego buttona oraz dodanie funkcji on click, która przypisuje tekst*/
var buttonChangeText = document.createElement("button");
buttonChangeText.onclick = function() {
    var sender = document.querySelector(".boldParagraph");
    sender.innerText = document.querySelector(".inputSender").value;
};
buttonChangeText.innerText = "Zmień";
buttonChangeText.setAttribute('class', 'btn btn-info');
inputText.appendChild(buttonChangeText);

/*ustawienie daty i godziny w liście na obecną*/
var divPlaceDate = document.querySelector(".miejscowosc span");
var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + '\n' + today.getHours() + ':' + today.getMinutes();
divPlaceDate.innerText = 'Wejherowo \n' + date;

var divClick = document.querySelector(".listContent");
/*Po kliknięciu na div z tekstem zostanie zmieniony kolor oraz rozmair czcionki*/
divClick.onclick = function() {
    var paragraf = document.querySelectorAll(" .listContent p");
    for (var i = 0; i < paragraf.length; i++) {
        if (paragraf[i].className == '') {
            paragraf[i].style.fontSize = '2rem';
            paragraf[i].className = 'text-success'
        } else {
            paragraf[i].style.fontSize = '1rem';
            paragraf[i].className = '';
        }
    }
}

//stworzenie textArea a w nim event mouse move, który zapisuje wspolrzedne myszki do textArea
var coordinates = document.createElement("textarea");
coordinates.style.setProperty("width", "350px");
coordinates.style.setProperty("display", "block");
document.querySelector(".list").appendChild(coordinates);

/*dodanie event handlera*/
document.querySelector(".list").addEventListener('mousemove', test);

var removeEvent = document.createElement("button");
removeEvent.setAttribute("class", "btn btn-warning");
removeEvent.innerText = "usun listener";
document.querySelector(".list").appendChild(removeEvent);

/*funckja usuwająca event Listener*/
removeEvent.onclick = function() {
    document.querySelector(".list").removeEventListener('mousemove', test);
}

/*stworzenie event handlera przyjmuje Event e*/
function test(e) {
    var x = e.pageX;
    var y = e.pageY;
    document.querySelector(".list textarea").value = 'Współrzędna X = ' + x + '   Współrzędna Y = ' + y;
}
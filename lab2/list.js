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
function zliczIloscZnakow(jakisTekst) {
    console.info('podany string:\n' + jakisTekst + '\n' + 'ilosc znakow = ' + jakisTekst.length)
}

var jakisTekst = 'tescik test'

var jakasTablica = [];
for (var i = 0; i < 30; i++) {
    jakasTablica[i] = i + 2;
}

function zsumujTablice(jakasTablica) {
    var suma = 0;
    for (var j = 0; j < jakasTablica.length; j++) {
        suma = suma + jakasTablica[j];
    }
    console.info('tablica:\n    ' + jakasTablica + '\n' + 'suma=' + suma);
}

function mixChars(jakisTekst) {
    var input = jakisTekst;
    var temp = '';
    if ((typeof(jakisTekst) == "string")) {
        for (var i = 0; i < jakisTekst.length; i++) {
            if (i % 2 == 0) {
                if (jakisTekst[i] == jakisTekst[i].toLowerCase()) {
                    temp += jakisTekst.substring(i, i + 1).toUpperCase();
                } else {
                    temp += jakisTekst.substring(i, i + 1).toLowerCase();
                }
            } else {
                temp += jakisTekst.substring(i, i + 1);
            }
        }
        jakisTekst = temp;
        console.info("przed zmiana: " + input + "\n" + "po zmianie: " + jakisTekst)
    } else {
        console.info("brak stringa")
    }
}

function multiply(number1, nubmer2) {
    if (typeof(number1) == "number" && typeof(nubmer2) == "number") {
        return (console.info(nubmer2 + '*' + number1 + ' = ' + nubmer2 * number1))
    } else {
        return (false);
    }
}

var miesiac = "LuTy";
var name = "Marcin";

function month(name, month) {
    var string;
    month = month.toLowerCase();
    if (month == 'grudzien' || month == 'styczen' || month == 'luty') {
        return (console.info(string = name + ' jezdzi na sankach'));
    } else if (month == 'marzec' || month == ' kwiecien' || month == 'maj') {
        return (console.info(string = name + ' Ala chodzi po kaluzach'));
    } else if (month == 'czerwiec' || month == 'lipiec' || month == 'sierpien') {
        return (console.info(string = name + ' Ala sie opala'));
    } else if (month == 'wrzesien' || month == 'pazdziernik' || month == 'listopad') {
        return (console.info(string = name + ' Ala zbiera liscie'));
    } else {
        return (console.info(string = name + ' uczy się JS'));
    }
}

const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
var char = '|';

function sortAlphabetical(string, char) {
    var beforeSort = string;
    var namesArray = [];
    namesArray = string.split(char);
    namesArray.sort();
    string = namesArray.join(char);
    return (console.info('nieposortowane:\n' + beforeSort + '\nPosortowane:\n' + string));
}

var namesArray = ["Ania", "Marcin", "Bartek", "Piotr"];

function arrayToUpper(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
    }
    return (console.info('imiona z duzej:\n'), console.info(arr));
}

function arrayToMixed(arr) {
    var temp2 = '';
    for (var i = 0; i < arr.length; i++) {
        temp2 = arr[i];
        var temp = '';
        for (var j = 0; j < temp2.length; j++) {
            if (j % 2 == 0 && j != 0) {
                if (temp2[j] == temp2[j].toLowerCase()) {
                    temp += temp2.substring(j, j + 1).toUpperCase();
                } else {
                    temp += temp2.substring(j, j + 1).toLowerCase();
                }
            } else {
                temp += temp2.substring(j, j + 1);
            }
        }
        arr[i] = temp;
    }
    return (console.info('zmiksowane imiona:\n'), console.info(arr));
}

femaleName = "Paulina";

function checkFemale(name) {
    name = name.toLowerCase();
    if (name[name.length - 1] == 'a') {
        return (true);
    } else {
        return (false);
    }
}

const users = [
    "Ania Nowak",
    "Piotr Kowalski",
    "Bartek Kosecki",
    "Natalia Nowak",
    "Weronika Piotrowska",
    "Agata Beatczak",
    "Tomasz Nowak",
    "Mateusz Kowalski",
    "Marcin Kotecki",
    "Betata Lecka",
    "Katarzyna Melecka"
]

function countWomanInTable(arr) {
    var imieNazwisko = [];
    var imie;
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        imieNazwisko = arr[i].split(' ');
        imie = imieNazwisko[0];
        if (checkFemale(imie)) {
            count++;
        }
    }
    return (console.info('liczba kobiet to:\n' + count));
}

window.onload = function() {
    zliczIloscZnakow(jakisTekst);
    zsumujTablice(jakasTablica);
    mixChars(jakisTekst);
    multiply(2, 3);
    month(name, miesiac);
    sortAlphabetical(str, char);
    arrayToMixed(namesArray);
    arrayToUpper(namesArray);
    checkFemale(name);
    checkFemale(femaleName);
    countWomanInTable(users);
    update();
    update();
}


var snakeBody = [{ x: 10, y: 11 },
    { x: 11, y: 11 },
    { x: 12, y: 11 }
]; //zadeklarowanie tablicy ze snake'iem na srodku diva (11 kratka)
function update() {
    for (var i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {...snakeBody[i] };
        console.info(snakeBody[i + 1]);
    }
    console.info(snakeBody);
    snakeBody[0].x += 1;
}
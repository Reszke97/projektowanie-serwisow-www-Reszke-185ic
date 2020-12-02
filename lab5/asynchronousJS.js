import {
    sum,
    createNewObject,
    multiplyJsonValues,
    appendJsonStrings,
    addAsync,
    asyncCreateObject,
    dodawanieAJAX,
    createObjectAJAX,
    divisionAxios,
    createAxiosObject,
    exponentiationFetch,
    createFetchObject
} from './asynchronousJSFunctions.js';

let liczbaGodzinPracyWMiesiacu, wiek, rokWyprodukowaniaSamochoduSluzbowego, rokWyprodukowaniaSamochoduPrywatnego;
let markaSamochoduSluzbowego, markaSamochoduPrywatnego, wynagrodzenieNetto, wynagrodzenieBrutto, imie, specjalnosc, title, body;
var jsonNamesCopy, zawod, id, userId, suma;

/*wczytanie obiektów JSON za pomocą metody .getJSON*/
$(document).ready(
    function() {
        $.getJSON("./mojObiektJSON.json", hello);
    }
);

/*Utworzenie zmiennej przechowującej adres url API*/
var url = 'https://jsonplaceholder.typicode.com/posts';

/*zadanie1*/
function hello(data) {
    imie = data.imie;
    wynagrodzenieBrutto = data.zawod.informatyk.wynagrodzenie.brutto;
    wynagrodzenieNetto = data.zawod.informatyk.wynagrodzenie.netto;
    markaSamochoduPrywatnego = data.pojazd.samochod.prywatny.marka;
    markaSamochoduSluzbowego = data.pojazd.samochod.sluzbowy.marka;
    specjalnosc = data.zawod.informatyk.specjalnosc;

    /*pobranie wszystkich nazw z pliku JSON*/
    jsonNamesCopy = Object.keys(data.zawod);
    zawod = jsonNamesCopy[0];

    liczbaGodzinPracyWMiesiacu = data.zawod.informatyk.liczbaGodzinPracyWMiesiacu;
    wiek = data.wiek;
    rokWyprodukowaniaSamochoduSluzbowego = data.pojazd.samochod.sluzbowy.rokWyprodukowania;
    rokWyprodukowaniaSamochoduPrywatnego = data.pojazd.samochod.prywatny.rokWyprodukowania;

    /*Wywołanie metody oraz implementacja funkcji mnozenia z obiektu JSON dla liczb*/
    multiplyJsonValues(wiek, liczbaGodzinPracyWMiesiacu,
        function(wiek, godzinyPracy) {
            console.log("Wiek to:\n" + wiek + "\n" + "Liczba godzin pracy to:\n" + godzinyPracy + "h" + "\n" +
                "Wynik mnożenia (GodzinyPracy * wiek) to:\n" + godzinyPracy * wiek);
        }
    )

    /*Wywołanie metody oraz implementacja funcji dodania do stringa z obiektu JSON dla liczb*/
    appendJsonStrings(markaSamochoduPrywatnego, specjalnosc,
        function(markaSamochoduPrywatnego, specjalnosc) {
            const text = `${imie} z zawodu to ${zawod} a jego specjalność to ${specjalnosc} i posiada prywatny samochód marki ${markaSamochoduPrywatnego}`;
            console.log('Stworzenie lancucha znakow za pomoca template strings\n:' + text);
        }
    )
}
//Koniec zadania 1//



/*Poczatek zadania 2 oraz zadania 5 z fetchem*/
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(userData => {
        id = userData[0].id;
        userId = userData[0].userId;
        title = userData[0].title;
        body = userData[0].body;
        exponentiationFetch(userId, id);
        console.log('Fetch: Tworzenie obiektu\n')
        console.log(createFetchObject(title, body));
    })
    // koniec zadania 5


/*operacje na liczbach z obiektem promise*/
function getArticle(userId) {
    return new Promise((resolve, reject) => {
        if (userId == '1') {
            resolve(sum(userId, id));
        } else {
            reject('Nie znaleziono artykułu o takim id.');
        }
    });
}

/*obiekt promise, wywołujący funkcje która tworzy nowy obiekt*/
function getArticleAndCreateObject(userId) {
    return new Promise((resolve, reject) => {
        if (userId == '1') {
            resolve(createNewObject(title, body));
        } else {
            reject('Nie znaleziono artykułu o takim id.');
        }
    });
}
/*koniec zadania 2*/



/*Zadanie 3 async/await*/
async function waitAndAwait(url) {
    let response = await fetch(url);

    /*tym razem uzycie fetcha w funckji asynchronicznej*/
    if (response.ok) {
        let anotherJsonObject = await response.json();
        let body = anotherJsonObject[0].body;
        let title = anotherJsonObject[0].title;
        let userId = anotherJsonObject[0].userId;
        let id = anotherJsonObject[0].id;
        console.log('Async: wynik operacji arytmetycznej\n' + addAsync(id, userId));
        console.log('Async: tworzenie obiektu\n');
        console.log(asyncCreateObject(title, body));
    } else {
        console.log("HTTP-Error: " + response.status);
    }
}
// koniec zadania 3

/*Zadanie 4 AJAX*/
let xhr = new XMLHttpRequest();
xhr.open('GET', url)
xhr.responseType = 'json';
xhr.send();

xhr.onload = function() {
    let responseObject = xhr.response;
    let title = responseObject[0].title;
    let body = responseObject[0].body;
    let userId = responseObject[0].userId;
    let id = responseObject[0].id;
    dodawanieAJAX(userId, id);
    createObjectAJAX(title, body);
    console.log('AJAX tworzenie obiektu\n');
    console.log(createObjectAJAX(title, body));
};

xhr.onerror = function() {
    console.log("Error");
};
//koniec zadania 4


/*Zadanie 6 Axios*/
axios.get(url)
    .then(function(response) {
        let userId = response.data[0].userId;
        let id = response.data[0].id;
        let title = response.data[0].title;
        let body = response.data[0].body;
        divisionAxios(userId, id);
        console.log('Obiekt Axios:\n');
        console.log(createAxiosObject(title, body));
    })
    .catch(function(error) {
        console.log(error);
    })
    .then(function() {
        console.log('Axios "then" który zawsze sie wykona')
    });
//koniec zadania 6


/*wywoałenie metod obiektu Promise do zadania 2*/
setTimeout(() => {
    getArticle(userId).then(data => console.log('pobranie dwoch liczb za pomocą fetch i wykonanie na nich mnożenia\n wynik to:', data));
    getArticle('TESAS').catch(data => console.log("promise reject:\n", data));
    getArticle(userId).finally(() => console.log('metoda finally\n koniec operacji na danych'));
    getArticleAndCreateObject(userId).then(data => console.log('pobranie dwoch liczb za pomocą fetch i wykonanie na nich mnożenia\n wynik to:', data));
    getArticleAndCreateObject('bzzz').catch(data => console.log("promise reject:\n", data));
    getArticleAndCreateObject(userId).finally(() => console.log('metoda finally\n koniec operacji na danych'));
    waitAndAwait(url);
}, 1000);
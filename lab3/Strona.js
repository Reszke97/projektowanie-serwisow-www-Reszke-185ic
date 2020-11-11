"use strict";
var divText = document.querySelector(".stronaText");

/*nowy button do chowania p1*/
var buttonHideHeader1 = document.createElement("button");
buttonHideHeader1.innerText = "ukryj paragraf 1";
buttonHideHeader1.setAttribute('class', 'btn btn-warning');
buttonHideHeader1.onclick = function() {
    var hide = document.querySelectorAll(".stronaText p")[0];
    hide.style.display = "none";
};


/*nowy button do wyswietlania p1*/
var buttonShowHeader1 = document.createElement("button");
buttonShowHeader1.innerText = "pokaż paragraf 1";
buttonShowHeader1.setAttribute('class', 'btn btn-info');
buttonShowHeader1.onclick = function() {
    var hide = document.querySelectorAll(".stronaText p")[0];
    hide.style.display = "block";
};

/*nowy button do chowania p2*/
var buttonHideHeader2 = document.createElement("button");
buttonHideHeader2.innerText = "ukryj paragraf 2";
buttonHideHeader2.setAttribute('class', 'btn btn-warning');
buttonHideHeader2.onclick = function() {
    var hide = document.querySelectorAll(".stronaText p")[2];
    hide.style.display = "none";
};

/*nowy button do wyswietlania p2*/
var buttonShowHeader2 = document.createElement("button");
buttonShowHeader2.innerText = "pokaż paragraf 2";
buttonShowHeader2.setAttribute('class', 'btn btn-info');
buttonShowHeader2.onclick = function() {
    var hide = document.querySelectorAll(".stronaText p")[2];
    hide.style.display = "block";
};


/*stworzenie nowego diva następnie dodanie do niego
 buttonów i na koniec pobranie rodzica i podmiana*/
var newDiv = document.createElement("div");
newDiv.appendChild(buttonShowHeader2);
newDiv.appendChild(buttonHideHeader2);
var tekstDiv = document.querySelector(".stronaText");
/*arg1 = nowy Element 
  arg2 = element przed którym nowy element będzie wstawiony*/
tekstDiv.insertBefore(newDiv, document.querySelectorAll(".stronaHeader")[1]);

/*dołączenie przed początkiem diva buttonow*/
divText.prepend(buttonHideHeader1);
divText.prepend(buttonShowHeader1);

/*Dodawanie paragrafu przez podanie tekstu na stronie*/
var newDiv2 = document.createElement("div");
newDiv2.setAttribute('class', 'textBox');
newDiv2.style.setProperty('overflow-wrap', 'break-word');
newDiv2.style.setProperty('width', '50%');

/*stworzenie nowego TextArea i dodanie go do diva */
var newTextBox = document.createElement('textarea');
newTextBox.innerText = 'tutaj dodaj tekst do paragrafu';
newTextBox.setAttribute('class', 'textareaTekst');
newTextBox.style.setProperty('width', '100%');
newTextBox.style.setProperty('height', '80%');
newTextBox.style.setProperty('display', 'block');
newDiv2.appendChild(newTextBox);

/*dodanie buttonu zmieniajacego kolor tla textArea*/
var newBgButton = document.createElement('button');
newBgButton.innerText = 'zmień';
newBgButton.style.setProperty('margin-bottom', '16px');
newBgButton.setAttribute('class', 'btn btn-warning');
newBgButton.setAttribute('margin', '0');
newBgButton.style.setProperty('height', '20%');
newBgButton.style.setProperty('width', '33.3%');
newDiv2.appendChild(newBgButton);

/*zmiana koloru textArea*/
newBgButton.onclick = function() {
    if (newTextBox.style.backgroundColor != 'orange') {
        newTextBox.style.backgroundColor = 'orange';
        alert('pomyślnie zmieniono kolor TextArea na pomarańczowy')
    } else {
        newTextBox.style.backgroundColor = 'white';
        alert('pomyślnie zmieniono kolor TextArea na biały')
    }

}


/*stworzenie nowego buttona usuwajacego tekst */
var buttonDeleteText = document.createElement('button');
buttonDeleteText.innerText = 'usuń';
buttonDeleteText.style.setProperty('margin-bottom', '16px');
buttonDeleteText.setAttribute('class', 'btn btn-danger');
buttonDeleteText.setAttribute('margin', '0');
buttonDeleteText.style.setProperty('height', '20%');
buttonDeleteText.style.setProperty('width', '33.3%');
newDiv2.appendChild(buttonDeleteText);

/*usuniecie ostatniego paragrafu*/
buttonDeleteText.onclick = function() {
    lengths = document.querySelectorAll('.stronaText p').length;
    if (lengths > 4) {
        document.querySelectorAll('.stronaText p')[(document.querySelectorAll('.stronaText p').length) - 1].remove();
    }
}

/*stworzenie nowego buttona dodajacego tekst i dodanie go do diva*/
var newButtonForText = document.createElement("button");
newButtonForText.innerText = "dodaj";
newButtonForText.style.setProperty('margin-bottom', '16px');
newButtonForText.setAttribute('class', 'btn btn-success');
newButtonForText.style.setProperty('height', '20%');
newButtonForText.style.setProperty('width', '33.3%');
newDiv2.appendChild(newButtonForText);

/*stworzenie nowego paragrafu po dodaniu tekstu*/
newButtonForText.onclick = function() {
    var sender = document.querySelector(".stronaText");
    var par = document.createElement("p");
    par.innerText = newTextBox.value;
    sender.appendChild(par);
};

/*stworzenie inputa dla kalkulatora*/
var numInput = document.createElement("input");
numInput.innerText = '';
numInput.setAttribute('class', 'numbers');
numInput.setAttribute('type', 'text')
numInput.readOnly = true;
numInput.style.setProperty('width', '100%');
numInput.style.setProperty('height', '14.2857%');
numInput.setAttribute('class', 'bg-secondary');
numInput.style.setProperty('border-left', 'none');

/*tworzenie kalulatora*/
var kalkulatorDiv = document.createElement('div');

/*dodanie inputa do diva przeznaczonego na kalkultator*/
kalkulatorDiv.appendChild(numInput);


kalkulatorDiv.setAttribute('class', 'kalkulator');
kalkulatorDiv.style.setProperty('width', '50%');
var liczbaDoKalkulatora;
var last;
var asciiNumber = 42;
for (var i = 0; i < 19; i++) {
    if (asciiNumber == 44) {
        asciiNumber++;
        i++;
    }

    /*dodanie operatorow arytmetycznych*/
    if (i >= 10 && i < 16) {
        liczbaDoKalkulatora = document.createElement('button');
        liczbaDoKalkulatora.innerText = String.fromCharCode(asciiNumber);
        liczbaDoKalkulatora.setAttribute('class', 'btn-info');
        liczbaDoKalkulatora.style.setProperty('width', '33.33%')
        liczbaDoKalkulatora.style.setProperty('height', '14.2857%')
        kalkulatorDiv.appendChild(liczbaDoKalkulatora);
        liczbaDoKalkulatora.onclick = function() {
            numInput.value = numInput.value + this.innerText;
            last = this.innerText;
        };
        asciiNumber++;
    }

    /*dodanie liczb od 0-9*/
    else if (i < 10) {
        liczbaDoKalkulatora = document.createElement('button');
        liczbaDoKalkulatora.innerText = i;
        liczbaDoKalkulatora.setAttribute('class', 'btn-info');
        liczbaDoKalkulatora.style.setProperty('width', '33.33%')
        liczbaDoKalkulatora.style.setProperty('height', '14.2857%')
        liczbaDoKalkulatora.onclick = function() {
            numInput.value = numInput.value + this.innerText;
            last = this.innerText;
        };
        kalkulatorDiv.appendChild(liczbaDoKalkulatora);
    } else if (i == 16) {
        liczbaDoKalkulatora = document.createElement('button');
        liczbaDoKalkulatora.innerText = '=';
        liczbaDoKalkulatora.setAttribute('class', 'btn-info');
        liczbaDoKalkulatora.style.setProperty('width', '33.33%')
        liczbaDoKalkulatora.style.setProperty('height', '14.2857%')

        /*obliczenie rownania ze stringa*/
        liczbaDoKalkulatora.onclick = function() {
            numInput.value = eval(numInput.value);
            last = this.innerText;
        };
        kalkulatorDiv.appendChild(liczbaDoKalkulatora);
    } else if (i == 17) {
        liczbaDoKalkulatora = document.createElement('button');
        liczbaDoKalkulatora.setAttribute('class', 'btn-info');
        liczbaDoKalkulatora.innerText = 'Del';
        liczbaDoKalkulatora.style.setProperty('width', '33.33%')
        liczbaDoKalkulatora.style.setProperty('height', '14.2857%')

        /*usunięcie ostatniego znaku*/
        liczbaDoKalkulatora.onclick = function() {
            numInput.value = numInput.value.slice(0, -1);
        };
        kalkulatorDiv.appendChild(liczbaDoKalkulatora);
    } else if (i == 18) {
        liczbaDoKalkulatora = document.createElement('button');
        liczbaDoKalkulatora.setAttribute('class', 'btn-info');
        liczbaDoKalkulatora.innerText = 'C';
        liczbaDoKalkulatora.style.setProperty('width', '33.33%')
        liczbaDoKalkulatora.style.setProperty('height', '14.2857%')

        /*wyczyszczenie zawartości*/
        liczbaDoKalkulatora.onclick = function() {
            numInput.value = '';
        };
        kalkulatorDiv.appendChild(liczbaDoKalkulatora);
    }
}

/*stworzenie diva dla kalkulatora i TextArea*/
var divKalkulatorLista = document.createElement('div');
divKalkulatorLista.setAttribute('class', 'ListaKalkulator');
divKalkulatorLista.style.setProperty('width', '100%');
divKalkulatorLista.style.setProperty('display', 'inline-flex');
divKalkulatorLista.style.setProperty('margin-bottom', '16px');




/*dodanie kalkulatora do diva*/
divKalkulatorLista.appendChild(kalkulatorDiv);

/*dodanie do diva istniejacego dynamicznie utworzonego diva */
divKalkulatorLista.appendChild(newDiv2);

/*dodanie diva dla kalkulatora i textArea do dokumentu*/
divText.appendChild(divKalkulatorLista);
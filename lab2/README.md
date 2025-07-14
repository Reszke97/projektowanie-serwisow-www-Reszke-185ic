# Lab 1 – Praca z elementami DOM + ćwiczenia.
## Źródło
https://zacniewski.gitlab.io/teaching/2020-serwisy-www/

# Lista użytych metod, operatorów javaScript oraz użytych funkcji do stylowania CSS:

- innerText
- innerHTML
- createElement()
- element.setAttribute()
- querySelector()
- querySelectorAll()
- element.onclick()
- getElementsByClassName()
- element.style.setProperty()
- element.appendChild()
- element.prepend()
- element.insertBefore()
- eval()
- alert()
- String.fromCharCode()
- element.value
- slice()
- array.length
- this.innerText
- pętla for
- operatory logiczne if/else if
- use strict (został użyty dla całego skryptu strona.js)

## Strona Główna
![Strona Główna](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab1/ZrzutyStrony/home.PNG)

Jako menu Główne wykorzystałem **bootstrapa** do stworzenia fixed top nav-bar oraz zmodyfikowałem go na niższych rozdzielczościach aby po kliknięciu na guzik zmienił się kolor. 
Do stworzenia **tła** użyłem zdjęcia po czym zedytowałem zdjęcie w gimpie dodając napis.
Pod tłem stworzyłem nowy blok przeznaczony na **content** opakowany w kolejny blok zawierający 2 nagłówki oraz dodałem 4 bloki span ze zdjęciami posługując się **java Scriptem**(do stworzenia bloków służy plik **main.js**).
Na koniec dodałem stopkę z informacją o autorze oraz linkami do użytych zasobów.

### Dodane nowe elementy JavaScript do strony(**Wszystkie z nowo dodanych elementów dodane przez JavaScript**):

- Po kliknięciu w diva z textem zmienia się czcionka na progrubioną i krzywą
## Strona główna po zmianach
![Strona Główna po zmianie](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab2/ZrzutyStrony/indexZ.PNG)

## Formularz
![Formularz](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab1/ZrzutyStrony/formularz.PNG)

Do stworzenia formularza wykorzystałem gotowy szablon **Bootstrapa** na razie go nie modyfikując. **Menu główne** oraz **stopka** takie same jak na stronie głównej.

## List
![List](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab1/ZrzutyStrony/list.PNG)

Menu górne i stopka takie samo ja na stronie głównej. Do stworzenia listu stworzyłem 1 blok główny a w nim kilka innych bloków aby sformatować odpowiednio tekst przy skalowaniu w procentach do otrzymania formatu listu. Zastosowane zostały tutaj bloki **div** wyświetlane jako **inline-flex** połączone wielkortonie ze stylem **text-align** oraz z tekstem wewnątrz **paragrafów**.

### Dodane nowe elementy JavaScript do listu(**Wszystkie z nowo dodanych elementów dodane przez JavaScript**):
- Dodanie przez javaScript **inputa**, który po wpisaniu do niego danych, po naciśnięciu guzika również dodanego przez JavaScript zmienia nadawcę listu.
- po kliknięciu na diva z tekstem zmiana koloru i rozmiaru czcionki.
- w Polu miejscowości dodany w JavaScripcie został czas przy użyciu metod **Date**
## List po zmianach
![List](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab2/ZrzutyStrony/listZ.PNG)

## Strona z Książki
![Strona z książki](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab1/ZrzutyStrony/Strona%20z%20ksiazki.PNG)

Menu główne bez zmian, w stopce dodatkowo został dodany link do korzystanych zasób podręcznika. Pod menu głównym znajduje się paragraf z tekstem poprzedzony nagłówkiem, następnie została utworzna tabela z tekstem. Po tabelce kolejny nagłówek wraz z kolejnym paragrafem. Następnie na zdjęcie i znajdujący się pod nim tekst został utworzony jeden duży blok wyświetlany jako **flex** skierowany pionowo czyli **flex-direction:column** a w nim zdjęcie oraz mniejszy blok, w którym znajduje się tekst wewnątrz paragrafu.

### Dodany nowe elementy JavaScript do Książki (**Wszystkie z nowo dodanych elementów dodane przez JavaScript**):

- utworzone buttony w javaScripcie, które chowają lub pokazują paragrafy. Drugi guzik został włączony w środek przy użyciu metody **isBefore**.
## Strona z Książki po zmianach
![Strona z książki](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab2/ZrzutyStrony/stronaZ1.PNG)

- Utworzony został w JavaScripcie kalkulator z input boxem ustwianoym na **readonly**, który po kliknięciu w guzik po naciśnięciu znaku **'='** liczy wybrane proste równanie. Kalkulator i TextArea oraz guziki do jego modyfikacji zostały wcześniej dodane do diva. Do stworzenia kalkulatora została użyta pętla oraz do dodawnia tekstu po kliknięciu na guzik zostało użyte słowo kluczowe **this** this.innerText do pobrania tekstu po kliknięciu na wskazany guzik.
- Utworzony zostal w JavaScripcie **textArea**, który po wpisaniu danego ciągu znaków dodaje do diva paragraf po naciśnięciu guzików.
- Utworzone guziki pod **textArea** umożliwiają dodawać i usuwać stworzone paragrafy oraz dodatkowo guzik zmieniąjcy kolor **textArea** na pomarańczowy.
## Strona z Książki po zmianach(cd.)
![Strona z książki](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab2/ZrzutyStrony/listZ2.PNG)

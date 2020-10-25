# projektowanie-serwisow-www-Reszke-185ic
- W folderze **lab1** znajdują sie pliki ze zrobionym pierwszym zadaniem.

- W podfolderze **lab1** znajduje się folder **ZrzutyStrony** ze zrzutami ze strony.

- Plik **style.css** odpowiada za stylowanie wszystkich elementów na stronie jest podzielony na każdą z podstron.

- Plik **main.js** zawiera skrypt tworzący nowe bloki na stronie głównej.

- Plik **function.js** zawiera skrypt z funkcją.

- Plik **Formularz.html** zawiera stronę z formularzem.

- Plik **index.html** zawiera stronę główną.

- Plik **Strona.html** zawiera stronę z podręcznika(link do zasobów strony w stopce na podstronie Strona)

- Plik **List.html** zawiera stronę z listem.

- Pliki **tło** i **fizyka** to użyte zdjęcia przy tworzeniu stron.

## Strona Główna
![Strona Główna](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab1/ZrzutyStrony/home.PNG)

Jako menu Główne wykorzystałem **bootstrapa** do stworzenia fixed top nav-bar oraz zmodyfikowałem go na niższych rozdzielczościach aby po kliknięciu na guzik zmienił się kolor. 
Do stworzenia **tła** użyłem zdjęcia po czym zedytowałem zdjęcie w gimpie dodając napis.
Pod tłem stworzyłem nowy blok przeznaczony na **content** opakowany w kolejny blok zawierający 2 nagłówki oraz dodałem 4 bloki span ze zdjęciami posługując się **java Scriptem**(do stworzenia bloków służy plik **main.js**).
Na koniec dodałem stopkę z informacją o autorze oraz linkami do użytych zasobów.

## Formularz
![Formularz](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab1/ZrzutyStrony/formularz.PNG)

Do stworzenia formularza wykorzystałem gotowy szablon **Bootstrapa** na razie go nie modyfikując. **Menu główne** oraz **stopka** takie same jak na stronie głównej.

## List
![List](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab1/ZrzutyStrony/list.PNG)

Menu górne i stopka takie samo ja na stronie głównej. Do stworzenia listu stworzyłem 1 blok główny a w nim kilka innych bloków aby sformatować odpowiednio tekst przy skalowaniu w procentach do otrzymania formatu listu. Zastosowane zostały tutaj bloki **div** wyświetlane jako **inline-flex** połączone wielkortonie ze stylem **text-align** oraz z tekstem wewnątrz **paragrafów**.

## Strona z Książki
![Strona z książki](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab1/ZrzutyStrony/Strona%20z%20ksiazki.PNG)

Menu główne bez zmian, w stopce dodatkowo został dodany link do korzystanych zasób podręcznika. Pod menu głównym znajduje się paragraf z tekstem poprzedzony nagłówkiem, następnie została utworzna tabela z tekstem. Po tabelce kolejny nagłówek wraz z kolejnym paragrafem. Następnie na zdjęcie i znajdujący się pod nim tekst został utworzony jeden duży blok wyświetlany jako **flex** skierowany pionowo czyli **flex-direction:column** a w nim zdjęcie oraz mniejszy blok, w którym znajduje się tekst wewnątrz paragrafu.

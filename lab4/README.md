# Została utworzona gra Snake. Ponieważ skrypt w dokumencie jest typu **"module"** strona musi być lokalnie zahostowana. Do zahostowania lokalnie strony użyłem visual studio code Live Server.

# Gra została podzielona na kilka skryptów, które korzystają nawzajem ze swoich zasobów:

## W pliku game.js znajdują sie wszystkie potrzebne funkcje do uruchomienia gry

## W pliku snake.js znajduję się cała logika dla węża i związane z tym zachowania

## W pliku food.js znajduję się cała logika dla jedzenia czyli obiketu docelowego w grze Snake

## W pliku input.js znajduję się cała logika związana z naciśnięciem guzika na klawiaturze

## W pliku grid.js znajduję się logika generująca losowe miejsca dla jedzenia oraz sprawdzeniu czy Snake wyszedł poza kratkę

### Gra po załadowaniu strony

## Strona Główna
[](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab3/ZrzutyStrony/2.3.png)

Tutaj dodany został dodany **mouseover** i **mouseout** gdy zostanie najechany span ze zdjęciami.

## List
[](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab3/ZrzutyStrony/3.3.PNG)
Dodany tutaj został **mousemove** zwracający pozycje X i Y na ekranie i wypisujące je w **textarea**. Dodatkowo po naciśnięciu guzika **usun listener** **mousemove** zostanie usnięty.

## Strona
[](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab3/ZrzutyStrony/4.3.PNG)
Do strony został dodany **click** i **doubleclick** oraz **keypress** oraz **copy** a po kliknięciu pojednyczym na zdjęcie zmieni się rozmiar zdjęcia.

Po **double clicku** na zdjęcie przeniesie nas do podstrony ze zdjęciem:
[](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab3/ZrzutyStrony/5.3.PNG)

Po nacisnięciu guzika na klawiaturze w miejscu, w którym kalkulator zwraca obliczenia otrzymamy alert:
[](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab3/ZrzutyStrony/6.3.PNG)

Po skopiowaniu dowolnego tekstu znajdującego się na podstronie i kopiując go gdzieklowiek otrzymamy wszystkie litery pisane z od dużej.
[](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab3/ZrzutyStrony/7.3.PNG)

## Formularz
[](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab3/ZrzutyStrony/8.3.PNG)
Do formularza został dodany event **focus**, **blur** oraz **wheel**. Po 'namierzeniu', **focus** forma z emailem zostanie zmieniony kolor a po 'odfocusowaniu' kolor wróci do stanu pierwotnego**blur**. Gdy używany jest **scroll** to zliczana jest ilość obrotów scrolla za pomocą **wheel** i pojawia się ich liczba w **inpucie**.
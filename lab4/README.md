# Lab 2 – Praca z elementami DOM + ćwiczenia.
## Źródło
https://zacniewski.gitlab.io/teaching/2020-serwisy-www/

# Została utworzona gra Snake. Ponieważ skrypt w dokumencie jest typu **"module"** strona musi być lokalnie zahostowana. Do zahostowania lokalnie strony użyłem visual studio code Live Server.

# W skryptach znajdują się komentarze

# Gra została podzielona na kilka skryptów, które korzystają nawzajem ze swoich zasobów:

## W pliku game.js znajdują sie wszystkie potrzebne funkcje do uruchomienia gry

## W pliku snake.js znajduję się cała logika dla węża i związane z tym zachowania

## W pliku food.js znajduję się cała logika dla jedzenia czyli obiketu docelowego w grze Snake

## W pliku input.js znajduję się cała logika związana z naciśnięciem guzika na klawiaturze

## W pliku grid.js znajduję się logika generująca losowe miejsca dla jedzenia oraz sprawdzeniu czy Snake wyszedł poza kratkę

### Gra po załadowaniu strony
Czas od razu zaczyna się odliczać. Snake zacznie się poruszać dopiero gdy naciśnimey jedną z 4 strzałek na klawiaturze
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab4/ZrzutyStrony/s6.PNG)

### Gra chwile po zdobyciu kilku owoców:
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab4/ZrzutyStrony/s2.PNG)

### Komunikat o przegranej gdy wyjdziemy poza granice grid Boxów:
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab4/ZrzutyStrony/s3.PNG)

### Po kliknięciu ok zostanie utworzona nowa gra
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab4/ZrzutyStrony/s4.PNG)

### Komunikat o przegranej gdy natrafimy na pole w którym znajduję się ciało naszego Snake'a
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab4/ZrzutyStrony/s7.PNG)

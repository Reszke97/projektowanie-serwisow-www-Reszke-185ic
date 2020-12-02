# Do wykonania laboratoriów utworzyłem 2 nowe skrypty aby kod był czytelniejszy oraz stronę **asynchronousJS.html** . skrypt **asynchronousJSFunctions** to skrypt w którym są funkcje do pod zadań nr 1 i 2 a skrypy **asynchronousJS** korzysta z tych funkcji. Dodatkowo utowrzyłem plik **mojObiektJSON** w którym znajduję się mój obiek JSON. W kodzie znajdują się komentarze gdzie zaczyna się dane zadanie. Dla lepszej przejrzystości podaje zrzuty kodu poniżej:

## Wszystkie funkcje potrzebne do wykonania zadań:
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab5/ZrzutyStrony/funkcje.PNG)

## Konsola ze wszystkimi przykładami:
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab5/ZrzutyStrony/konsola.PNG)

## Zadanie 1:
### Najpierw utworzyłem plik JSON:
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab5/ZrzutyStrony/zad1b.PNG)

### Następnie za pomocą JQuery .getJSON pobrałem dane z pliku i wywołałem 2 funkcje z callbackiem:
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab5/ZrzutyStrony/zad1a.PNG)

### Konsola po wywołaniu funkcji:
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab5/ZrzutyStrony/zad1.PNG)

## Zadanie 2:
### W zadaniu 2 najpierw za pomocą metody **fetch** pobieram dane ze strony z obiektami **JSON** i przypisuje je do zmiennych. A następnie tworze obiekty **Promise** i określam co stanie się jeśli wystąpi **Resolve i Reject**
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab5/ZrzutyStrony/zad2a.PNG)

### Następnie wywołuje wcześniej utworzone Obietnice z metodami **then**, **catch**, **finally**. Wszsytkie te wywołania znajdują się w metodzie **setTimeout** ponieważ muszą odczekać aż metoda **fetch** zwróci im dane.
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab5/ZrzutyStrony/zad2b.PNG)

### Finalnie tak przedstawia się konsola:
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab5/ZrzutyStrony/zad2.PNG)

## Zadanie 3:
### Tworzenie asynchorniczej funkcji z urlem z którego chcemy pobrać dane, a następnie oczekujemy na powrót metody **Fetch** jeśli metoda **Fetch** pomyślnie zwróciła dane to chcemy aby zwróciła obiekt **JSON** w przeciwnym razie wystąpił błąd. Następnie zostaną pobrane dane i przypisane do zmiennych oraz wywołane funkcję.
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab5/ZrzutyStrony/zad3.PNG)

### Konsola po wywołaniu funkcji:
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab5/ZrzutyStrony/zad3a.PNG)

## Zadanie 4:
### Stworzenie nowego XMLHttpRequest obiektu, następnie  pobranie prośby(request) dla URL,Wysłanie requesta przez sieć. **Onload** zostanie wywołane po tym jak otrzymano odpowiedź, jeśli po drodze wystąpi jakiś błąd to otrzymamy error i wywoła się **onerror**. Responsy type podajemy jako **JSON** ponieważ chcemy otrzymać dane z obiektu JSON.
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab5/ZrzutyStrony/zad4.PNG)

### Konsola po wykonaniu zapytania **AJAX**
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab5/ZrzutyStrony/zad4a.PNG)

## Zadanie 5:
### Użycie metody **Fetch**, następnie chcemy otrzymać obiekt **JSON**, przypisanie do zmiennych wartości z obiektu JSON i wywoałanie funkcji:
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab5/ZrzutyStrony/zad5.PNG)

### Konsola po wykonaniu metody **Fetch** i funkcji wywołująych się wewnątrz metody.
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab5/ZrzutyStrony/zad5a.PNG)

## Zadanie 6:
### Tak jak w przypadku Fetcha przekazujemy **url** następnie w metodzie **then** pobieramy dane z obiektu JSON i zostają wywowłane funkcje:
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab5/ZrzutyStrony/zad6.PNG)

### Konsola po wywołaniu **axios.get**:
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab5/ZrzutyStrony/zad6a.PNG)

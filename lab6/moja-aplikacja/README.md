# Lab 2 – Praca z elementami DOM + ćwiczenia.
## Źródło
https://zacniewski.gitlab.io/teaching/2020-serwisy-www/

# Do wykonania laboratorium stworzyłem obiekt, w którym znajudują się informacje o książkach. Całe laboratorium wykonałem w pliku **App.js** . Stworzyłem 3 klasy(Klasę nadrzędną i 2 potomne). Na koniec dodałem kolor do teksu z **Bootstrapa** oraz własne style w pliku **App.css**. Jeśli chodzi o zainstalowanie Bootstrapa to posłużyłem się tym linkiem :https://create-react-app.dev/docs/adding-bootstrap/ .

## Tak przedstawia się gotowa strona:
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab6/moja-aplikacja/zrzuty/1.PNG)

## Tak przedstawia się mój główny komponent **App** :
### Najpierw wywoływany jest komponent funkcyjny a następnie komponent klasowy a w nim 2 pozostałe komponenty klasowe:
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab6/moja-aplikacja/zrzuty/4.PNG)

## Tak przedstawia się mój komponent funkcyjny
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab6/moja-aplikacja/zrzuty/5.PNG)

## Tak przedstawia się mój komponent klasowy, który jest nadrzędny dla 2 innych komponentów klasowych:
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab6/moja-aplikacja/zrzuty/3.PNG)

Najpierw utworzyłem obiekt o nazwie BOOKS a w nim dane o książkach. Następnie w returnie zostaje zwrócony div a w nim 2 divy jeden div jest obiektem klasy Child a drugi jest obiektem klasy Child i przekzuje do nich utworzny obiekt BOOKS. Więc przy przekazaniu do nich stworzonego wcześniej obiektu, komponennty podrzędne mają do niego dostęp i są wywołane.

```
 return(
        <div className="imagesAndDescriptionWrapper">
            <div><Child books={BOOKS}></Child></div>
            <div><ChildImg images={BOOKS}></ChildImg></div>
        </div>
           
        );
```


## Tak przedstawia się mój komponent klasowy **Child**, jest w nim wywołana funkcja **map()**, która przyjmuje wcześniej przekazny obiekt z klasy nadrzędnej jako parametr wejściowy a następnie wyświetla dane na stronie:
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab6/moja-aplikacja/zrzuty/6.PNG)



#### Tak przedstawia się mój komponent klasowy **ChildImg**, dodana tutaj została metoda **onClick** oraz dodany również konstruktor, który posiada obiekt **state** oraz należało przypisać funkcje **handleClick** do klasy. Informacje o tym jak to zrobić znalazłem tutaj:https://pl.reactjs.org/docs/handling-events.html . W metodzie render znowu jest zwracana funkcja **map** a jej parametrem wejściowym jest obiekt BOOKS z komponentu nadrzędnego. Tym razem wyświetlane są zdjęcia a przy wywołaniu funkcji **onClick** przekazywany jest id z obiektu **BOOKS** aby po naciśnięciu na ksiązke pojawiła się cena. Do tego wcześniej został dodany obiekt **state** przechowujący informacje o stanie i używany gdy zostanie wywołana funkcja **handleClick** a więc po naciśnięciu.
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab6/moja-aplikacja/zrzuty/7.PNG)



## Tak wygląda strona gdy naciśniemy na zdjęcie(gdy state zostanie ustawiony na true to wyświetli się cena):
![](https://github.com/Reszke97/projektowanie-serwisow-www-Reszke-185ic/blob/main/lab6/moja-aplikacja/zrzuty/2.PNG)




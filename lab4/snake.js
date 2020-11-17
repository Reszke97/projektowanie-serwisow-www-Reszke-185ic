import { getInputDirection } from './input.js';
export const SNAKE_SPEED = 6; //ustalenie ile razy w ciągu jednej sekundy poruszy się nasz snake
var snakeBody = [{ x: 11, y: 11 }]; //zadeklarowanie tablicy ze snake'iem na srodku diva (11 kratka)
var newSnakeParts = 0;
var score = 0;

export function update() {
    addSnakeParts();
    var inputDirection = getInputDirection();
    //snakeBody.length-2 ----> otrzymany zostanie przedostatni element w tablicy
    for (var i = snakeBody.length - 2; i >= 0; i--) {
        //snakeBody[i + 1] -----> ostatni element
        // przesuwamy w gore dlatego ostatni element jest rowny elmentowi wyzej
        //'...' pobiera istniejace parametry z istniejacego obiektu a nastepnie nadpisuje wskazane atrybuty i tworzy nowa referencje
        // poprzedni obiekt nie zostaje usunięty zostaje po prostu zduplikowany(2 rozne referencje)
        snakeBody[i + 1] = {...snakeBody[i] };
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(snakeBoard) {
    //wywołanie metody foreach dla tablicy punktów;
    snakeBody.forEach(
        //dla kazdego elementu w tablicy snakeBody (21 elementow) wywołaj funkcje z parametrem snakeParts [foreach(snakeParts:snakeBody)do:]
        //parametr pierwszy w funckji to array item
        function(snakeParts, index) {
            if (index == 0) {
                var snakePart = document.createElement("div");
                snakePart.style.gridRowStart = snakeParts.y;
                snakePart.style.gridColumnStart = snakeParts.x;
                snakePart.setAttribute("class", "snake");
                var dots = document.createElement("span");
                dots.setAttribute("class", "dot");
                var dots2 = document.createElement("span");
                dots2.setAttribute("class", "dot");
                snakePart.appendChild(dots);
                snakePart.appendChild(dots2);
                snakeBoard.appendChild(snakePart);
            } else {
                var snakePart = document.createElement("div");
                snakePart.style.gridRowStart = snakeParts.y;
                snakePart.style.gridColumnStart = snakeParts.x;
                snakePart.setAttribute("class", "snake");
                snakeBoard.appendChild(snakePart);
            }

        }
    )
}

export function expandSnake(amount) {
    newSnakeParts += amount;
    score++;
    document.querySelector('.wynik').innerHTML = score;
}

//jesli nie zostanie wywolana funkcja snakeIntersection to ignoreHead = false i przekazany jest pusty obiekt
export function onSnake(position, { ignoreHead = false } = {}) {
    //some -> dla jakiegokolwiek elementu jeśli funkcja z argumentem snakeParts zwroci true to onSnake zwraca true
    //czyli jesli jakakolwiek czesc naszego Snake'a jest rowna zmiennej position to funkcja zwroci true
    return snakeBody.some(
        function(snakeParts, index) {
            if (ignoreHead && index == 0) return (false);
            return equalPositions(snakeParts, position)
        }
    )
}

/*sprawdzenie czy pozycje są na ktorej się znajduje nasz snake jest taka sama jaka wskazana 2 pozycja*/
function equalPositions(position1, position2) {
    return (position1.x == position2.x && position1.y == position2.y);
}

function addSnakeParts() {
    for (var i = 0; i < newSnakeParts; i++) {
        //od razu po przylaczeniu nowej czesci do tablicy 
        //bedzie ona identyczna jak ostatni wczesniejszy ostatni element
        //dopiero po przesunieciu o 1 w jakimkolwiek kierunku
        //bedzie ona widoczna
        snakeBody[snakeBody.length] = {...snakeBody[snakeBody.length] - 1 }
    }
    //nalezy wyzerowac ponizsza zmienna aby dodana do snake'a zostala faktyczna ilosc kratek
    //jesli zmienna nie zostanie wyzerowana to kratki beda caly czas dodawane
    newSnakeParts = 0;
}

export function getSnakeHead() {
    return (snakeBody[0]);
}

/*sprawdzenie czy nasz snake nie naszedł na siebie*/
export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true });
}
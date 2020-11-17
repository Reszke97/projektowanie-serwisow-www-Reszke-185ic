/*wczytanie danych z ppliku tekstowego*/
/*fetch('jak dziala snake.txt')
    .then(response => response.text())
    .then(data => {
        // Do something with your data
        document.querySelector('body').innerHTML = data;
        var test = [];
        test = data.split(' ');
        console.log(test);
    });*/
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { outsideGrid } from './grid.js';
var lastRenderTime = 0;
var snakeBoard = document.querySelector('.snakeBoard');
var gameOver = false;
var czas = 0;

function main(currentTime) {
    if (gameOver) {
        if (confirm('Przegrałeś. Naciśnij ok do restartu.')) {
            window.location = '/lab4/gra.html';
        }
        return;
    }
    window.requestAnimationFrame(main); //pokazuje dokladnie w jakim czasie zostala wywolana funkcja do wyrenderowania klatki w dokumencie w milisekundach
    const sekundyOdOstatniegoWyrendrowania = (currentTime - lastRenderTime) / 1000; //odliczenie ile sekund uplyenlo od ostatniego wyrenderowania
    czas = (currentTime / 1000).toFixed(0)
    document.querySelectorAll('.wynik')[1].innerHTML = czas;

    //aby wyrenderowac okreslona ilosc klatek w danym czasie nalezy podstawic pod licznikiem 1 oraz w mianowniku szybkość Snake'a
    //czyli jeśli ma być renderowane 10 klatek na sekunde to wyrenderowanie 1 klatki zajmie 1/10 sekundy
    // Jeśli sekundyOdOstatniegoWyrendrowania są < od wybranej szybkości poruszania to nie są one generowane
    if (sekundyOdOstatniegoWyrendrowania < 1 / SNAKE_SPEED) return;
    lastRenderTime = currentTime;
    update();
    draw();
}

window.requestAnimationFrame(main);

/*update snake function*/
function update() {
    updateSnake();
    updateFood();
    checkForDeath();
}

/*funkcja tworzaca Snake'a*/
function draw() {
    snakeBoard.innerHTML = '';
    drawSnake(snakeBoard);
    drawFood(snakeBoard);
}

function checkForDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
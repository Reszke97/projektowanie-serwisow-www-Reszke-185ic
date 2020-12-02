import { onSnake, expandSnake } from './snake.js';
import { randomGridPosition } from './grid.js';
var food = getRandomFoodPosition();
const EXPANSION_RATE = 1;


/*update dla fooda*/
/*sprawdzamy czy jedzenie znajduje się w tej samej pozycji co Snake następnie uaktualniamy rozmiar Snake'a i generujemy nowy food*/
export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
    }
}

/*wyświetlenie jedzenie na ekran*/
export function draw(snakeBoard) {
    var foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.setAttribute("class", "food");
    snakeBoard.appendChild(foodElement);
};


/*funkcja ta sprawdza czy nasz Snake nie znajduję sie w tym samym miejscu*/
/*jeśli znajduje się w tej samej pozycji to generowane jest nowe miejsce*/
function getRandomFoodPosition() {
    var newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
    }
    return (newFoodPosition);
}
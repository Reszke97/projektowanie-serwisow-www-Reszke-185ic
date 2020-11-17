import { onSnake, expandSnake } from './snake.js';
import { randomGridPosition } from './grid.js';
var food = getRandomFoodPosition();
const EXPANSION_RATE = 1;

export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
    }
}

export function draw(snakeBoard) {
    var foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.setAttribute("class", "food");
    snakeBoard.appendChild(foodElement);
};

function getRandomFoodPosition() {
    var newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
    }
    return (newFoodPosition);
}
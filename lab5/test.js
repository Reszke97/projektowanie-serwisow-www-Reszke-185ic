var lastRenderTime = 0;
const SNAKE_SPEED = 4; //ustalenie ile razy w ciągu jednej sekundy poruszy się nasz snake

function main(currentTime) {
    window.requestAnimationFrame(main); //pokazuje dokladnie w jakim czasie zostala wywolana funkcja do wyrenderowania klatki w dokumencie w milisekundach
    const sekundyOdOstatniegoWyrendrowania = (currentTime - lastRenderTime) / 1000; //odliczenie ile sekund uplyenlo od ostatniego wyrenderowania
    //aby wyrenderowac okreslona ilosc klatek w danym czasie nalezy podstawic pod licznikiem 1 oraz w mianowniku szybkość Snake'a
    //czyli jeśli ma być renderowane 10 klatek na sekunde to wyrenderowanie 1 klatki zajmie 1/10 sekundy
    // Jeśli sekundyOdOstatniegoWyrendrowania są < od wybranej szybkości poruszania to nie są one generowane
    if (sekundyOdOstatniegoWyrendrowania < 1 / SNAKE_SPEED) return;
    console.log("wyrenderuj");
    lastRenderTime = currentTime;
    updateSnake();
    drawSnake();
}

//zadeklarowanie tablicy ze snake'iem na srodku diva (11 kratka)
var snakeBody = [{ x: 11, y: 11 }];

/*zmienna ta bedzie ustalac kierunek Snake'a w funkcji snakeUpdate 
poprzez dodawanie do glowy snake odpowiedniej wartosci x lub y*/
var inputDirection = { x: 0, y: 0 };

var lastInputDirection = { x: 0, y: 0 };

/*dodanie event listener'ow pod strzalki na klawiaturze*/
window.addEventListener('keydown',
    (e) => {
        switch (e.key) {
            case 'ArrowUp':
                if (lastInputDirection.y != 0) break; //w momencie gdy snake porusza się w góre to ograniczenie nie pozwoli mu od razu iść w dół
                inputDirection = { x: 0, y: -1 }; //-1 na y zmienia pozycje snake'a na gore
                break;
            case 'ArrowDown':
                if (lastInputDirection.y != 0) break; //w momencie gdy snake porusza się w dół to ograniczenie nie pozwoli mu od razu iść w góre
                inputDirection = { x: 0, y: 1 }; //+1 na y zmienia pozycje snake'a na dol
                break;
            case 'ArrowLeft':
                if (lastInputDirection.x != 0) break; //w momencie gdy snake porusza się w lewo to ograniczenie nie pozwoli mu od razu skręcić w prawo
                inputDirection = { x: -1, y: 0 }; //-1 na x zmienia kierunek snake'a na lewo
                break;
            case 'ArrowRight':
                if (lastInputDirection.x != 0) break; //w momencie gdy snake porusza się w prawo to ograniczenie nie pozwoli mu od razu skręcić w lewo
                inputDirection = { x: 1, y: 0 }; //+1 na x zmienia kierunek snake'a na prawo
                break;
        }

    }
);

/*update snake function*/
function updateSnake() {
    //w momencie gdy nacisniemy guzik to ta zmienna
    //bedzie przechowywac poprzedni kierunek przed obecnym klikiem
    lastInputDirection = inputDirection;
    //snakeBody.length-2 ----> otrzymany zostanie przedostatni element w tablicy
    for (var i = snakeBody.length - 2; i >= 0; i--) {
        //snakeBody[i + 1] -----> ostatni element
        // przesuwamy w gore dlatego ostatni element jest rowny elmentowi wyzej
        //'...' pobiera istniejace parametry z istniejacego obiektu a nastepnie nadpisuje wskazane atrybuty i tworzy nowa referencje
        // poprzedni obiekt nie zostaje usunięty zostaje po prostu zduplikowany(2 rozne referencje)
        snakeBody[i + 1] = {...snakeBody[i] }
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

/*funkcja tworzaca Snake'a*/
function drawSnake() {
    document.querySelector(".snakeBoard").innerHTML = '';
    //wywołanie metody foreach dla tablicy punktów;
    snakeBody.forEach(
        //dla kazdego elementu w tablicy snakeBody (21 elementow) wywołaj funkcje z parametrem snakeParts [foreach(snakeParts:snakeBody)do:]
        //parametr pierwszy w funckji to array item
        function(snakeParts) {
            var snakePart = document.createElement("div");
            snakePart.style.gridRowStart = snakeParts.y;
            snakePart.style.gridColumnStart = snakeParts.x;
            snakePart.setAttribute("class", "snake");
            document.querySelector(".snakeBoard").appendChild(snakePart);
        }
    )

}


var food = { x: 0, y: 0 }

function updateSnake() {

}


function drawFood() {
    document.querySelector(".snakeBoard").innerHTML = '';
    var foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    snakePart.setAttribute("class", "food");
    document.querySelector(".snakeBoard").appendChild(foodElement);
}

window.requestAnimationFrame(main);
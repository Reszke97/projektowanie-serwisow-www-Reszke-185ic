var inputDirection = { x: 0, y: 0 };
var lastInputDirection = { x: 0, y: 0 };
var checkIfTimeSet = false;
export var interval;
var timeSave = document.querySelectorAll('.wynik')[1];
var seconds = 0;
/*dodanie event listener'ow pod strzalki na klawiaturze*/
window.addEventListener('keydown',
    (e) => {
        switch (e.key) {
            case 'ArrowUp':
                if (!checkIfTimeSet) {
                    interval = setInterval(incrementSeconds, 1000);
                    checkIfTimeSet = true;
                }
                if (lastInputDirection.y != 0) break; //w momencie gdy snake porusza się w góre to ograniczenie nie pozwoli mu od razu iść w dół
                inputDirection = { x: 0, y: -1 }; //-1 na y zmienia pozycje snake'a na gore
                break;
            case 'ArrowDown':
                if (!checkIfTimeSet) {
                    interval = setInterval(incrementSeconds, 1000);
                    checkIfTimeSet = true;
                }
                if (lastInputDirection.y != 0) break; //w momencie gdy snake porusza się w dół to ograniczenie nie pozwoli mu od razu iść w góre
                inputDirection = { x: 0, y: 1 }; //+1 na y zmienia pozycje snake'a na dol
                break;
            case 'ArrowLeft':
                if (!checkIfTimeSet) {
                    interval = setInterval(incrementSeconds, 1000);
                    checkIfTimeSet = true;
                }
                if (lastInputDirection.x != 0) break; //w momencie gdy snake porusza się w lewo to ograniczenie nie pozwoli mu od razu skręcić w prawo
                inputDirection = { x: -1, y: 0 }; //-1 na x zmienia kierunek snake'a na lewo
                break;
            case 'ArrowRight':
                if (!checkIfTimeSet) {
                    interval = setInterval(incrementSeconds, 1000);
                    checkIfTimeSet = true;
                }
                if (lastInputDirection.x != 0) break; //w momencie gdy snake porusza się w prawo to ograniczenie nie pozwoli mu od razu skręcić w lewo
                inputDirection = { x: 1, y: 0 }; //+1 na x zmienia kierunek snake'a na prawo
                break;
        }

    }
);

export function getInputDirection() {
    //w momencie gdy nacisniemy guzik to ta zmienna
    //bedzie przechowywac poprzedni kierunek przed obecnym klikiem
    lastInputDirection = inputDirection;
    return inputDirection;
}

function incrementSeconds() {
    seconds += 1;
    timeSave.innerText = seconds;
}
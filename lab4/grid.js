const GRID_SIZE = 21;
/*funkcja generująca jedzenie w jednym z losowych miejsc w gridBoxie */
/*ponieważ Math.random zwraca wartości od 0 do 1 po wykonaniu podlogi z tego wyrażenia należy dodać 1 aby uwzględnić wszystkie kratki*/
export function randomGridPosition() {
    return ({
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    });
}

/*jeśli wąż jest poza kratką to funckja zwraca true*/
export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > GRID_SIZE ||
        position.y < 1 || position.y > GRID_SIZE
    );

}
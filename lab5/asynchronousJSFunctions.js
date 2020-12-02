////////////////////////////////////////////////////////////////////////
/*funkcje tworzące obiekty lub wykonujące operacje arytmetyczne poniżej*/

/*suma liczb*/
export function sum(userId, id) {
    return (((userId * id) + 10));
}

/*stworz nowy obiekt*/
export function createNewObject(title, body) {
    var someObject = { title: title, body: body };
    return (someObject);
}

/*utworzenie metody z callBackiem dla liczb*/
export function multiplyJsonValues(wiek, godzinyPracy, callBack) {
    callBack(wiek, godzinyPracy);
}

/*utworzenie metody z callBackiem dla stringow*/
export function appendJsonStrings(markaSamochoduPrywatnego, specjalnosc, callBack) {
    callBack(markaSamochoduPrywatnego, specjalnosc);
}

/*funkcja dla async*/
export function addAsync(a, b) {
    return (a + b);
}

/*funkcja dla async*/
export function asyncCreateObject(title, body) {
    var someObject = { title: title + 'marik1234', body: body + 'szergowy Bak' };
    return (someObject);
}

/*AJAX dodawanie*/
export function dodawanieAJAX(a, b) {
    return (console.log('AJAX operacja arytmetyczna:\n' + (a + b + 3232)));
}

/*AJAX stworz obiekt*/
export function createObjectAJAX(title, body) {
    var object = { title: title + '\n Testuje AJAXA :)', body: body + '\n Test101' };
    return (object);
}

/*Axios dzielenie*/
export function divisionAxios(a, b) {
    a += 4;
    return (console.log('Axios dzielenie:\n' + (a / b)));
}

/*Axios stworz nowy obiekt*/
export function createAxiosObject(title, body) {
    var object = { title: title + '\n Testuje Axiosa :)', body: body + '\n AxiosTest' };
    return (object);
}

/*Fetch potegowanie*/
export function exponentiationFetch(a, b) {
    a += 2;
    b += 4;
    return (console.log('Fetch potęgowanie:\n' + (Math.pow(a, b))))
}

/*Fetch stworz nowy obiekt*/
export function createFetchObject(title, body) {
    var object = { title: title + '\n Testuje Fetch :)', body: body + '\n Fetch Test' };
    return (object);
}
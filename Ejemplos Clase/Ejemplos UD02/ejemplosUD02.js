function ejemplo22() {
    console.log("Ejemplo 2.2");
    console.log("Esto es un mensaje en la consola");
    alert("Esto es un mensaje en una ventana emergente");
}
function ejemplo23() {
    console.log("Ejemplo 2.3");
    let nombre = prompt("Nombre:");
    confirm(`¿Seguro que te llamas ${nombre}?`);
}
function ejemplo32() {
    console.log("Ejemplo 3.2");
    var ejemplo = 3 //Si no se pone nada, cuenta como var (ejemplo=3)
    if (ejemplo == 3) {
        var variable1 = 7;
        let variable2 = 2;
    }
    console.log(`La variable 1 existe y vale ${variable1}`); //variable1 existe en este lugar
    console.log(`La variable 2 no existe (fuera de ámbito) y da error en la consola`); //variable2 no existe en este lugar
    console.log($variable2);
}
function ejemplo33() {
    console.log("Ejemplo 3.3");
    let edad = 19, nuevaedad, incremento = 6;
    const nombre = "Paco";
    console.log(typeof edad === "number"); //el triple igual es para preguntar si es ESTRICTAMENTE IGUAL
    console.log(typeof nombre === edad); //devuelve false porque int!=string
    nuevaedad = edad + incremento;
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años, dentro de ${incremento} años, tendré ${nuevaedad} años`);
}
function ejemplo341() {
    console.log("Ejemplo 3.4.1");
    let numero = 5;
    console.log(numero); //muestra 5 de forma numérica (se ve de color en la consola)
    console.log(numero.toString()); //muestra 5 igualmente pero en formato string (se ve negro en la consola)

}
function ejemplo343() {
    console.log("Ejemplo 3.4.3");
    let num1 = "4", num2 = 6;
    console.log(typeof num1 + " " + typeof num2); //para ver que son distintos tipos
    console.log(num1 + num2); //nos muestra 46, nos convierte el numero (num2) directamente a string
}
function ejemplo344() {
    console.log("Ejemplo 3.4.4");
    let x = "10", y = 9, z = "9";
    console.log(x < y); //resultado false, se produce una conversión
    console.log(x < z); //resultado true porque los dos son string
}
function ejemplo346() {
    console.log("Ejemplo 3.4.6");
    let altura; //variable no definida
    console.log(altura ? true : false); //al no estar definido, false
    //es como usar if
    /* if (altura){
        console.log("true");
    }else{
        console.log("false");
    }*/
}
function ejemplo35() {
    let m = ["22", "12", "33"];
    /*
    m[0] = 22;
    m[1] = 12;
    m[2] = 33;
    Es lo mismo definirlo de las dos formas
    */
    console.log("Ejemplo 3.5");
    console.log(`La longitud del array es ${m.length}`);
    for (const key in m) {
        console.log(key); //para mostrar el indice (key)
    }
    for (const key of m) {
        console.log(key); //para mostrar los valores
    }
}
function ejemplo351() {
    console.log("Ejemplo 3.5 (2)");
    let activities = [
        ["Work", 9], ["Eat", 1], ["Commute", 2], ["Play Game", 1], ["Sleep", 7]
    ];
    for (const i in activities) {
        for (const j in activities[i]) {
            console.table(`[${i},${j}] = ${activities[i][j]}`);
        }
    }
    /* CON FOR EACH
    activities.forEach(activity => {
        activity.forEach(data => {
            console.log(data);
        });
    });*/

    /*for (let i =0;  i< activities.length;i++) {
        for (let j = 0; j < activities[i].length; j++) {
            console.log(`[${i},${j}] = ${activities[i][j]}`);
            //como en java
        } 
    }*/
}
function ejemplo36() {
    let arr = ["1", "2", "3"];
    let copia = Object.assign({}, arr); //clonar normal
    let copia2 = JSON.parse(JSON.stringify(arr)); //clonar con json
    console.log(arr, copia, copia2);
}
function ejemplo37() {
    let num = "100"; //cadena
    let num2 = "100.13"; //cadena
    let num3 = 11; //int

    let n = parseInt(num); //ahora es 100 no "100", si tiene decimales los trunca
    let n2 = parseFloat(num); //ahora almacena 100.00
    let n4 = parseFloat(num2).toFixed(1); // con toFixed es para decir cuantos decimales tiene
    let n3 = num3.toString(); //ahora es "11" no 11
    console.log(num, n, num2, n2, num3, n3, num2, n4);
}
function ejemplo38() {
    const PI=3.1416;
    console.log(PI);
    PI=3; //esto falla
    const arr = [1,2,3];
    console.log(arr[0]); //muestra 1
    arr[0]=4;
    console.log(arr[0]); //muestra 4
    arr=[]; //esto falla
}
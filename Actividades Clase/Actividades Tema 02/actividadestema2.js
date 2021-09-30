/**
 * @author PacoAranda
 * @email franciscojavier.aranda.alu@iescampanillas.com
 * @create date 2021-09-28 11:58:10
 * @modify date 2021-09-28 11:58:10
 * @desc [description]
 */
function ejercicio1() {
    console.log("Ejercicio 1");
    console.log("Hola mundo");
    alert("Hola mundo");
    document.getElementById("ejercicio1").addEventListener("click", holaMundo());
    function holaMundo() {
        document.getElementById("texto").innerHTML = "<p>Hola mundo</p> <button id='borrar'>Borrar</button>"
        document.getElementById("borrar").addEventListener("click", borrar);
    }
    function borrar() {
        location.reload();
    }
}
function ejercicio2() {
    console.log("Ejercicio 2");
    let num = 0;
    do {
        parseInt(num = prompt("Introduce un número"));
    } while (num <= 10);
    console.log((`El número ${num} es mayor que 10`));
}
function ejercicio3() {
    console.log("Ejercicio 3");
    let fecha = "";
    do {
        fecha = prompt("Introduce una fecha, (ejemplo: 10/06, sin ese formato no funcionará):");
    } while (fecha.length != 5 || fecha.charAt(2) != "/");
    if (fecha === ("25/12")) {
        alert("¡Es Navidad!");
    } else {
        alert("No es Navidad :(");
    }
}
function ejercicio4() {
    console.log("Ejercicio 4");
    let salario = parseInt(prompt("Introduce tu salario:"));
    let antig = parseInt(prompt("Introduce tu antigüedad en la empresa:"));
    if (salario < 500) {
        if (antig > 10) {
            salario = salario * 3;
        } else {
            salario = salario * 2;
        }
    }
    console.log(`Su nuevo salario es: ${salario}`);
}
function ejercicio5() {
    console.log("Ejercicio 5");
    let nota = 0;
    do {
        nota = parseFloat(prompt("Introduce tu nota"));
    } while (nota < 0 || nota > 9);
    if (nota >= 1 && nota <= 2.9) {
        console.log("Muy insuficiente");
    } else if (nota >= 3 && nota <= 4.9) {
        console.log("Insuficiente");
    } else if (nota >= 5 && nota <= 5.9) {
        console.log("Bien");
    } else if (nota >= 6 && nota <= 8.9) {
        console.log("Notable");
    } else {
        console.log("Sobresaliente");
    }
}
function ejercicio6() {
    console.log("Ejercicio 6");
    let limite = parseInt(prompt("Introduce un número tope:"));
    let pares = 2;
    do {
        console.log(`${pares}`);
        pares += 2;
    } while (pares <= limite);
}
function ejercicio7() {
    console.log("Ejercicio 7");
    let limite = parseInt(prompt("Introduce un número tope:"));
    let impares = 1;
    do {
        console.log(`${impares}`);
        impares += 2;
    } while (impares <= limite);
}
function ejercicio8() {
    let num = parseInt(prompt("Introduce el número al que le quieras hacer la tabla:"));

    for (let i = 1; i <= 10; i++) {
        document.getElementById("ejercicio8").addEventListener("click", multiplicacion());
        function multiplicacion() {
            document.getElementById("tabla").innerHTML += `<p>${num}*${i} = ${num * i}<p>`
            if (i == 10) {
                document.getElementById("tabla").innerHTML += `</p> <button id='borrar2'>Borrar</button>`
                document.getElementById("borrar2").addEventListener("click", borrar2);
                
                function borrar2() {
                    location.reload();
                }
            }
        }

    }
}
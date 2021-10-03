function cono() {
    console.log("Ejercicio cono Galicia");
    let r = prompt("Introduce el radio del cono:");
    let h = prompt("Introduce la altura del cono:");
    let v = (3.14 * (r ^ 2) * h) / 3;
    console.log(`El volumen del cono es ${v}`);
}
function geometria() {
    console.log("Ejercicio geometría (Madrid)");
    //EJEMPLOS USO FUNCIONES
    console.log(`Área del triángulo de base 4 y altura 2 es ${areaTriangulo(4, 2)}`);
    console.log(`Perímetro del triángulo equilátero de lado 4 es ${permietroTrianguloEquilatero(4)}`);
    console.log(`Perímetro del triángulo isósceles de lados iguales 4 y lado desigual 2 es ${perimetroTrianguloIsosceles(4, 2)}`);
    console.log(`Perímetro del triángulo escaleno de lados 4, 6 y 8 es ${permietroTrianguloEscaleno(4, 6, 8)}`);
    console.log(`Área de un cuadrado de lado 4 es ${areaCuadrado(4)}`);
    console.log(`Perímetro del cuadrado de lado 4 es ${perimetroCuadrado(4)}`);
    console.log(`Área de un rectángulo de base 6 y altura 4 es ${areaRectangulo(6, 4)}`);
    console.log(`Área de un círculo de radio 6 es ${areaCirculo(6)}`);
    console.log(`Longitud de una circunferencia de radio 6 es ${longitudCircunferencia(6)}`);
    //FUNCIONES
    function areaTriangulo(b, a) { return (b * a) / 2 };
    function permietroTrianguloEquilatero(l) { return 3 * l };
    function perimetroTrianguloIsosceles(l1, l2) { return 2 * l1 + l2 };
    function permietroTrianguloEscaleno(l1, l2, l3) { return l1 + l2 + l3 };
    function areaCuadrado(l) { return l ^ 2 };
    function perimetroCuadrado(l) { return 4 * l };
    function areaRectangulo(l1, l2) { return l1 * l2 };
    function areaCirculo(r) { return 3.14 * (r ^ 2) };
    function longitudCircunferencia(r) { return 2 * 3.14 * r };
}
function operadores() {
    console.log("Ejercicio operadores (Madrid)");
    let a = 2, b = 7, c = true, d = false, eTexto = '1';
    console.log('VERDADERO: ' + (a + b > 8 && a - b < 1));
    console.log('FALSO: ' + (a + b == 8 && a - b == -2));
    console.log('VERDADERO: ' + (c != d));
    console.log('FALSO: ' + (c == d));
    console.log('FALSO: ' + (!a));
    console.log('FALSO: ' + (eTexto === 1));
    console.log('FALSO: ' + (eTexto === 1 && eTexto != "Caracol"));
    console.log('VERDADERO: ' + ('Zapato' != 'almendra'));
}
function anonimas() {
    console.log("Ejercicio funciones anónimas (CLM) (hace lo mismo que el de geometría pero la variación esta en el js)");
    //FUNCIONES
    let areaTriangulo = function (b, a) { return (b * a) / 2 };
    let permietroTrianguloEquilatero = function (l) { return 3 * l };
    let perimetroTrianguloIsosceles = function (l1, l2) { return 2 * l1 + l2 };
    let permietroTrianguloEscaleno = function (l1, l2, l3) { return l1 + l2 + l3 };
    let areaCuadrado = new Function("l", "return l^2;");
    let perimetroCuadrado = new Function("l", "return 4*l;");
    let areaRectangulo = new Function("l1", "l2", "return l1*l2;");
    (function () { return 3.14 * (r ^ 2); }());
    (function () { return 2 * 3.14 * r; }());
}
function condicionales() {
    console.log("Ejercicio condicionales (Islas Baleares)");
    let res1 = prompt("¿Piensas en una localidad costera?");
    let res2 = prompt("¿Tiene un equipo de fútbol en primera?");
    if (res1 == "si" && res2 == "si") {
        console.log("Estás pensando en Valencia");
    } else {
        console.log("No estás pensando en Valencia");
    }
}
function buclefor() {
    console.log("Ejercicio repeticiones (bucle for) (Andalucía)");
    for (let i = 8; i < 21; i++) {
        for (let j = 0; j < 60; j++) {
            if (j == 0 || j == 15 || j == 30 || j == 45) {
                if (i >= 10 && j != 0) {
                    console.log(`${i}:${j}`);
                } else {
                    if (i < 10 && j == 0) {
                        console.log(`0${i}:${j}0`);
                    } else {
                        if (i < 10) {
                            console.log(`0${i}:${j}`);
                        } else {
                            if (j = 0) {
                                console.log(`${i}:${j}0`);
                            }
                        }
                    }
                }
            }
        }
    }
}
function bucleforin() {
    console.log("Ejercicio repeticiones (bucle forin) (Andalucía)");
    let jugadores = {
        "Paco": 4,
        "Elena": 8,
        "Claudia": 12,
        "Miguel": 16,
        "Marina": 20,
        "Jesús": 24,
        "Fran": 28,
        "Morón": 32,
        "Ramiro": 36,
        "Hugo": 40
    };
    for (let key in jugadores) {
        console.log(key);
    }
}
function buclewhile() {
    console.log("Ejercicio repeticiones (bucle while) (Andalucía)");
    let respuesta = "";
    do {
        respuesta = prompt("¿Quién fue el primer presidente de la democracia española?");
        if (respuesta == "adolfo") {
            alert("Te falta el apellido");
        } else {
            if (respuesta == "suarez") {
                alert("Te falta el nombre");
            }
        }
    } while (respuesta != "adolfo suarez");
    console.log("Correcto, el primer presidente de la democracia española fue Adolfo Suárez");
}
function multiplo3() {
    console.log("Ejercicio saltos 1 (Murcia)");
    for (let i = 1; i <= 100; i++) {
        if (i % 3 != 0) {
            console.log(i);
        }
    }
}
function mesesverano() {
    console.log("Ejercicio saltos 2 (Murcia)");
    for (let i = 0; i < 12; i++) {
        switch (i) {
            case 0:
                console.log("Enero");
                break;
            case 1:
                console.log("Febrero");
                break;
            case 2:
                console.log("Marzo");
                break;
            case 3:
                console.log("Abril");
                break;
            case 4:
                console.log("Mayo");
                break;
            case 5:
            case 6:
            case 7:
                break;
            case 8:
                console.log("Septiembre");
                break;
            case 9:
                console.log("Octubre");
                break;
            case 10:
                console.log("Noviembre");
                break;
            case 11:
                console.log("Diciembre");
                break;
            default:
                break;
        }
    }

}
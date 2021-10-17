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
    console.log("Ejercicio 8");
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
function ejercicio9() {
    console.log("Ejercicio 9");
    let filas = prompt("Indica el número de filas de la tabla:");
    let columnas = prompt("Indica el número de columnas de la tabla:");
    // Obtener la referencia del elemento body
    var body = document.getElementById("tabla2");
    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    // Crea las celdas
    for (var i = 0; i < filas; i++) {
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");
        for (var j = 0; j < columnas; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("fila " + (i + 1) + ", columna " + (j + 1));
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
    }
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
    tabla.setAttribute("align", "center");
}
function ejercicio10() {
    console.log("Ejercicio 10");
    let num = prompt("Introduce un número para ver si es primo:");
    let primo = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            primo = false;
        }
    }
    if (primo) {
        console.log("El número es primo.");
    } else {
        console.log("El número NO es primo");
    }
}
function ejercicio11() {
    console.log("Ejercicio 11");
    let num1 = parseInt(prompt("Introduce un número:"));
    let num2 = parseInt(prompt("Introduce un número:"));
    console.log(suma(num1, num2));
    function suma(a, b) {
        return a + b;
    }
}
function ejercicio12() {
    console.log("Ejercicio 12");
    let anno = parseInt(prompt("Introduce un año para ver si es bisiesto:"));
    if (anno % 4 === 0) {
        console.log("El año es bisiesto.");
    } else {
        console.log("El año NO es bisiesto.");
    }
}
function ejercicio13() {
    console.log("Ejercicio 13");
    let base = parseInt(prompt("Introduce la base del rectángulo"));
    let altura = parseInt(prompt("Introduce la altura del rectángulo"));
    console.log(`El perímetro del rectángulo es ${2 * altura + 2 * base}`);
}
function ejercicio14() {
    console.log("Ejercicio 14");
    function factorial(numero) {
        if (numero == 0) {
            return 1;
        } else {
            return numero * factorial(numero - 1);
        }
    }
    let num = parseInt(prompt("Introduce un número:"));
    console.log(factorial(num));
}
function ejercicio15() {
    console.log("Ejercicio 15");
    class Telefono {
        constructor(marca, modelo, color) {
            this.marca = marca;
            this.modelo = modelo;
            this.color = color;
        }
    }
    telefono1 = new Telefono("apple", "iphone12", "verde");
    telefono2 = new Telefono("samsung", "s7", "azul");
    console.log(`Me he comprado el nuevo ${telefono1.marca} del modelo ${telefono1.modelo} en color ${telefono1.color}`);
    class Persona {
        constructor(nombre, apellido, edad) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
        }
        nombreCompleto() {
            return `${this.nombre} ${this.apellido}`;
        }
    }
    persona1 = new Persona("paco", "aranda", 19);
    persona2 = new Persona("jesus", "olalla", 27);
    console.log(`Me llamo ${persona1.nombreCompleto()}`);
}
function ejercicio16() {
    console.log("Ejercicio 16");
    class Telefono {
        constructor(marca, modelo, color) {
            this.marca = marca;
            this.modelo = modelo;
            this.color = color;
        }
        get getMarca() {
            return this.marca;
        }
        get getModelo() {
            return this.modelo;
        }
        set setModelo(valor) {
            this.modelo = valor;
        }
        set setMarca(valor) {
            this.marca = valor;
        }
    }
    telefono1 = new Telefono("apple", "iphone12", "azul");
    console.log(`Yo antes tenía un ${telefono1.getMarca}, el ${telefono1.getModelo}`);
    telefono1.setMarca = "samsung";
    telefono1.setModelo = "s7";
    console.log(`Ahora tengo un ${telefono1.getMarca}, el ${telefono1.getModelo}`);
}
function ejercicio17() {
    console.log("Ejercicio 17");
    class Telefono {
        constructor(marca, color) {
            this.marca = marca;
            this.color = color;
        }
        get getMarca() {
            return this.marca;
        }
        anuncio() {
            return `La marca ${this.getMarca} esta disponible para compra`;
        }
    }
    class Modelo extends Telefono {
        constructor(marca, modelo, color) {
            super(marca, color);
            this.modelo = modelo;
        }
        get getMarca() {
            return this.marca;
        }
        get getModelo() {
            return this.modelo;
        }
        anuncioCompleto() {
            return `${this.anuncio()} y su modelo ${this.getModelo} también`;
        }
    }
    telefono1 = new Modelo("apple", "iphone12", "rojo");
    telefono2 = new Modelo("samsung", "s8", "negro");
    console.log(telefono1.anuncioCompleto());
}
function ejercicio18() {
    console.log("Ejercicio 18");
    class Rectangulo {
        constructor(base, altura) {
            this.base = base;
            this.altura = altura;
        }
        get getBase() {
            return this.base;
        }
        get getAltura() {
            return this.altura;
        }
        areaRectangulo() {
            return this.getAltura * this.getBase;
        }
        perimetroRectangulo() {
            return 2 * (this.getAltura + this.getBase);
        }
    }
    rectangulo1 = new Rectangulo(5, 10);
    console.log(`El area del rectangulo es ${rectangulo1.areaRectangulo()} y su perimetro ${rectangulo1.perimetroRectangulo()}`);
}
function ejercicio19() {
    console.log("Ejercicio 19");
    class Vehiculo {
        constructor(color, marca, modelo, vmax) {
            this.color = color;
            this.marca = marca;
            this.modelo = modelo;
            this.vmax = vmax;
        }
        comenzar() {
            return "Encender motor";
        }
        parar() {
            return "Apagar motor";
        }
        distanciaMax(t) {
            return this.vmax * t;
        }
    }
    class Coche extends Vehiculo {
        constructor(color, marca, modelo, vmax) {
            super(color, marca, modelo);
            this.vmax = 120;
        }
        parar() {
            return "Aparcar";
        }
    }
    class Avion extends Vehiculo {
        constructor(color, marca, modelo, vmax) {
            super(color, modelo, marca);
            this.vmax = 1000;
        }
        comenzar() {
            return "Despegar";
        }
        parar() {
            return "Aterrizar";
        }
    }
    moto1 = new Vehiculo("Morado", "Kawasaki", "Ninja", "200");
    coche1 = new Coche("Gris", "Opel", "Corsa");
    avion1 = new Avion("Blanco", "Boeing", "747");
    console.log("Moto:");
    console.log(`Me he comprado una moto de color ${moto1.color}, de la marca ${moto1.marca}. El modelo es ${moto1.modelo}`);
    console.log(`${moto1.comenzar()}`);
    console.log(`La moto en 2h recorre una distancia de ${moto1.distanciaMax(2)}km`);
    console.log(`${moto1.parar()}`);
    console.log("Coche:");
    console.log(`Me he comprado un coche de color ${coche1.color}, de la marca ${coche1.marca}. El modelo es ${coche1.modelo}`);
    console.log(`${coche1.comenzar()}`);
    console.log(`El coche en 5h recorre una distancia de ${coche1.distanciaMax(5)}km`);
    console.log(`${coche1.parar()}`);
    console.log("Avion:");
    console.log(`Me he comprado un avion de color ${avion1.color}, de la marca ${avion1.marca}. El modelo es ${avion1.modelo}`);
    console.log(`${avion1.comenzar()}`);
    console.log(`El avion en 12h recorre una distancia de ${avion1.distanciaMax(12)}km`);
    console.log(`${avion1.parar()}`);

}
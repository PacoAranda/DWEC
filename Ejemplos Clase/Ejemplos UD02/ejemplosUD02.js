function ejemplo22() {
    console.log("Esto es un mensaje en la consola");
    alert("Esto es un mensaje en una ventana emergente");
}
function ejemplo23() {
    let nombre = prompt("Nombre:");
    confirm(`¿Seguro que te llamas ${nombre}?`);
}
function ejemplo32() {
    var ejemplo = 3 //Si no se pone nada, cuenta como var (ejemplo=3)
    if (ejemplo == 3) {
        var variable1 = 7;
        let variable2 = 2;
    }
    console.log(`La variable 1 existe y vale ${variable1}`); //variable1 existe en este lugar
    console.log(`La variable 2 vale ${variable2}, pero no existe (fuera de ámbito) y da error en la consola`); //variable2 no existe en este lugar
}
function ejemplo33() {
    let edad = 19, nuevaedad, incremento = 6;
    const nombre = "Paco";
    console.log(typeof edad === "number"); //el triple igual es para preguntar si es ESTRICTAMENTE IGUAL
    console.log(typeof nombre === edad); //devuelve false porque int!=string
    nuevaedad = edad + incremento;
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años, dentro de ${incremento} años, tendré ${nuevaedad} años`);
}
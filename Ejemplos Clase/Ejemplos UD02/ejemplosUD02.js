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
function ejemplo341(){
    let numero = 5;
    console.log(numero); //muestra 5 de forma numérica (se ve de color en la consola)
    console.log(numero.toString()); //muestra 5 igualmente pero en formato string (se ve negro en la consola)

}
function ejemplo343(){
    let num1 = "4", num2=6;
    console.log(typeof num1 + " " + typeof num2); //para ver que son distintos tipos
    console.log(num1+num2); //nos muestra 46, nos convierte el numero (num2) directamente a string
}
function ejemplo344(){
    let x = "10", y = 9, z ="9";
    console.log(x<y); //resultado false, se produce una conversión
    console.log(x<z); //resultado true porque los dos son string
}
function ejemplo346(){
    let altura; //variable no definida
    console.log(altura ? true : false); //al no estar definido, false
    //es como usar if
    /* if (altura){
        console.log("true");
    }else{
        console.log("false");
    }*/
}
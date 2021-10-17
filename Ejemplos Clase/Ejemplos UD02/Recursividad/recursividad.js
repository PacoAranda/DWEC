/**
 * @author PacoAranda
 * @email franciscojavier.aranda.alu@iescampanillas.com
 * @create date 2021-10-07 08:48:47
 * @modify date 2021-10-07 08:48:47
 * @desc [description]
 */
function recursividad1() {
    console.log("Factorial de un número");
    function factorial(numero) {
        if (numero == 0) {
            return 1;
        } else {
            return numero*factorial(numero-1);
        }
    }
    let num=parseInt(prompt("Introduce un número:"));
    console.log(factorial(num));
}
function recursividad2(){
    console.log("División");
    function division(num1,num2){
        if (num1-num2<num2){
            return num1-num2;
        }else{
            return division(num1-num2,num2);
        }
    }
    let num1=parseInt(prompt("Introduce un número:"));
    let num2=parseInt(prompt("Introduce un número:"));
    console.log(`El resto de ${num1}/${num2} es  ${division(num1,num2)}`);
}
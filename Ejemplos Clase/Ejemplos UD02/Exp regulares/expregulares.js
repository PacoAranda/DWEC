/**
 * @author PacoAranda
 * @email franciscojavier.aranda.alu@iescampanillas.com
 * @create date 2021-10-07 10:17:46
 * @modify date 2021-10-07 10:17:46
 * @desc [description]
 */
function expreg1(){
    console.log("Ejemplo fecha");
    let patron = /^\d{2}\/\d{2}\/\d{4}$/;
    let fecha = "10/06/2002";
    console.log(patron.test(fecha));
}
function expreg2(){
    console.log("Ejemplo contraseña");
    let patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@$%&-_])(?=.{8,})$/;
    let contras = "12345aA-";
    console.log(patron.test(contras));
}
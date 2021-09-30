function ejemplo51() {
    console.log("Ejemplo 5.1");
    let num1 = 3;
    let num2 = 5;
    console.log(`Los operadores son ${num1} y ${num2}`);
    console.log(`La suma de ${num1} y ${num2} es ${num2 += num1}`);
    console.log(`La resta de ${num1} y ${num2} es ${num2 -= num1}`);
    console.log(`La multiplicación de ${num1} y ${num2} es ${num2 *= num1}`);
    console.log(`La división de ${num1} y ${num2} es ${num2 /= num1}`);
    console.log(`El módulo de ${num1} y ${num2} es ${num2 %= num1}`);
}
function ejemplo52() {
    let num1 = 5, num2 = 8, resultado1, resultado2;
    console.log("Ejemplo 5.2");
    console.log(`Los operadores son ${num1} y ${num2}`);
    resultado1 = ((num1 + num2) * 200) / 100; //esto es el 200%
    console.log(resultado1);
    resultado2 = resultado1 % 3;
    console.log(resultado2);
    resultado1 = ++num1;
    console.log(resultado1);
    resultado2 = num2++;
    console.log(resultado2);
    resultado1 = --num1;
    console.log(resultado1);
    resultado2 = num2--;
    console.log(resultado2);
    resultado1 = -resultado2;
    console.log(resultado1);
}
function ejemplo53() {
    let a = 4, b = 5, c = "5";
    console.log("Ejemplo 5.3");
    console.log(`El resultado de a==c es ${a==c}`);
    console.log(`El resultado de a===c es ${a===c}`);
    console.log(`El resultado de a!=c es ${a!=c}`);
    console.log(`El resultado de a!==c es ${a!==c}`);
    console.log(`El resultado de a==b es ${a==b}`);
    console.log(`El resultado de a!=b es ${a!=b}`);
    console.log(`El resultado de a>b es ${a>b}`);
    console.log(`El resultado de a<b es b${a<b}`);
    console.log(`El resultado de a>=b es ${a>=b}`);
    console.log(`El resultado de <=b es ${a<=b}`);
}
function ejemplo54(){
    
}
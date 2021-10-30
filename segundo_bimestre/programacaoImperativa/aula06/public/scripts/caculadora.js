
//Calculadora - Nível I

/* 
1 - Crie um arquivo calculadora.js que terá as diferentes operações  para realizar. 
*/


/*
2 - Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.
*/
let adicao = (number1, number2) =>{
    return number1 + number2; 
}
console.log(adicao(20,13)); 
 

/* 
3 - Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração 
do primeiro menos o segundo. 
*/

let subtracao = (number1, number2) =>{
    return number1 - number2; 
}
console.log(subtracao(20,7));

/* 
4 - Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o 
resultado de sua multiplicação. 
*/

let multiplicacao = (number1, number2) =>{
    return number1 * number2; 
}
console.log(multiplicacao(20,3));


/* 
5 - Crie uma função de divisão, que receberá dois parâmetros 
e retornará o resultado da divisão do primeiro sobre o segundo.
*/

let divisao = (number1, number2) =>{
    return number1 / number2; 
}
console.log(divisao(6,3));



//Calculadora - Nível II

/* 
1 - No seu arquivo calculadora.js,  a partir das 4 funções feitas anteriormente, crie um console.log no qual você irá colocar uma string 
para indicar que abaixo dela você começará a testar as funções, por exemplo: 
*/
console.log ("-------------- Teste de Operações / Calculadora --------------"); 

/* 
2 - Execute a função que soma e a função que subtrai, passando 
quaisquer dois números como argumentos. Mostrar resultados no console. 
*/
console.log("Adição \n",adicao(20,5));
console.log("Subtração \n", subtracao(25, 5)); 


/* 
3 - Execute a função que multiplica, passando quaisquer dois números como argumentos. 
Mostre o resultado no console.
*/
console.log("Multiplicação \n", multiplicacao(20,5));

/* 
4 - Execute a função que faz divisão, 
passando quaisquer dois números como argumentos. Mostre o resultado no console. 
*/

console.log("Divisão \n", divisao (25, 5)); 

/* 
5 - Execute a função que faz divisão, passando agora o número zero 
como um dos dois argumentos. Mostre o resultado no console.
 */

console.log("Divisão com número zero como um argumento\n", divisao (25, 0));


//Calculadora - Nível III - Funções Extras

/* 
1 - Crie uma função chamada quadradoDoNumero, que recebe um número 
como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado. 
*/

let quadradoDoNumero = (x) =>{
    return multiplicacao(x,x);
}; 

console.log("Quadrado\n",quadradoDoNumero(2));


/* 
2 - Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
Importante: Em mediaDeTresNumeros() você precisará usar algumas funções 
criadas anteriormente em nossa calculadora. 
*/

let mediaDeTresNumeros = (nember1, number2, number3) =>{
    
    return Math.round((adicao(nember1, number2) + number3)/3); 
   
}
console.log("Media três números \n", mediaDeTresNumeros(20, 30, 20 ));


/* 
3 - Crie a função calculaPorcentagem, que receberá dois parâmetros:
 o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.
Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300).  
*/

let calculaPorcentagem = () =>{
    return multiplicacao(300, 20)/100; 
}

console.log("Porcentagem \n", calculaPorcentagem()); 

/* 
4 - Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá 
retornar a porcentagem do primeiro em relação ao segundo parâmetro.
Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200). 
*/


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("\n\n--------------------------------------------------------------------------------------------");
console.log("4 - Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).");
rl.question("Primeiro número ? ", function(n1) {
    rl.question("Segundo número? ", function(n2) {
        
        console.log(`a porcentagem de ${n1}, em relação a ${n2}`);
        console.log("é igual a =", n1 * 100 / n2 +"%"); 

        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nParabéns, conseguimos aplicar e entender conceitos que vão nos servir ao longo de \n nossa carreira, agora temos que pensar em melhorias para nossa Calculadora com o \n conhecimento que iremos adquirir no futuro."
    );
    process.exit(0);
});



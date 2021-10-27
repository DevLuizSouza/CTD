

/* 1 - Crie uma função que converta polegadas em centímetros. 
Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros. */

const conversaoPolegadas = (p) =>{

    return p * 2.54; 
}

console.log (conversaoPolegadas(10)); 


/* 2 - Crie uma função que receba uma string e a converta em um URL.
ex: "funcaojs" é retornado como "http://www.funcaojs.com.br" */

const conversaoUrl = (url) =>{

    return "http://www."+ url+".com.br"; 
}

console.log (conversaoUrl("google")); 


/* 3 - Crie uma função que recebe uma string e retorna a mesma frase, mas com o 
caracter de exclamação ( ! ).
 */

const exclamacao = (frase) =>{
    return frase + "!";

}
console.log(exclamacao("teste")); 

/* 4 - Crie uma função que calcule a idade dos cachorros, 
considerando que 1 ano humano, equivale a 7 anos para eles. */

const idadeCao = (idade) =>{
    return idade * 7; 

}
console.log(idadeCao(3)); 


/*5 - Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
PS: considere que você trabalhe 160 horas no mês.*/

const valorHora = (salario) =>{

    return Math.round(salario / 160); 
    
}

console.log( valorHora(2650)); 

/* 
6 - Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e
 o peso em quilogramas. Em seguida, 
execute a função, testando diferentes valores.
 */

const imc = (peso, altura) =>{
    return Math.round(peso/((altura/100) * (altura/100))); 
}

console.log(imc(80, 180))


/* 7 - Crie uma função que receba uma string em minúsculas, 
converta-a em maiúsculas e as retorne. 
Investigue o que o método de .toUpperCase() faz. */

const maiuscula = (texto)=>{
    return texto.toUpperCase(); 
}

console.log(maiuscula("teste javascript"));


/* 8 - Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
Dica: Isso te ajudará a entender o que o operador typeof faz.*/
const retornaTipo = (t) =>{
    return typeof t;
} 

console.log(retornaTipo("true")); 



/* 9 -  Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.*/

const  circunferencia = (raio)=> {
    return (2 * Math.PI * raio);
}

console.log(circunferencia(5));
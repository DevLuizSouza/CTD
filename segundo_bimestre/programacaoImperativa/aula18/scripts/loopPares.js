/* 1 - Loop de Pares
Você deve criar uma função chamada loopDePares que receba um número como parâmetro e 
faça loops de 0 a 100 mostrando cada número do loop no console.
Caso o número da iteração somado com o número passado pelo 
parâmetro seja par, aparecerá no console: "O número x é par"
 */

let result = 0
let i = 0;
let loopDePares = (num) =>{
     
     
    for( i == -1; i <= 100; i++){
        result = i + num; 

        if( result % 2 == 0){
            console.log(" O número "+ result + " é par"); 

        }
        if (result % 2 != 0){
            console.log(i);
        }
         

    }

}
loopDePares (5); 
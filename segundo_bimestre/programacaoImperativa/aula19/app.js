const fs = require('fs'); 
let dados = fs.readFileSync(__dirname + '/dados.json', 'utf-8'); 
let pessoas = JSON.parse(dados); 

let maiorAltura = 0; 
    pessoas.forEach( (altMax) =>{
    maiorAltura = Math.max(altMax.altura, maiorAltura); 
    
});

let menorAlt = Math.min.apply(Math, pessoas.map( (b) =>{
    return b.altura;
}));


 /* let menorAltura = 0; 
  let mAltura = Math.min.apply(Math, pessoas.map((menAltura)=>{ 
     
    menorAltura = menAltura.altura; 
    console.log(menorAltura); 

  
})); */

 


const quantidade =(qtd) => {
    cont = qtd.filter((i) => i.sexo == "M");
    return cont.length;
};

console.log(maiorAltura); 
console.log(menorAlt);
console.log(quantidade(pessoas));
 
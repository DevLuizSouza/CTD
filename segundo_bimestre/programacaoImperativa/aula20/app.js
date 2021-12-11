const fs = require('fs'); 
let dados = fs.readFileSync(__dirname + '/dados.json', 'utf-8'); 
let pessoas = JSON.parse(dados); 

  
for(pessoas of pessoas){
    let  cont;  
    if(pessoas.opniao == 3){
       cont = pessoas.idade; 

    }
console.log(cont)
}
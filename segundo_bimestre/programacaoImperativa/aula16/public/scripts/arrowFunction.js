

/* 
let bemVindo = () => 'Olá Mundo!';

let dobro = numero => numero * 2;

let soma = (a, b) => a + b; 

let horaAtual = () => {
   let data = new Date();
   return data.getHours() + ':' + data.getMinutes();
}

console.log(horaAtual());  */


function acaoCarro(callback){
return callback();
}; 

function andar(){
   console.log("O carro está andando");
};

function parar(){
   console.log("O carro parou");
};

acaoCarro(parar);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       


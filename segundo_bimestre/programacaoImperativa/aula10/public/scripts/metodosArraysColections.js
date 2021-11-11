let listaCompras = ["5kg Farinha", "Uma Bandeja com 30 ovos", "1kg Sal", "3Kg Açúcar"]; 
console.log(listaCompras[3]); 

listaCompras = ["Uma melancia", "5kg Arroz", "2Kg Sabão em pó", "Uma garrafa de Óleo"]; 
console.log(listaCompras); 

listaCompras.push("1Kg Feijão");
console.log(listaCompras); 


listaCompras.pop();
console.log(listaCompras); 
estoqueAlimentos= ["1Kg Feijão", "12 Litros de Leite"]; 


let retorno = estoqueAlimentos[1]===listaCompras[1];
console.log(retorno); 

console.log(listaCompras.reverse()); 


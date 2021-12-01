let carro = {
    modelo : "Ford", 
    cor: "branca",
    andar : function(){
        return "carro " +this.modelo+" andando na cor" +this.cor; 
    }
}

console.log(carro.andar()); 

function Carro(modelo, cor){
    this.modelo = modelo; 
    this.cor = cor; 
    this.pular = function(){
        return 'meu ' +this.modelo+ ' esta pulando'; 
}


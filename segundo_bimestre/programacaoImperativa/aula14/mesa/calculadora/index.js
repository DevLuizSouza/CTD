

let calculadora = (escolha, nun1, nun2) => {
    let resultado = 0;
    if (escolha == 1) {
        resultado = nun1 + nun2;
        return console.log("Resultado da soma = ", resultado);
    }
    else if (escolha == 2) {
        esultado = nun1 - nun2;
        return console.log("Resultado da subtração = ", resultado);
    }
    else if (escolha == 3) {
        esultado = nun1 * nun2;
        return console.log("Resultado da multiplicação = ", resultado);
    }
    else if (escolha == 4) {
        esultado = nun1 / nun2;
        return console.log("Resultado da divisão = ", resultado);
    }





}

module.exports = calculadora;
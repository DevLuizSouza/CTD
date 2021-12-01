
function Cliente(numeroConta, tipoConta, saldoConta, titularConta){
    this.numeroConta = numeroConta;
    this.tipoConta = tipoConta;
    this.saldoConta = saldoConta; 
    this.titularConta = titularConta; 
}

let cliente = new Cliente(708056, "CC", 1200.55, "Luiz de Souza" );

console.log(cliente.this.numeroConta()); 
class aluno {
    constructor(nome, qtdFalta, notas){
        this.nome = nome;
        this.qtdFalta = qtdFalta;
        this.notas = notas;
   
    
    this.calcularMedia = () =>{
        return this.notas.reduce((nota,notaSeguinte) => nota + notaSeguinte) / this.notas.length;
    }

    this.faltas = () =>{
        this.qtdFalta++;
    }
}
};

module.exports = aluno;
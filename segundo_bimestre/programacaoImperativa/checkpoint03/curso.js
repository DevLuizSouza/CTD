const aluno = require('./aluno');
const estudantes = require('./estudantes');

let curso = {
    nomeDoCurso: 'Programação imperativa ',
    notaDeAprovacao: 7,
    faltasMaximas: 3,
    listaEstudantes: estudantes,

   

    paraSerAprovado(aluno) {
        let aprovado;
        let mediaEspecial = this.notaDeAprovacao * 1.1;
        let mediaFinal = aluno.calcularMedia();
        let falta = aluno.qtdFalta;
        if (falta > this.faltasMaximas && mediaFinal < mediaEspecial) {
            console.log("@ alun@:" + aluno.nome + " foi: Reprovad@ por faltas");
            aprovado = false;
            return false;

        } else if (mediaFinal < this.notaDeAprovacao) {
            console.log("@ alun@:" + aluno.nome + " foi: Reprovad@ por notas");
            aprovado = false; return arrayResultados;
            return false;
        } else {
            console.log("@ alun@:" + aluno.nome + " foi: Aprovad@");
            aprovado = true;
            return true;
        }
        return aluno.nome + " está aprovado? " + aprovado;

    },

    adicionarAluno(nome, qtdFalta, notas) {
        let newAluno = new aluno(nome, qtdFalta, notas);
        this.listaEstudantes.push(newAluno);
    },


    resultados(alunos) {
        let arrayResultados = [];
        for (let i = 0; i < alunos.length; i++) {
            arrayResultados[i] = this.paraSerAprovado(alunos[i]);
            console.log("--------")
        }
        return arrayResultados;

    }

};

console.log("          Curso          ");
console.log("    " + curso.nomeDoCurso + "    ");
console.log("Requesitos para aprovação");
console.log("Nota de Aprovação: " + curso.notaDeAprovacao);
console.log("Máximo de Faltas:" + curso.faltasMaximas);
console.log("    Resultado   ");

console.log(curso.resultados(curso.listaEstudantes));




let altura = 1.70;

let podeSubir = (altura) => {
    atorizacaoSubir = false; 

    if(altura > 1.40 && altura <2.0){
        atorizacaoSubir= true; 
        console.log("Acesso autorizado"); 

    }
    else if(altura >=1.20 && altura < 1.40){
        atorizacaoSubir = true;
        console.log("Acesso autorizado somente com acompanhante"); 

    }
    else{
        console.log("Acesso negado!");
    }



    podeSubir ();




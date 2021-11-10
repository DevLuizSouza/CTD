
microwaveMenu = (option, time)=>{
    let pipoca = 10; 
    let macarrao = 10; 
    let carne = 15; 
    let feijao = 12;
    let brigadeiro = 8;     


    switch (option){ 

        case 1:
            if(option === 1 && time  === 10){
                console.log("Prato pronto, bom apetite!!!");

             }

            else if(option === 1 && time  < pipoca ){
                console.log("Tempo insuficiente!");

            }

            else if(option === 1 && time > pipoca * 2 && time <30){
                console.log("A comida queimou");     
            } 
        
            else if(option === 1 && time  >  pipoca * 3 ){
                console.log("Kabumm!");

            };
        break; 
        
        case 2:
            if(option === 2 && time  === 8){
                console.log("Prato pronto, bom apetite!!!");

             }

            else if(option === 2 && time  < macarrao ){
                console.log("Tempo insuficiente!");

            }

            else if(option === 2 && time > macarrao * 2 && time <24){
                console.log("A comida queimou");     
            } 
        
            else if(option === 2 && time  >  macarrao * 3 ){
                console.log("Kabumm!");

            };
        break;  

        case 3:
            if(option === 3 && time  === 15){
                console.log("Prato pronto, bom apetite!!!");

             }

            else if(option === 3 && time  < carne ){
                console.log("Tempo insuficiente!");

            }

            else if(option === 3 && time > carne * 2 && time <45){
                console.log("A comida queimou");     
            } 
        
            else if(option === 3 && time  > carne * 3 ){
                console.log("Kabumm!");

            };
        break;  

        case 4:
            if(option === 4 && time  === 12){
                console.log("Prato pronto, bom apetite!!!");

             }

            else if(option === 4 && time  < feijao ){
                console.log("Tempo insuficiente!");

            }

            else if(option === 4 && time > feijao * 2 && time <36){
                console.log("A comida queimou");     
            } 
        
            else if(option === 4 && time  >  feijao * 3 ){
                console.log("Kabumm!");

            };
        break; 
        
        case 5:
            if(option === 5 && time  === 8){
                console.log("Prato pronto, bom apetite!!!");

             }

            else if(option ===  5 && time  < brigadeiro ){
                console.log("Tempo insuficiente!");

            }

            else if(option === 5 && time > brigadeiro * 2 && time <24){
                console.log("A comida queimou");     
            } 
        
            else if(option === 5 && time  >  brigadeiro * 3 ){
                console.log("Kabumm!");

            };
        break; 

        default:
        console.log("Prato inexistente");

    }
}


microwaveMenu (1, 32); 
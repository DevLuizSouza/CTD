function FizzBuzzFB(num1, num2){
    for(var count=1; count<= 100; count++){    

    if(count % num1 == 0  && count % num2 != 0){
        Fizz();

    }else if(count % num2 == 0 && count % num1 != 0){
        Buzz();

    }else if(count % num1 == 0 && count % num2 == 0){
        FizzBuzz();

    }else{
        console.log(count);
    }  
    
}

}

let Fizz = () => console.log("Fizz"); 
let Buzz = () => console.log("Buzz");
let FizzBuzz = () => console.log("Fizz Buzz"); 


FizzBuzzFB(2, 3);
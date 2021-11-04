<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./public/styles/style.css">
</head>

<body>
    <h1></h1>
    <p> 1 - !true  
    </p>
    <code>
        false
    </code>
    <p> 2 - !false
    </p>

    <code>
        true
    </code>

    <p>3 - !!false 
    </p>
    <code>
        false       
    </code>

    <p>
        4 - !!true
    </p>
    <code>
        true 
    </code>

    <p>
        5 - !1  
    </p>
    <code>
        false
    </code>

    <p>
        6 - !!1
    </p>
    <code>
        true
    </code>
    
    <p>
        7 - !0
    </p>
    <code>
        true
    </code>
    
    <p>
        8 - !!0
    </p>
    <code>
        false
    </code>


    <p>
        9 -  !!"" 
    </p>
    <code>
        false
    </code>

    <p> 10 - <br>
        let x = 5; <br>
        let y = 9;<br>
        a. x < 10 && x!==5; <br>
        b. x>9 || x===5;<br> 
        c. !(x===y); <br>

 
    </p>
    <code>
        a. false
        b. true
        c. true 
    </code>

    <p> Ex2. O que cada expressão retorna? <br>       
        1 - <br> 
        let x=10 <br>
        let y ="a" <br>
        y==="b" || x >= 10<br> 
           
    </p>
    <code>
         true
    </code>

    <p>  2 - <br>
        let x=3 <br>
        let y=8<br>
        !(x == "3" || x === y) && !(y !== 8 && x <= y)<br>
           
    </p>
    <code>
         false
    </code>


    <p>  3 - <br>
        let str = ""<br>
        let msg = "haha!"<br>
        let eBonito = "false"<br>
        !((str || msg) && eBonito)<br>
          
    </p>
    <code>
         false
    </code>

</body>
</html>
function calc(){
    let number1=document.getElementById("num1").value;
    console.log(number1);
    let number2=document.getElementById("num2").value;
    console.log(number2);
    let operator=document.getElementById("operator").value;
    console.log(operator);

    let x=parseInt(number1);
    let y=parseInt(number2);

    //console.log(x+y);
    //document.getElementById("answer").innerHTML = x+y
    let numbers=x+operator+y+ "=";
    console.log(numbers);
    switch(operator){
        case"+":
            document.getElementById("answer").innerHTML = numbers + (x+y);
            break;       
        case"-":
            document.getElementById("answer").innerHTML = numbers+(x-y) ;
            break;
        case"/":
            document.getElementById("answer").innerHTML =numbers+(x/y) ;
            break;       
        case"*":
            document.getElementById("answer").innerHTML = numbers+(x*y);
            break;
        case":":
            document.getElementById("answer").innerHTML =numbers+(x/y) ;
            break;       
        case".":
            document.getElementById("answer").innerHTML =numbers+(x*y) ;
            break;
    }
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("operator").value="";
}
function gasuftaveba(){
    document.getElementById("answer").innerHTML="";
}

function append7(){
    let x = document.getElementById("answer").innerHTML;
    let num = document.getElementById("butt7").innerHTML;
    x+=num;
    document.getElementById("answer").innerHTML = x;
}
function append8(){
    let x = document.getElementById("answer").innerHTML;
    let num = document.getElementById("butt8").innerHTML;
    x+=num;
    document.getElementById("answer").innerHTML = x;
}
function append9(){
    let x = document.getElementById("answer").innerHTML;
    let num = document.getElementById("butt9").innerHTML;
    x+=num;
    document.getElementById("answer").innerHTML = x;
}
function append4(){
    let x = document.getElementById("answer").innerHTML;
    let num = document.getElementById("butt4").innerHTML;
    x+=num;
    document.getElementById("answer").innerHTML = x;
}
function append5(){
    let x = document.getElementById("answer").innerHTML;
    let num = document.getElementById("butt5").innerHTML;
    x+=num;
    document.getElementById("answer").innerHTML = x;
}
function append6(){
    let x = document.getElementById("answer").innerHTML;
    let num = document.getElementById("butt6").innerHTML;
    x+=num;
    document.getElementById("answer").innerHTML = x;
}
function append1(){
    let x = document.getElementById("answer").innerHTML;
    let num = document.getElementById("butt1").innerHTML;
    x+=num;
    document.getElementById("answer").innerHTML = x;
}
function append2(){
    let x = document.getElementById("answer").innerHTML;
    let num = document.getElementById("butt2").innerHTML;
    x+=num;
    document.getElementById("answer").innerHTML = x;
}
function append3(){
    let x = document.getElementById("answer").innerHTML;
    let num = document.getElementById("butt3").innerHTML;
    x+=num;
    document.getElementById("answer").innerHTML = x;
}
function append0(){
    let x = document.getElementById("answer").innerHTML;
    let num = document.getElementById("butt0").innerHTML;
    x+=num;
    document.getElementById("answer").innerHTML = x;
}
function appendgayofa(){
    let x = document.getElementById("answer").innerHTML;
    let num = document.getElementById("buttgayofa").innerHTML;
    x+=num;
    document.getElementById("answer").innerHTML = x;
}
function appendgamravleba(){
    let x = document.getElementById("answer").innerHTML;
    let num = document.getElementById("buttgamravleba").innerHTML;
    x+=num;
    document.getElementById("answer").innerHTML = x;
}
function appendgamokleba(){
    let x = document.getElementById("answer").innerHTML;
    let num = document.getElementById("buttgamokleba").innerHTML;
    x+=num;
    document.getElementById("answer").innerHTML = x;
}
function appendmimateba(){
    let x = document.getElementById("answer").innerHTML;
    let num = document.getElementById("buttmimateba").innerHTML;
    x+=num;
    document.getElementById("answer").innerHTML = x;
}
function appendudris(){
    let x = document.getElementById("answer").innerHTML;
    let num = document.getElementById("buttudris").innerHTML;
    x+=num;
    document.getElementById("answer").innerHTML = x;
    /*
    let firstel = x.charAt(0);
    console.log(firstel);
    let secondel = x.charAt(1);
    console.log(secondel);
    let thirdel = x.charAt(2);
    console.log(thirdel);

    let y = firstel + thirdel;
    let firstparse = parseInt(firstel);
    let secparse = parseInt(thirdel);
    

    

    switch(secondel){
        case"+":
            let operatorindex=x.indexOf("+");
            console.log(operatorindex);
        
            let udrisindex=x.indexOf("=");
            console.log(udrisindex);
        
            let firstnumber =number(x.slice(0, operatorindex));
            console.log(firstnumber);
        
            let secondnumber =number(x.slice(operatorindex+1, udrisindex));
            console.log(secondnumber);



            let y = firstnumber + secondnumber;
            x+=y;
            document.getElementById("answer").innerHTML = x;
            break;       
        case"−":
            let a = firstparse - secparse
            console.log(a, "gamoklebis pasuxi")
            x+=a;
            document.getElementById("answer").innerHTML = x;    
            break;
        case"÷":
            let b = firstparse / secparse
            x+=b;
            document.getElementById("answer").innerHTML = x;    
            break;       
        case"×":
            let c = firstparse * secparse
            x+=c;
            document.getElementById("answer").innerHTML = x;
            break;
    }*/
    if(x.includes("+")){
        let operatorindex=x.indexOf("+");
        console.log(operatorindex);
        
        let udrisindex=x.indexOf("=");
        console.log(udrisindex);
        
        let firstnumber =x.slice(0, operatorindex);
        let num1 = parseInt(firstnumber);
        console.log(firstnumber);
        
        let secondnumber =x.slice(operatorindex+1, udrisindex);
        console.log(secondnumber);
        let num2= parseInt(secondnumber);
        console.log(secondnumber);
        let y = num1+num2;
        x+=y;
        document.getElementById("answer").innerHTML=x;
    }
    else if(x.includes("−")){
        let operatorindex=x.indexOf("−");
        console.log(operatorindex);
        
        let udrisindex=x.indexOf("=");
        console.log(udrisindex);
        
        let firstnumber =x.slice(0, operatorindex);
        let num1 = parseInt(firstnumber);
        console.log(firstnumber);
        
        let secondnumber =x.slice(operatorindex+1, udrisindex);
        console.log(secondnumber);
        let num2= parseInt(secondnumber);
        console.log(secondnumber);
        let a = num1 - num2;
        x+=a;
        document.getElementById("answer").innerHTML=x;
    }
    else if(x.includes("÷")){
        let operatorindex=x.indexOf("÷");
        console.log(operatorindex);
        
        let udrisindex=x.indexOf("=");
        console.log(udrisindex);
        
        let firstnumber =x.slice(0, operatorindex);
        let num1 = parseInt(firstnumber);
        console.log(firstnumber);
        
        let secondnumber =x.slice(operatorindex+1, udrisindex);
        console.log(secondnumber);
        let num2= parseInt(secondnumber);
        console.log(secondnumber);
        let b = num1 / num2;
        x+=b;
        document.getElementById("answer").innerHTML=x;
    }
    else if(x.includes("×")){
        let operatorindex=x.indexOf("×");
        console.log(operatorindex);
        
        let udrisindex=x.indexOf("=");
        console.log(udrisindex);
        
        let firstnumber =x.slice(0, operatorindex);
        let num1 = parseInt(firstnumber);
        console.log(firstnumber);
        
        let secondnumber =x.slice(operatorindex+1, udrisindex);
        console.log(secondnumber);
        let num2= parseInt(secondnumber);
        console.log(secondnumber);
        let c = num1 * num2;
        x+=c;
        document.getElementById("answer").innerHTML=x
    }
    else{
        document.getElementById("answer").innerHTML=("tqven ar migititebiat operatori");
    }
}
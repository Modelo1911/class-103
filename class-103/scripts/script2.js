//functions
let counter = 0;

//1)Crerating the function
function increase(){
    counter++;
    console.log(counter);
    if (counter==5)
    console.log("Yippy");
}

function decrease(){
    counter--;
    console.log(counter);
}
//2)call/run/execute
function sayHi(){
    let userName=prompt("Enter your name:");

    console.log("Welcome ..." + userName);
}

function multiByThree(){
    let number = prompt("Enter the number");

    let result =number*3;

    document.getElementById("total").innerHTML=result;

}



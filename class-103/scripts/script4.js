//While loop
let number=10;

while (number<=100){
    console.log(number);
    number=number+2; 
}

//display numbers from 10 to 100; 10by 10
//Do loop
let number2=10;
do{
    console.log(number2);
    number2=number2+5;
}while(number2<=100);
//For loop
for(let i=10; i<=100; i+=100){
    console.log(i);
}

let myArray = ["Guillermo", "george", "andrew", "daniel", "ricardo", "james", "fernanda", "rami", "ronesha", "johnny"];
    
for(let i=0;i<myArray.length;i++){
    document.write(`
        <p>${myArray[i]} </p>        
    `);
}








for (i = 1; i <= 100; i++){
    if ((i % 3 == 0) && (i % 5 == 0)){
        console.log("FizzBuzz")
    }else if (i % 3 == 0){
        console.log("Fizz")
    }else if (i % 5 == 0){
        console.log("Buzz")
    } else {
        console.log(i)
    }
}



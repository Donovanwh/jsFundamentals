// ****** CHALLENGES ********

/**************************
FIZZ BUZZ (Conditionals Only)
**************************/

/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/


/*
let FB = 30;

if(FB % 3 === 0){
    console.log("Fizz");
} else{
    console.log("Not divisible by 3");
} if(FB % 5 === 0){
    console.log("Buzz");
} else{
    console.log("Not divisible by 5");
} if(FB % 3 === 0 && FB % 5 === 0){
    console.log("Fizz Buzz");
} else{
    console.log("Try another number!");
}
*/

//Switch Solution #1


let FB = 34;

switch(FB % 3 === 0){
    case true:
        console.log("");
        break;
    default:
        console.log("");
}

switch(FB % 5 === 0){
    case true:
        console.log("");
        break;
    default:
        console.log("");
}

switch(FB % 3 === 0 && FB % 5 === 0){
    case true:
        console.log("Fizz Buzz");
    break;
    default:
        console.log("Try another number!");
}

// class switch solution
/*
let FB = 30;

    switch(true) {
    case FB % 3 === 0 && FB % 5 === 0:
        console.log("Fizz Buzz");
        break; 
    case FB % 5 === 0:
        console.log("Buzz");
        break;
    case FB % 3 === 0:
        console.log("Fizz");
    default:
        console.log("Your number is not divisible by 5 or 3.")
    }
    
*/


/*

let FB = 30;

FB % 3 === 0 ? console.log("Fizz") : console.log("Not divisible by 3");

FB % 5 === 0 ? console.log("Buzz") : console.log("Not divisible by 5");

FB % 3 === 0 && FB % 5 === 0  ? console.log("Fizz Buzz") : console.log("Try another number!");

*/